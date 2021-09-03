const INIT_STATE = {
    pageName: "Fitness",
    pageLeftData: []
}

const fitnessLeftReducer = (state = INIT_STATE, action) => {
    if (action.type === "FITNESS_API_CALL") {
        return {
            ...state,
            pageLeftData: action.payload
        }
    }
    return state;
}

export default fitnessLeftReducer;