import React from "react";
import { Todo } from "./types";

type Props = {
  todo: Todo;
};

export default function Card(props: Props) {
  return <div>{props.todo.title}</div>;
}
