import React from "react";
import { Todo } from "./types";
import Chip from "../../components/Chip";

type Props = {
  todo: Todo;
};

export default function Card(props: Props) {
  const { title, completed } = props.todo;

  return (
    <div className="Card">
      <div>{title}</div>
      {completed && <Chip />}
    </div>
  );
}
