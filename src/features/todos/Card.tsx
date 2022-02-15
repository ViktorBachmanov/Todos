import React from "react";
import { Todo } from "./types";
import Chip from "../../components/Chip";

type Props = {
  todo: Todo;
};

export default function Card(props: Props) {
  const { title, completed } = props.todo;

  let classes = "Card";
  if (completed) {
    classes += " completed";
  }

  return (
    <div className={classes}>
      <div>{title}</div>
      {completed && <Chip />}
    </div>
  );
}
