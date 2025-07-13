import "./App.css";
import { Props } from "./components/Props";
import users from "./user.json";
function App() {
  return (
    <>
      <h2>Props</h2>
      {users.map((item)=>(
        <Props key={item.id} {...item} />
      ))}
    </>
  );
}

export default App;
