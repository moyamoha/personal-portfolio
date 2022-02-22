import { SMTPClient } from "emailjs";

export default function handler(req, res) {
	const { name, email, message } = req.body;
	console.log(email);

	const client = new SMTPClient({
		user: process.env.mail,
		password: process.env.password,
		host: "smtp.gmail.com",
		ssl: true,
	});

	try {
		client.send({
			text: `Sender: ${email} \n\n${message}`,
			from: email,
			reply_email: email,
			to: process.env.mail,
			subject: "A message from " + name,
		});
	} catch (e) {
		res.status(400).end(JSON.stringify({ message: "Error" }));
		return;
	}

	res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
