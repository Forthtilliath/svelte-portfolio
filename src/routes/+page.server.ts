import { SECRET_EMAIL_ACCOUNT } from '$env/static/private';
import transporter from '$lib/server/setupEmail.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from '../lib/components/layout/contact/form.svelte';
import { fail } from '@sveltejs/kit';
import type Mail from 'nodemailer/lib/mailer';
import { sendEmail } from '$lib/methods/sendMail';
import { handleCatchErrorWithCallback } from '$lib/methods/handleCatchError';

export const load = async () => {
	return {
		form: await superValidate(zod(contactFormSchema))
	};
};

export const actions = {
	sendMessage: async ({ request }) => {
		const form = await superValidate(request, zod(contactFormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { email, name, message } = form.data;

		const newMessage: Mail.Options = {
			from: `"${name}" <${email}>`,
			to: SECRET_EMAIL_ACCOUNT,
			subject: `💻 Portfolio : Formulaire de contact de ${name}`,
			text: message,
			html: /*html*/ `
				<p>Nom : ${name}</p>
				<p>Email : ${email}</p>
				<hr />
				<p>${message}</p>
			`
		};

		// return sendEmail(newMessage)
		// 	.then(() => ({
		// 		status: 200,
		// 		message: 'Message sent',
		// 		form
		// 	}))
		// 	.catch((error) =>
		// 		handleCatchErrorWithCallback(error, () => ({
		// 			status: 500,
		// 			message: error,
		// 			form
		// 		}))
		// );

		return sendEmail(newMessage)
			.then(() => ({
				status: 200,
				message: 'Message sent',
				form
			}))
			.catch(
				handleCatchErrorWithCallback((error: string) => ({
					status: 500,
					message: error,
					form
				}))
			);
	},
	sendEmail: async ({ request }) => {
		try {
			const formData = await request.formData();

			const email = formData.get('email');
			const name = formData.get('name');

			if (!email || !name) {
				return {
					status: 400
				};
			}

			const html = `<h2>${name}</h2><p>${email}</p>`;

			const newMessage: Mail.Options = {
				sender: 'rue.normie@yahoo.fr',
				from: email as string,
				to: SECRET_EMAIL_ACCOUNT,
				subject: '🏢 Message from Portfolio',
				text: 'Message from Portfolio',
				html
			};

			const sendEmail = (message: typeof newMessage) => {
				return new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							reject(err);
						}
						resolve(info);
					});
				});
			};

			await sendEmail(newMessage);

			return {
				status: 200,
				message: 'Message sent'
			};
		} catch (error) {
			console.log(error);
		}
	}
};
