import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants.ts"


export const setJob = (payload: string) => {
    return {
        type: SET_JOB,
        payload: payload,
    };
};
export const addJob = (payload: string) => {
    return {
        type: ADD_JOB,
        payload: payload.trim(),
    };
};
export const deleteJob = (payload: number) => {
    return {
        type: DELETE_JOB,
        payload: payload,
    };
};