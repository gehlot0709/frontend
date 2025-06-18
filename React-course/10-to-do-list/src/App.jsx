import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (itemValue) => {
    setTasks((prev) => {
      return [...prev, itemValue];
    });
  };

  return (
    <>
      <div className="container w-96">
        <h2 className="text-center text-orange-600">To-Do-Lost</h2>
        <TodoInput onAddTask={addTask} />

        {tasks.map((task) => {
          return <TodoItem itemValue={task} />;
        })}
      </div>
    </>
  );
}

export default App;
