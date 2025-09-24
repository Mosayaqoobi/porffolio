function Card({ title, description, href, image }) {
  return (
    <a
      className="card"
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default Card;
