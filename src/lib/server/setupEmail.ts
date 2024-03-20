import nodemailer from 'nodemailer';
import { SECRET_EMAIL_ACCOUNT, SECRET_EMAIL_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: SECRET_EMAIL_ACCOUNT,
		pass: SECRET_EMAIL_PASSWORD
	},
	tls: {
		rejectUnauthorized: false
	}
});

transporter.verify((err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Server is ready to take our messages');
});

export default transporter;
