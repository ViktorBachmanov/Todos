import React from "react";
import { Todo } from "./types";

type Props = {
  todo: Todo;
};

export default function Card(props: Props) {
  return <div className="Card">{props.todo.title}</div>;
}
