import { useState } from "react";
import "./App.css";

function App() {
  const students = [];
  return (
    <>
      <h2>Interview Question</h2>
      <p>{students.length === 0 && "No student found"}</p>
      <p>Number of student {students.length}</p>
    </>
  );
}

export default App;
