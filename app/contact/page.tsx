export default function Contact() {
  return (
    <main className="page-container">
      <header className="page-header contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to get in touch.</p>
      </header>

      <section className="contact-section">
        <p>
          If you would like to connect, discuss web development, or talk about
          something related, you can reach me through the following channels.
        </p>

        <div className="contact-links">
          <a href="mailto:bayususeno.dev@gmail.com" className="contact-link">
            Email
          </a>

          <a
            href="https://github.com/bayususeno-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
