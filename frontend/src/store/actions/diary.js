import axios from "axios";

import { GET_PLACE } from "./actionTypes";

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