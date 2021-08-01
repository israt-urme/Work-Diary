import axios from "axios";

import { GET_PLACE, DELETE_PLACE, ADD_PLACE, UPDATE_PLACE } from "./actionTypes";

//get places
export const getPlaces = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/main/')
        .then(res=>{
            dispatch({
                type: GET_PLACE,
                payload: res.data
            });
            console.log("action: ", res.data);
        }).catch(err=> console.log(err))
}

//delete places
export const deletePlaces = id => dispatch => {
    axios.delete(`http://127.0.0.1:8000/api/main/${id}/`)
        .then(res=>{
            dispatch({
                type: DELETE_PLACE,
                payload: id
            });
        }).catch(err=> console.log(err))
}

//add places
export const addPlaces = place => dispatch => {
    axios.post('http://127.0.0.1:8000/api/main/', place)
        .then(res=>{
            dispatch({
                type: ADD_PLACE,
                payload: res.data
            });
        }).catch(err=> console.log(err))
}

//update places
export const updatePlaces = (id, place) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/main/${id}/`, place)
        .then(res=>{
            dispatch({
                type: UPDATE_PLACE,
                payload: res.data
            });
        }).catch(err=> console.log(err))
}