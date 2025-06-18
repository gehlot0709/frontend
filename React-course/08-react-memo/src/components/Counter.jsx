import React, { useState, memo, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  useEffect(() => {
    console.log("Render every time");
  });

  return (
    <div className="counter" style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: "10px" }}>
        +
      </button>
    </div>
  );
};

// Memoize for performance if props are used in future
export default memo(Counter);
