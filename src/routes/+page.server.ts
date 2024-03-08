import { SECRET_EMAIL_ACCOUNT } from '$env/static/private';
import transporter from '$lib/methods/emailSetup.server.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from './(components)/(contact)/Form.svelte';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		form: await superValidate(zod(contactFormSchema))
	};
};

export const actions = {
	sendMessage: async (event) => {
		const form = await superValidate(event, zod(contactFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		
		return {
			form
		};
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

			const newMessage = {
				from: email as string,
				to: SECRET_EMAIL_ACCOUNT,
				subject: 'Message from Portfolio',
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
