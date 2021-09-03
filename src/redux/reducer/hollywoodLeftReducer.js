const INIT_STATE = {
    pageName: "Hollywood",
    pageLeftData: []
}

const hollywoodLeftReducer = (state = INIT_STATE, action) => {
    if (action.type === "HOLLYWOOD_API_CALL") {
        return {
            ...state,
            pageLeftData: action.payload
        }
    }
    return state;
}

export default hollywoodLeftReducer;
