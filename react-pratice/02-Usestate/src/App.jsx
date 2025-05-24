import { useState } from "react";

export default function App() {
  const [a, seta] = useState(0);
  return (
    <div>
      <h1>Number is {a}</h1>
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          seta(a - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
