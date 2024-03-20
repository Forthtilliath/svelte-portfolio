import type Mail from 'nodemailer/lib/mailer';
import transporter from '../server/setupEmail';

export function sendEmail(message: Mail.Options) {
	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (err, info) => {
			if (err) {
				reject(err);
			}
			resolve(info);
		});
	});
}
