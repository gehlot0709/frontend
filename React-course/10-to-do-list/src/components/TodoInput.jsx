import { useState } from "react";

const TodoInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onChnageInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue.trim());
    setInputValue("");
  };
  return (
    <>
      <div>
        <form
          action=""
          className="flex gap-3 items-center mt-4"
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            onChange={onChnageInputValue}
            placeholder="Enter a task..."
            className=" w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
            value={inputValue}
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white font-medium px-5 py-2 rounded hover:bg-cyan-600 transition duration-200 shadow-md"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
};
export default TodoInput;
