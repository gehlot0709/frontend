const Props = ({ name, id, age, city, profession }) => {
  return (
    <>
      <h2>id {id} </h2>
      <p>Name:{name}</p>
      <p>Age: {age}</p>
      <p>City:{city}</p>
      <p>Proffesion: {profession}</p>
    </>
  );
};
export default Props