import { useState } from "react";
import "./App.css";
import { Props } from "./components/Props";

function App() {
   const jason = {
    name: "Pratham",
    age: 22,
  };
  return (
    <>
      <Props {jason={name}} {jason.age}/>
    </>
  );
}

export default App;
