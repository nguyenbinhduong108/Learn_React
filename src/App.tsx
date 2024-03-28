import Todo from "./components/Todo";
import style from "./App.module.css";
import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
    console.log("focus");
  }

  // useEffect(() => {
  //   inputRef.current?.focus();
  //   console.log(inputRef.current);
  // });

  // const [count, setCount] = useState(0);

  //#region useCallback
  // const onIncrease = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  return (
    <div className={style.container}>
      {/* <Todo /> 
      <Content onIncrease={onIncrease} />

      <h1>{count}</h1>*/}
      <h1 onClick={handleClick}>Hello</h1>
      <input ref={inputRef} placeholder="Enter name..." />
    </div>
  );
}
