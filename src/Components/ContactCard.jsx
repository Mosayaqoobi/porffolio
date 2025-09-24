function ContactCard({ icon, title, children }) {
  return (
    <div className="card contact-card">
      <div className="contact-head">
        <span className="contact-icon" aria-hidden>
          {icon}
        </span>
        <h3> {title} </h3>
      </div>
      <div className="contact-actions">{children} </div>
    </div>
  );
}
export default ContactCard;
