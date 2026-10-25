import "./Contact.css";

function Contact() {
    return (
        <main>
            <section className="contact-banner">
                <p>CONTACT FULL COURT</p>
                <h1>Get in Touch</h1>
                <span>Questions, feedback, or story ideas? We would love to hear from you.</span>
            </section>

            <section className="contact-page-section">
                <article className="contact-info">
                    <h2>Connect With Full Court</h2>
                    <p>
                        Full Court is your destination for NBA news, teams, players,
                        scores, schedules, and featured stories.
                    </p>

                    <div className="contact-details">
                        <p><strong>Email:</strong> fullcourt@basketball.com</p>
                        <p><strong>Coverage:</strong> NBA teams, players, games, and news</p>
                        <p><strong>Follow:</strong> @FullCourtNBA</p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Contact;