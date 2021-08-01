import { GET_PLACE, DELETE_PLACE, ADD_PLACE, UPDATE_PLACE } from '../actions/actionTypes'

const initialState = {
    places: []
}

const Diary = (state=initialState, action) => {
    switch(action.type) {
        case GET_PLACE:
            return {
                ...state,
                places: action.payload
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => 
                    place.id !== action.payload)
            }
        case ADD_PLACE:
            return {
                ...state,
                places: [...state.places, action.payload]
            }
        case UPDATE_PLACE:
            return{
                ...state,
                places: action.payload
            }
        default:
            return state
    }
}

export default Diary

