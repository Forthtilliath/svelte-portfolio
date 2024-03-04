import { SECRET_EMAIL_ACCOUNT } from '$env/static/private';
import transporter from '$lib/methods/emailSetup.server.js';
// import type Mail from 'nodemailer/lib/mailer/index.js';

export const actions = {
	sendEmail: async ({ request }) => {
		try {
			const formData = await request.formData();
			console.log(...formData);

			const email = formData.get('email');
			const name = formData.get('name');

			if (!email || !name) {
				return {
					status: 400
				};
			}

			const html = `<h2>${name}</h2><p>${email}</p>`;

			const message = {
				from: email,
				to: SECRET_EMAIL_ACCOUNT,
				subject: 'Message from Portfolio',
				text: 'Message from Portfolio',
				html
			};

			const sendEmail = (message) => {
				return new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							reject(err);
						}
						resolve(info);
					});
				});
			};

			await sendEmail(message);

			return {
				status: 200,
				message: 'Message sent'
			};
		} catch (error) {
			console.log(error);
		}
	}
};
