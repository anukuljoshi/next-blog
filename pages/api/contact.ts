// next/react
import type { NextApiHandler } from "next";

// database
import { MongoClient } from "mongodb";

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
		const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.zdvwj.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`;
		try {
			client = await MongoClient.connect(connectionString);
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
