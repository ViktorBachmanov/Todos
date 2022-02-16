import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ReactComponent as DeleteIcon } from "./svg/trash.svg";
import Dialog from "./Dialog";

interface Props {}

export default function DeleteButton(props: Props) {
  const [isDialogOpen, setDialogOpen] = useState(false);

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
            handleClose={() => setDialogOpen(false)}
          />,
          document.getElementById("root")!
        )}
    </>
  );
}
