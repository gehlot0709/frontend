import "./card.css";

const Card = ({ rating }) => {
  // Conditional class name: if rating > 4.5, use "super_hit", else "average"
  const ratingClass = rating > 4.5 ? "super_hit" : "average";

  // Conditional background color: pink if rating > 4.5, else grey
  const cardStyle = {
    backgroundColor: rating > 4.5 ? "pink" : "grey",
    padding: "128px",
    margin: "16px",
    textAlign: "center",
    borderRadius: "8px",
  };

  return (
    <>
      <div style={cardStyle}>
        {/* Apply conditional class using variable */}
        <p>
          rating : <span className={ratingClass}>{rating}</span>
        </p>

        {/* Apply conditional class directly in JSX */}
        <p>
          rating :{" "}
          <span className={rating > 4.5 ? "super_hit" : "average"}>
            {rating}
          </span>
        </p>
      </div>
    </>
  );
};

export default Card;
