import React from "react";

interface Props {
  title: string;
  handleCancel: () => void;
  handleOk: () => void;
}

export default function Dialog(props: Props) {
  const { title, handleCancel, handleOk } = props;
  return (
    <div className="Dialog-background">
      <div className="Dialog">
        <div className="Dialog-title">{title}</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="Button" onClick={handleOk}>
            Ok
          </button>
          <button className="Button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
