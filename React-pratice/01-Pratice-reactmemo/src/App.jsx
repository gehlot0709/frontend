import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [input, setInput] = useState("");
  const [flag, setflag] = useState(false);
  function changeInput(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <button
        onClick={() => {
          setflag(!flag);
        }}
      >
        open-Counter
      </button>
      <div className="input">
        <form action="">
          <h2>{input}</h2>
          <input type="text" onChange={changeInput} />
        </form>
      </div>
      {flag && <Counter />}
    </>
  );
}
export default App;
