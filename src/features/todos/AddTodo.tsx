import React, { useState } from "react";

export default function AddTodo() {
  const [text, setText] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
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
      <div className={classes}>Add</div>
    </div>
  );
}
