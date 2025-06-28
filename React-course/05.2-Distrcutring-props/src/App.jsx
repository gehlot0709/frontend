import "./App.css";
import users from "./user.json";
import Props from "./components/Props";
function App() {
  return (
    <>
      <h2>All userfiles</h2>
      {users.map((user) => (
        <Props key={user.id} {...user} />
      ))}
    </>
  );
}

export default App;


