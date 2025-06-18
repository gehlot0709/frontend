import { useState } from "react";
import Counter from "./components/Counter";
useState;
import './App.css'
export default function App() {
  const [flag, setflag] = useState(false);
  function mounting() {
    setflag(!flag);
  }
  return (
    <>
    <button onClick={mounting}>Open-counter</button>
      <div className="container">
        <div className="flex">
          
          {flag ? <Counter /> : null}
        </div>
      </div>
    </>
  );
}
