import "./App.css";
import Card from "./Card";
import users from "./users.json";
function App() {
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "1320px", margin: "0 auto" }}
      >
        <div className="flex" style={{ display: "flex" }}>
          {users.map((user) => (
            <div className="col-3" style={{ width: "25%" }}>
              <Card key={user.id} {...user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
