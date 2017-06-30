// Arg state = state this reducer is responsible for, NOT app state
// Don't change state, return a fresh object
// Return state base case when this reducer isn't concerned


export default function (state = null, action){
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload
    }
    
    return state
}