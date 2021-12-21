const usersReducer = (state={user: {}, loggedIn: false}, action) => {
    switch (action.type) {
        case "ADDING_USER":
            return {
                ...state, 
                user: action.user
            }
        default:
            return state
    }
}

export default usersReducer