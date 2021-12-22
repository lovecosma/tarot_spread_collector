export const signup = async (dispatch, user) => {
    let params = {
        user
    }

    let resp = await fetch('/api/users', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })

    if(resp.ok){
        let userData = await resp.json()
        dispatch({type: "LOGGING_IN", user: {...userData}})
        return Promise.resolve("resolved")
    }else{
        let {errors} = await resp.json()
        alert(errors)
        return Promise.resolve("resolved")
    }

}

export const login = async (dispatch, user) => {
    let params = {
        user
    }

    let resp = await fetch('/api/sessions', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })

    if(resp.ok){
        let userData = await resp.json()
        dispatch({type: "LOGGING_IN", user: {...userData}})
        return Promise.resolve("resolved")
    }else{
        let {errors} = await resp.json()
        alert(errors)
        return Promise.resolve("resolved")
    }

}

