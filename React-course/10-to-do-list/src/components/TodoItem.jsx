import { useState } from "react";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
  RiCloseFill 
} from "react-icons/ri";
const TodoItem = ({itemValue}) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
    <ul className="flex items-center my-2 bg-cyan-300 px-2 rounded ml-3 mr-3 mt-4 py-4">
      <li className="text-xl ">
        <span
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
        </span>
      </li>
      <li className="text-xl ml-4 uppercase">{itemValue}</li>
      <li className="text-xl ml-auto"><RiCloseFill /></li>
      </ul>
    </>
  );
};

export default TodoItem;
