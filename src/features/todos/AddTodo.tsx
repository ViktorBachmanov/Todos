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

  let classes = "Button";
  if (!text) {
    classes += " disabled";
  }

  return (
    <div className="AddTodo">
      <textarea
        value={text}
        placeholder="Enter text"
        onChange={changeHandler}
      />
      <button className={classes} onClick={addTodoHandler}>
        Add
      </button>
    </div>
  );
}
