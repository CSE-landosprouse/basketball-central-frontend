import { useState } from "react";
import toast from "react-hot-toast";
import "./Contact.css";

function Contact() {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        setIsSending(true);

        try {
            const response = await fetch("https://formspree.io/f/xwlvqyle", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                form.reset();
                toast.success("Thanks! Your message was sent.");
            } else {
                toast.error("Your message could not be sent. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main>
            <section className="contact-banner">
                <p>CONTACT FULL COURT</p>
                <h1>Get in Touch</h1>
                <span>
                    Questions, feedback, or story ideas? We would love to hear from you.
                </span>
            </section>

            <section className="contact-page-section">
                <article className="contact-info">
                    <h2>Connect With Full Court</h2>
                    <p>
                        Send us your NBA questions, feedback, or ideas for stories
                        you want to see on Full Court.
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" required />

                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" required />

                        <button type="submit" disabled={isSending}>
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </article>
            </section>
        </main>
    );
}

export default Contact;