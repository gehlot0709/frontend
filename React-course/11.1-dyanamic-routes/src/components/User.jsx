import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams(); 

  return (
    <>
      <h3>User {username}</h3>
    </>
  );
};

export default User;
