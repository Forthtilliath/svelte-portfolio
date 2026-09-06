import type Mail from 'nodemailer/lib/mailer';
import transporter from './setupEmail';

export function sendEmail(message: Mail.Options) {
	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (err, info) => {
			if (err) {
				return reject(err);
			}
			resolve(info);
		});
	});
}
