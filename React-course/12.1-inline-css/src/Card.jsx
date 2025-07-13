const Card = ({ name, id, age, city, profession }) => {
  return (
    <>
      <div
        className="card-inner"
        style={{
          backgroundColor: "greenyellow",
          margin: "16px",
          padding: "16px",
        }}
      >
        <h2 style={{ textTransform: "capitalize" }}>name {name}</h2>
        <p>id {id}</p>
        <p>age {age}</p>
        <p>city {city}</p>
        <p>profession {profession}</p>
      </div>
    </>
  );
};
export default Card;
