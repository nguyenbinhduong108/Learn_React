import { useReducer, useRef } from "react";
import { setJob, addJob, deleteJob } from "./actions.ts";
import reducer, { initialState } from "./reducer.ts";
import logger from "./logger.ts";

export default function Reducer() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(state);

  const { job, jobs } = state;

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current?.focus();
  };

  const handleDelete = (index: number) => {
    dispatch(deleteJob(index));
  };

  return (
    <>
      <input
        type="text"
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
        ref={inputRef}
      />{" "}
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job: string, index: number) => (
          <li key={index}>
            {job}
            <span onClick={() => handleDelete(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </>
  );
}
