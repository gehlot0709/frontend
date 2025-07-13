const Card = ({ title, description, footer, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default Card;
