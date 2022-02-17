import React from "react";

interface Props {
  children: any;
  disabled: boolean;
  action: any;
}

export default function ChangePage(props: Props) {
  let classes = "ChangePage";
  if (props.disabled) {
    classes += " disabled";
  }

  return (
    <div className={classes} onClick={() => props.action()}>
      {props.children}
    </div>
  );
}
