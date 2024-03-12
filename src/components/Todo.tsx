import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Todo() {
  const [todo, setTodo] = useState("");

  function handleChange(e: any) {
    setTodo(e.target.value);
  }

  function handleClick() {
    console.log(todo);
  }
  return (
    <div>
      <div className="head">
        <Input
          text={todo}
          onChange={(e: any) => handleChange(e)}
          placeholder="New todo"
        >
          New todo
        </Input>
        <Button onClick={handleClick}>Add todo</Button>
      </div>
    </div>
  );
}
