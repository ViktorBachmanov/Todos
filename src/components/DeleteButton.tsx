import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ReactComponent as DeleteIcon } from "./svg/trash.svg";
import Dialog from "./Dialog";

import { useAppDispatch } from "../app/hooks";
import { remove } from "../features/todos/todosSlice";

interface Props {
  todoId: number;
}

export default function DeleteButton(props: Props) {
  const { todoId } = props;

  const [isDialogOpen, setDialogOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(remove(todoId));
    setDialogOpen(false);
  };

  return (
    <>
      <DeleteIcon
        className="IconButton"
        style={{ marginLeft: "auto" }}
        onClick={() => setDialogOpen(true)}
      />

      {isDialogOpen &&
        ReactDOM.createPortal(
          <Dialog
            title="Delete todo?"
            handleCancel={() => setDialogOpen(false)}
            handleOk={handleDeleteTodo}
          />,
          document.getElementById("root")!
        )}
    </>
  );
}
