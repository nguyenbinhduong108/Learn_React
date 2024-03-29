import Todo from "./components/Todo";
import style from "./App.module.css";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Reducer from "./Todo/Reducer.tsx";
import Content from "./Content";

const initialState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state: number, action: string) => {
  // console.log("reducer");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

export default function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  // function handleClick() {
  //   inputRef.current?.focus();
  //   console.log("focus");
  // }

  // useEffect(() => {
  //   inputRef.current?.focus();
  //   console.log(inputRef.current);
  // });

  const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(reducer, initialState);

  //#region useCallback
  const onIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    // <div className={style.container}>
    //   <Todo />
    //   <h1 onClick={handleClick}>Hello</h1>
    //   <input ref={inputRef} placeholder="Enter name..." />
    // </div>

    // <div className={style.container}>
    //   <h1>{count}</h1>
    //   <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    //   <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    // </div>

    // <div className={style.container}>
    //   <Content onIncrease={onIncrease} />

    //   <h1>{count}</h1>
    // </div>

    <div className={style.container}>
      <Reducer />
    </div>
  );
}
