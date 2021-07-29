import { GET_PLACE } from '../actions/actionTypes'

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
        default:
            return state
    }
}

export default Diary

