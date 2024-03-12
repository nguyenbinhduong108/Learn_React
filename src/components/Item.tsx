import React from "react";
import style from "./item.module.css";

export default function Item({
  children,
  completed,
  handleClickCheck,
  handleClickDelete,
}: {
  children: React.ReactNode;
  completed: boolean;
  handleClickCheck: (e: any) => void;
  handleClickDelete: (e: any) => void;
}) {
  return (
    <div className={style.item}>
      {!completed ? (
        <div className={style.taskTrue}>{children}</div>
      ) : (
        <div className={style.taskFalse}>{children}</div>
      )}

      <i onClick={handleClickCheck} className="fa-solid fa-circle-check"></i>
      <i onClick={handleClickDelete} className="fa-solid fa-trash"></i>
    </div>
  );
}
