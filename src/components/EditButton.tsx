import React from "react";

import { ReactComponent as EditIcon } from "./svg/pencil-alt.svg";
import { ReactComponent as OkIcon } from "./svg/check.svg";
import { ReactComponent as CancelIcon } from "./svg/x.svg";

interface Props {
  isEditMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  saveTodo: () => void;
}

export default function EditButton(props: Props) {
  const { isEditMode, setEditMode, saveTodo } = props;

  const handleSave = () => {
    saveTodo();
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  if (isEditMode) {
    return (
      <div style={{ display: "flex" }}>
        <OkIcon className="IconButton" onClick={handleSave} />
        <CancelIcon className="IconButton" onClick={handleCancel} />
      </div>
    );
  } else {
    return (
      <EditIcon className="IconButton" onClick={() => setEditMode(true)} />
    );
  }
}
