let INIT_STATE = {
    posterBig: "https://images.unsplash.com/photo-1520057364200-6d620317dc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    posterTwo: [
        {
            imageUrl: "https://images.unsplash.com/photo-1520057364200-6d620317dc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
            id: "123456"
            
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            id: "654321"
        }
    ]
}

const heroReducer = (state=INIT_STATE, action) => {
    return state;
}

export default heroReducer;
