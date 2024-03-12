import { useState } from "react";
import style from "./todo.module.css";

import Button from "./Button";
import Input from "./Input";
import Item from "./Item";
import Header from "./Header";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, name: "task1", completed: true },
    { id: 2, name: "task2", completed: false },
  ]);

  function handleChange(e: any) {
    setTodo(e.target.value);
  }

  function handleClickAdd() {
    setTodos([
      ...todos,
      { id: todos.length + 1, name: todo, completed: false },
    ]);
  }

  function handleClickCheck(id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id && !todo.completed) {
        return { ...todo, completed: true };
      }

      if (todo.id === id && todo.completed) {
        return { ...todo, completed: false };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function handleClickDelete(id: number) {
    const deleteTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });

    setTodos(deleteTodos);
  }

  return (
    <div>
      <Header></Header>

      {todos.map((item) => (
        <Item
          key={item.id}
          completed={item.completed}
          handleClickCheck={() => handleClickCheck(item.id)}
          handleClickDelete={() => handleClickDelete(item.id)}
        >
          {item.name}
        </Item>
      ))}

      <div className={style.input}>
        <Input
          text={todo}
          onChange={(e: any) => handleChange(e)}
          placeholder="New todo"
        >
          New todo
        </Input>
        <Button onClick={handleClickAdd}>Add todo</Button>

      </div>
    </div>
  );
}
