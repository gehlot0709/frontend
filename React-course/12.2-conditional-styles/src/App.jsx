import "./App.css";
import data from "./data.json";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Conditional style add in rating tag{" "}
      </h2>
      <div className="container">
        <div className="flex">
          {data.map((item) => (
            <div className="col-3">
              <Card key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
