const INIT_STATE = {
    pageName: "Food",
    pageLeftData: []
}

const foodLeftReducer = (state = INIT_STATE, action) => {
    if (action.type === "FOOD_API_CALL") {
        return {
            ...state,
            pageLeftData: action.payload
        }
    }
    return state;
}

export default foodLeftReducer;
