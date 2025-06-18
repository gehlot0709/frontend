import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-2 rounded"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-2 rounded"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 py-2 rounded"
            style={{ backgroundColor: "black", color: "white" }}
          >
            black
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="outline-none px-4 py-2 rounded"
            style={{ backgroundColor: "pink", color: "black" }}
          >
            pink
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
