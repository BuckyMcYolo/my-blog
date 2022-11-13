import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

const Contact = () => {
  return (
    <div>
      <Head>
        <title> Contact Me </title>
        <meta name="description" content="Send me a message!" />
      </Head>
      <ContactForm />
    </div>
  );
};

export default Contact;
