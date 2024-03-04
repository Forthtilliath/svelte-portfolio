import nodemailer from 'nodemailer';
import { SECRET_EMAIL_ACCOUNT, SECRET_EMAIL_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: SECRET_EMAIL_ACCOUNT,
		pass: SECRET_EMAIL_PASSWORD
	}
});

transporter.verify((err, success) => {
	if (err) {
		console.log(err);
	} else {
		console.log(success);
		console.log('Server is ready to take our messages');
	}
});

export default transporter;