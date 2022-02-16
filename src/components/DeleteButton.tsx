import React from "react";

import { ReactComponent as DeleteIcon } from "./svg/trash.svg";

interface Props {}

export default function DeleteButton(props: Props) {
  return <DeleteIcon className="IconButton" style={{ marginLeft: "auto" }} />;
}
