import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.title}>Todo List</h1>
      <p className={style.decreption}>A simple React Todo List app</p>
    </div>
  );
}
