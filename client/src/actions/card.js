export const fetchCards = async (dispatch) => {

    let resp = await fetch('/api/cards')
    if(resp.ok){
        let cards = await resp.json()
        dispatch({type: "ADDING_CARDS", cards})
    }else{
        let {errors} = resp.json()
        alert(errors)
    }

}