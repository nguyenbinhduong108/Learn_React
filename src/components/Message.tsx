import { useState } from "react";

export default function Message() {
  const [index, setIndex] = useState(0);
  const [incremenBy, setIncremenBy] = useState(1);

  function increment() {
    setIndex((index) => index + incremenBy);
  }

  function decrement() {
    setIndex((index) => index - incremenBy);
  }

  function increaseIncrement() {
    setIncremenBy((incremenBy) => incremenBy + 1);
  }

  function decreaseIncrement() {
    setIncremenBy((incremenBy) => incremenBy - 1);
  }

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <h1>Index value:{index}</h1>

      <button onClick={() => increaseIncrement()}>Icrease increment</button>
      <button onClick={() => decreaseIncrement()}>Decrease increment</button>
      <h1>Index value:{incremenBy}</h1>
    </div>
  );
}
