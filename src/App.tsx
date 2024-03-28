import Todo from "./components/Todo";
import style from "./App.module.css";
import Content from "./Content";
import { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const onIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className={style.container}>
      {/* <Todo /> */}
      <Content onIncrease={onIncrease} />

      <h1>{count}</h1>
    </div>
  );
}
