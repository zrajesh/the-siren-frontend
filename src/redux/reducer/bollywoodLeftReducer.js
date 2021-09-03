const INIT_STATE = {
    pageName: "Bollywood",
    pageLeftData: []
}

const bollywoodLeftReducer = (state = INIT_STATE, action) => {
    if (action.type === "API_CALL") {
        return {
            ...state,
            pageLeftData: action.payload
        }
    }
    return state;
}

export default bollywoodLeftReducer;
