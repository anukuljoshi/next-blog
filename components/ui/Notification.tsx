import classes from "./css/Notification.module.css";

interface NotificationProps {
	title: string;
	message: string;
	status: "pending" | "success" | "error" | "" | null;
}

const Notification = ({ title, message, status }: NotificationProps) => {
	let statusClasses = "";

	if (status === "success") {
		statusClasses = classes.success;
	}

	if (status === "error") {
		statusClasses = classes.error;
	}

	const cssClasses = `${classes.notification} ${statusClasses}`;

	return (
		<div className={cssClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
};

export default Notification;
