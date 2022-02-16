import React from "react";

interface Props {
  toggleCompleted: () => void;
  completed: boolean;
}

export default function Chip(props: Props) {
  return (
    <label className="Chip">
      Completed
      <input
        type="checkbox"
        style={{ marginLeft: "0.25rem" }}
        onChange={props.toggleCompleted}
        checked={props.completed}
      />
    </label>
  );
}
