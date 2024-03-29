const logger = (reducer: any) => {
    return (
        prevState: any,
        action: { type: string; payload: string | number }
    ) => {
        console.group(action.type);
        console.log("Prev state: ", prevState);

        const newState = reducer(prevState, action);

        console.log("New state: ", newState);
        console.groupEnd();

        return newState;
    };
}

export default logger;