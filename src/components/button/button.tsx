import React from "react";
import "./button.scss";

type ButtonProps = {
  title: string,
  onClick: any
}

export default function Button({ onClick, title }: ButtonProps) {
  return (
    <button className="Button" onClick={onClick}>
      {title}
    </button>
  );
}
