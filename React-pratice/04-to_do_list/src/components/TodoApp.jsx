import { useState } from "react";
import ItemValue from "./ItemValue";
import TodoInput from "./TodoInput";

export const TodoApp = () => {
  const [itemValue, setItemValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (itemValue.trim() === "") return;
    setTodoList([...todoList, itemValue]);
    setItemValue("");
  };

  return (
    <section className="todoApp mt-9">
      <div className="container">
        <TodoInput
          itemValue={itemValue}
          setItemValue={setItemValue}
          handleAdd={handleAdd}
        />
        <ItemValue todoList={todoList} />
      </div>
    </section>
  );
};
