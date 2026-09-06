import { SECRET_EMAIL_ACCOUNT } from '$env/static/private';
import { contactFormSchema } from '$lib/components/layout/contact/form.svelte';
import { handleCatchErrorWithCallback } from '$lib/methods/handleCatchError';
import { sendEmail } from '$lib/methods/sendMail';
import { isRateLimited } from '$lib/server/rate-limit';
import { fail } from '@sveltejs/kit';
import type Mail from 'nodemailer/lib/mailer';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

const escapeHtml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(contactFormSchema))
	};
};

export const actions = {
	sendMessage: async ({ request, getClientAddress }) => {
		const form = await superValidate(request, zod4(contactFormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		if (isRateLimited(getClientAddress())) {
			return fail(429, {
				form,
				message: 'Too many messages sent. Please try again later.'
			});
		}

		const { email, name, message } = form.data;

		const newMessage: Mail.Options = {
			from: `"${name}" <${email}>`,
			to: SECRET_EMAIL_ACCOUNT,
			subject: `💻 Portfolio : Formulaire de contact de ${name}`,
			text: message,
			html: /*html*/ `
				<p>Nom : ${escapeHtml(name)}</p>
				<p>Email : ${escapeHtml(email)}</p>
				<hr />
				<p>${escapeHtml(message)}</p>
			`
		};

		return sendEmail(newMessage)
			.then(() => ({
				status: 200,
				message: 'Message sent',
				form
			}))
			.catch((error) =>
				handleCatchErrorWithCallback(error)((message) => ({
					status: 500,
					message,
					form
				}))
			);
	}
};
