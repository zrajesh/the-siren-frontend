const INIT_STATE = {
    pageName: "Technology",
    pageLeftData: []
}

const technologyLeftReducer = (state = INIT_STATE, action) => {
    if (action.type === "TECH_API_CALL") {
        return {
            ...state,
            pageLeftData: action.payload
        }
    }
    return state;
}

export default technologyLeftReducer;