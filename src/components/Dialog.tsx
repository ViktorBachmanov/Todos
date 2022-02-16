import React from "react";

interface Props {
  title: string;
  handleClose: () => void;
}

export default function Dialog(props: Props) {
  const { title, handleClose } = props;
  return (
    <div className="Dialog-background">
      <div className="Dialog">
        {title}
        <div>
          <button className="Button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
