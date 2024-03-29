// next/react
import Head from "next/head";

// components
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name={"description"} content={"Send me your messages"} />
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
