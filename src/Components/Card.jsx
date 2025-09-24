function Card({ title, description, href }) {
  return (
    <a className="card" href={href} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default Card;
