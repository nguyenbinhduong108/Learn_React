import { useState } from "react";
import style from "./todo.module.css";

import Button from "./Button";
import Input from "./Input";
import Item from "./Item";
import Header from "./Header";
import Dialog from "./dialog/dialog";

interface TodoType {
  id: number;
  name: string;
  completed: boolean;
}

export default function Todo() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState<TodoType[]>(() => {
    return JSON.parse(localStorage.getItem("todos") as string) ?? [];
  });

  const [dialog, setDialog] = useState({
    show: false,
    message: "",
    completed: false,
  });

  function handleChange(e: any) {
    setTodo(e.target.value);
  }

  function handleClickAdd() {
    setTodos((prev) => {
      const newTodo = [
        ...prev,
        {
          id: prev.length + 1,
          name: todo,
          completed: false,
        },
      ];

      const stringNewTodo = JSON.stringify(newTodo);

      localStorage.setItem("todos", stringNewTodo);

      return newTodo;
    });

    setTodo("");
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

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(JSON.parse(localStorage.getItem("todos") as string));
  }

  function handleClickDelete(id: number) {
    const deleteTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    localStorage.setItem("todos", JSON.stringify(deleteTodos));
    setTodos(JSON.parse(localStorage.getItem("todos") as string));
  }

  function handleClick(item: TodoType) {
    setDialog({ show: true, message: item.name, completed: item.completed });
  }

  function handleCloseDialog() {
    setDialog({ show: false, message: "", completed: false });
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
          handleClick={() => handleClick(item)}
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

      {dialog.show && (
        <Dialog message={dialog.message} completed={dialog.completed}>
          <button className="close-dialog" onClick={handleCloseDialog}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </Dialog>
      )}
    </div>
  );
}
