import React from "react";
import style from "./button.module.css";

export default function Button({
  children = <button>Hello</button>,
  onClick = () => {},
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={style.btn}>
      {children}
    </button>
  );
}
