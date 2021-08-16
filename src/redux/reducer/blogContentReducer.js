const INIT_STATE = {
    content: {}
}

const blogContentReducer = (state = INIT_STATE, action) => {
    if(action.type === "GET_CONTENT") {
        return {
            content: action.payload
        }
    }
    return state
}

export default blogContentReducer;
