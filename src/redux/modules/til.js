// FireStore


// Action
const CREATE = "til/CREATE"

const initialState = {
    list : [{
        subject : "React",
        content : "오늘은 코딩했다.",
        time : "00:40"
    }]
}

// Action Creators
export function createTil(til){
    return{type:CREATE, til}
}

// MiddleWares



// Reducers
export default function reducer(state = initialState, action={}){
    switch(action.type){
        case "til/CREATE": {
            const new_til_list = [...state.list, action.til]
            return {...state, list : action.til_list}
        }

        default:
            return state;
    }
}