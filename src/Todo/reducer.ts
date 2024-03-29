import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants.ts"

export const initialState = {
    job: "",
    jobs: [],
};

const reducer = (
    state: any,
    action: { type: string; payload: string | number }
) => {
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

            newJob.splice(action.payload as number, 1);
            return {
                ...state,
                jobs: newJob,
            };

        default:
            throw new Error("Invalid action");
    }
};

export default reducer;