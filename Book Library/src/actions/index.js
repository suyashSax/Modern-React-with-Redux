// Action Creator Functions

export function selectBook(book){
    
    // returns actions i.e. object with type and property/payload
    return(
        {
            type: 'BOOK_SELECTED',
            payload: book
        }
    )
}

// Can't just call, need to wire up to Redux to flow thru reducers -> containers w/ dispatch stuff

