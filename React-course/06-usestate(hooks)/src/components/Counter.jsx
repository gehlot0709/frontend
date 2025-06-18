import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
        <button onClick={()=>{
            setCount((prev)=>prev-1)
        }}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
