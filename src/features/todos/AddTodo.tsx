import React, { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { add } from "./todosSlice";

export default function AddTodo() {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const addTodoHandler = () => {
    dispatch(add(text));
    setText("");
  };

  let buttonClasses = "Button";
  if (!text) {
    buttonClasses += " disabled";
  }

  return (
    <div className="AddTodo">
      <textarea
        value={text}
        placeholder="Enter text"
        onChange={changeHandler}
      />
      <div className={buttonClasses} onClick={addTodoHandler}>
        Add
      </div>
    </div>
  );
}
