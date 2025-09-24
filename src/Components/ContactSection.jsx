import ContactCard from "./ContactCard";

function ContactSection() {
  const email = "mosayaqoobi@gmail.com"; //email

  const copyEmail = () => {
    navigator.clipboard.writeText(email).catch(() => {}); //copy email to clipboard
  };
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <div className="grid contact-grid">
        <ContactCard icon="✉️" title="Email">
          <button
            className="btn"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            Copy Email
          </button>
        </ContactCard>

        <ContactCard icon="📄" title="Resume">
          <a
            className="btn"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Mosa_Yaqoobi_Resume.pdf"
          >
            Download PDF
          </a>
        </ContactCard>

        <ContactCard icon="🔗" title="LinkedIn">
          <a
            className="btn"
            href="https://www.linkedin.com/in/mosa-yaqoobi/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
          >
            Open Profile
          </a>
        </ContactCard>
      </div>
    </section>
  );
}
export default ContactSection;
