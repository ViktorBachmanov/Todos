import React, { useState, useRef } from "react";
import { Todo } from "./types";
import Chip from "../../components/Chip";
import EditButton from "../../components/EditButton";
import DeleteButton from "../../components/DeleteButton";

import { useAppDispatch } from "../../app/hooks";
import { save } from "./todosSlice";

type Props = {
  todo: Todo;
};

export default function Card(props: Props) {
  const { title, completed, id } = props.todo;

  const [isEditMode, setEditMode] = useState(false);

  const dispatch = useAppDispatch();

  const textArea = useRef(null);

  const saveTodo = () => {
    let modifiedTitle;
    if (textArea.current !== null) {
      const currentTextarea = textArea.current as any;
      modifiedTitle = currentTextarea.value;
    } else {
      modifiedTitle = title;
    }
    const modifiedTodo = { ...props.todo, title: modifiedTitle };
    dispatch(save(modifiedTodo));
  };

  const toggleCompleted = () => {
    dispatch(save({ ...props.todo, completed: !props.todo.completed }));
  };

  let classes = "Card";
  if (completed) {
    classes += " completed";
  }

  return (
    <div className={classes}>
      {isEditMode ? (
        <textarea
          defaultValue={title}
          ref={textArea}
          autoFocus={true}
          rows={2}
        />
      ) : (
        <div>{title}</div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <EditButton
          isEditMode={isEditMode}
          setEditMode={setEditMode}
          saveTodo={saveTodo}
        />
        <Chip toggleCompleted={toggleCompleted} completed={completed} />
        <DeleteButton todoId={id} />
      </div>
    </div>
  );
}
