import {FETCH_WEATHER} from '../actions/index'

export default function(state=[], action){
    console.log('Action Recieved: ', action)
    
    switch (action.type){
        case FETCH_WEATHER:
            console.log("TRUE")
//          return state.concat([action.payload.data])
            return [action.payload.data, ...state]  // [city, city, city] NOT [city, [city, city]]
    }
    return state
}

