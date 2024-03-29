import { useReducer, useRef } from "react";

const initialState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload: string) => {
  return {
    type: SET_JOB,
    payload: payload,
  };
};
const addJob = (payload: string) => {
  return {
    type: ADD_JOB,
    payload: payload.trim(),
  };
};
const deleteJob = (payload: number) => {
  return {
    type: DELETE_JOB,
    payload: payload,
  };
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };

    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case DELETE_JOB:
      const newJob = [...state.jobs];

      newJob.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJob,
      };

    default:
      throw new Error("Invalid action");
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

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
