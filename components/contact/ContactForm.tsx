// css
import classes from "./css/ContactForm.module.css";

// react/next
import React from "react";

// components
import Notification from "../ui/Notification";

const ContactForm = () => {
	const [requestStatus, setRequestStatus] = React.useState<
		"pending" | "success" | "error" | null
	>(null);
	const [email, setEmail] = React.useState("");
	const [name, setName] = React.useState("");
	const [message, setMessage] = React.useState("");

	React.useEffect(() => {
		let timer: any;
		if (requestStatus === "success" || requestStatus === "error") {
			timer = setTimeout(() => {
				setRequestStatus(null);
			}, 3000);
		}

		return () => clearTimeout(timer);
	}, [requestStatus]);

	const sendMessageHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		setRequestStatus("pending");
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					name: name,
					message: message,
				}),
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.message || "Something went wrong.");
			}
			setRequestStatus("success");
		} catch (error) {
			setRequestStatus("error");
		}
        setEmail("");
        setName("");
        setMessage("");
	};

	let notification;
	if (requestStatus === "pending") {
		notification = {
			title: "Sending message...",
			message: "Your message is on its way.",
		};
	}

	if (requestStatus === "success") {
		notification = {
			title: "Message sent",
			message: "Your message was sent successfully.",
		};
	}

	if (requestStatus === "error") {
		notification = {
			title: "Error",
			message:
				"There was an error sending message. Please try again later.",
		};
	}

	if (requestStatus === null) {
		notification = {
			title: "",
			message: "",
		};
	}

	return (
		<>
			<section className={classes.contact}>
				<h1>How can I help you?</h1>
				<form className={classes.form} onSubmit={sendMessageHandler}>
					<div className={classes.controls}>
						<div className={classes.control}>
							<label htmlFor="email">Your Email</label>
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)
								}
								required
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor="name">Your Name</label>
							<input
								type="text"
								name="name"
								id="name"
								value={name}
								onChange={(event) =>
									setName(event.target.value)
								}
								required
							/>
						</div>
					</div>
					<div className={classes.control}>
						<label htmlFor="message">Your Message</label>
						<textarea
							name="message"
							id="message"
							rows={5}
							required
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</div>
					<div className={classes.actions}>
						<button>Send Message</button>
					</div>
				</form>
			</section>
			{requestStatus && notification && (
				<Notification
					title={notification.title}
					message={notification.message}
					status={requestStatus}
				/>
			)}
		</>
	);
};

export default ContactForm;
