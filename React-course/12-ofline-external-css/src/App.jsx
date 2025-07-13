import "./App.css";
import cards from "./card.json";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex">
            {cards.map((item) => (
              <div className="col-3">
                <Card key={item.id} {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
