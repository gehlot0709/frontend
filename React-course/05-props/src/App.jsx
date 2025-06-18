import "./App.css";
import Card from "./components/Card";
import datas from "./item.json";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          {datas.map((data, index) => (
            <Card key={index} item={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;