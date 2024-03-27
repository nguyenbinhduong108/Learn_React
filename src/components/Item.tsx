import React from "react";
import style from "./item.module.css";

export default function Item({
  children,
  completed,
  handleClickCheck,
  handleClickDelete,
  handleClick,
}: {
  children: React.ReactNode;
  completed: boolean;
  handleClickCheck: (e: any) => void;
  handleClickDelete: (e: any) => void;
  handleClick: (e: any) => void;
}) {
  return (
    <div className={style.item} onClick={(e) => handleClick(e)}>
      {!completed ? (
        <div className={style.taskTrue}>{children}</div>
      ) : (
        <div className={style.taskFalse}>{children}</div>
      )}

      <i
        onClick={(e) => {
          e.stopPropagation();
          handleClickCheck(e);
        }}
        className="fa-solid fa-circle-check"
      ></i>
      <i
        onClick={(e) => {
          e.stopPropagation();
          handleClickDelete(e);
        }}
        className="fa-solid fa-trash"
      ></i>
    </div>
  );
}
