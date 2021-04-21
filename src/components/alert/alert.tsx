import React from "react";
import Button from "../button/button";
import "./alert.scss";

type AlertProps = {
  firstName: string,
  lastName: string,
  isOpen: boolean,
  onClose: any,
}

export default function Alert({ onClose, firstName, lastName, isOpen }: AlertProps) {
  return (
    <div className={isOpen ? "alert " : "alert close"}>
      <div>{`Здравствуйте, ${firstName} ${lastName}`}</div>
      <Button onClick={onClose} title='Закрыть' />
    </div>
  );
}
