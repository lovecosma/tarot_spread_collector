const usersReducer = (state={user: {}, loggedIn: false}, action) => {
    switch (action.type) {
        case "LOGGING_IN":
            return {
                ...state, 
                user: action.user,
                loggedIn: true
            }
        default:
            return state
    }
}

export default usersReducer