import React, { useEffect, useState, memo } from "react";

const Counter = memo(() => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("every time render");
  });
  useEffect(() => {
    console.log("every count render");
  }, [count]);
  return (
    <>
      <div className="counter">
        <h2>{count}</h2>
        <button
          onClick={() => {
            setcount((prev) => prev + 1);
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            setcount((prev) => prev - 1);
          }}
        >
          decrement
        </button>
      </div>
    </>
  );
});
export default Counter;
