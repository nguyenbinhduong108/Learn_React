import React from "react";
import style from "./input.module.css";

export default function Input({
  children,
  text,
  placeholder,
  onChange,
}: {
  children: React.ReactNode;
  text: string;
  placeholder: string;
  onChange: (e: any) => void;
}) {
  return (
    <div>
      <div className={style.title}>{children}</div>
      <input
        className={style.input}
        onChange={onChange}
        type="text"
        value={text}
        placeholder={placeholder}
      />
    </div>
  );
}
