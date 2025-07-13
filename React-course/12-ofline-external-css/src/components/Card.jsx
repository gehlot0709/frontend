import "./card.css"
export const Card = ({ name, id, age, city, profession }) => {
  return (
    <>
      <div className="card-item">
        <h2>name: {name}</h2>
        <p>id: {id}</p>
        <p>age: {age}</p>
        <p>city: {city}</p>
        <p>profession: {profession}</p>
      </div>
    </>
  );
};
