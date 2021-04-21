import React from "react";
import './input.scss'

type InputProps = {
  title: string,
  value: string,
  isError: boolean,
  onChange: any,
}

export default function Input({title, onChange, value, isError}: InputProps) {
  return (
    <div>
      <div>{title}</div>
      <input
        className={isError? "input err" : "input"}
        onChange={onChange}
        value={value}
      />
      {isError && <div className="error">Поле не может быть пустым</div>}
    </div>
  );
}
