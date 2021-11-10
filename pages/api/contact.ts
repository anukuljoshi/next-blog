import { MongoClient } from "mongodb";
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
	if (req.method === "POST") {
		const { email, name, message } = req.body;
		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			return res.status(422).json({ message: "Invalid input" });
		}
		// store in database
		const newMessage = {
			email,
			name,
			message,
		};
		let client, db, result;
		try {
			client = await MongoClient.connect(process.env.MONGO_URI);
			db = client.db();
			result = await db.collection("messages").insertOne(newMessage);
		} catch (error) {
			client?.close();
			return res.status(500).json({ message: "Server error." });
		}
		client.close();
		return res.status(201).json({ message: "Message sent successfully." });
	}
};

export default handler;
