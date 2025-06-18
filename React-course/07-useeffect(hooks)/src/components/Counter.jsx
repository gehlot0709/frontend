import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [style1, setstyle1] = useState(null);
  const [style2, setstyle2] = useState(null);

  const increment1 = () => {
    setCount((prev) => prev + 1);
    setstyle1("increment");
  };
  const decrement1 = () => {
    setCount((prev) => prev - 1);
    setstyle1("decrement");
  };
  const increment2 = () => {
    setCount2((prev) => prev + 2);
    setstyle2("increment");
  };
  const decrement2 = () => {
    setCount2((prev) => prev - 2);
    setstyle2("decrement");
  };

  useEffect(() => {
    console.log("evevry time run");
  });

  useEffect(() => {
    console.log("Component mounted (first time run )");
  }, []);

  useEffect(() => {
    console.log("`count` state changed");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <>
      <div className="col-6">
        <div className="counter-inner">
          <h3 style={{ color: style1 === "increment" ? "red" : "black" }}>
            {count}
          </h3>
          <button onClick={increment1}>Increment</button>
          <button onClick={decrement1}>Decrement</button>
        </div>
      </div>

      <div className="col-6">
        <div className="counter-inner">
          <h3 style={{ color: style2 === "increment" ? "red" : "black" }}>
            {count2}
          </h3>
          <button onClick={increment2}>Increment +2</button>
          <button onClick={decrement2}>Decrement -2</button>
        </div>
      </div>
    </>
  );
}
