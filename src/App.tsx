import Todo from "./components/Todo";
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.container}>
      <Todo />
    </div>
  );
}
