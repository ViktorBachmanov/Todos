import React, { useState, useRef } from "react";
import { Todo } from "./types";
import Chip from "../../components/Chip";
import { ReactComponent as EditIcon } from "./svg/pencil-alt.svg";

type Props = {
  todo: Todo;
};

export default function Card(props: Props) {
  const { title, completed } = props.todo;

  const [isEditMode, setEditMode] = useState(false);

  const textArea = useRef(null);

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
          rows={3}
        />
      ) : (
        <div>{title}</div>
      )}

      {completed && <Chip />}
      <EditIcon style={{ width: "2rem" }} onClick={() => setEditMode(true)} />
    </div>
  );
}
