const INIT_STATE = {
    suggesst: {}
}

export const suggestionReducer = (state=INIT_STATE, action) => {
    if (action.type === "SUGGESST") {
        return {
            suggesst: action.payload
        }
    }
    return state;
}

export default suggestionReducer;
