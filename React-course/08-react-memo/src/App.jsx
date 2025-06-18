import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  // Handle input change
  const handleTextFieldChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <hr />
      <h2>{input}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Type Something: 
          <input type="text" value={input} onChange={handleTextFieldChange} />
        </label>
      </form>
      
      <button onClick={() => setOpen(!open)} style={{ marginTop: "10px" }}>
        {open ? "Close Counter" : "Open Counter"}
      </button>

      {open && <Counter />}
    </>
  );
}

export default App;
