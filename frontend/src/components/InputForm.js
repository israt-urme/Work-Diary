import { useState } from "react";
import axios from "axios";

function InputForm(props){

    const [data,setData] = useState({
        name: "",
        country: "",
        description: "",
        visited: "false"
    })

    function handleChange(e){
        const newdata={...data}
        newdata[e.target.id] =e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function handleSubmit(event, requestType, diaryID){

        event.preventDefault()

        if(requestType === 'post'){
            axios.post('http://127.0.0.1:8000/api/main/', {
                    name: data.name,
                    country: data.country,
                    description: data.description,
                    visited: data.visited
                })
                .then( res => console.log(res))
                .catch(err => console.log(err))
        }
        else if(requestType === 'put'){
            axios.put(`http://127.0.0.1:8000/api/main/${diaryID}/`, {
                    name: data.name,
                    country: data.country,
                    description: data.description,
                    visited: data.visited
                })
                .then( res => console.log(res))
                .catch(err => console.log(err))
        }
        
    }

        return(
            <div>
                <h3>Add Place</h3>
                <br/>
                <form onSubmitCapture={(event) => handleSubmit(
                    event,
                    props.requestType,
                    props.diaryID
                )}>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label>Name</label>
                        <input onChange={(e)=>handleChange(e)} value={data.name} id="name" class="form-control" placeholder="Enter place name"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label>Country</label>
                        <input onChange={(e)=>handleChange(e)} value={data.country} id="country" class="form-control" placeholder="Enter country name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea onChange={(e)=>handleChange(e)} value={data.description} id="description" class="form-control" rows="3" placeholder="Place Details here"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                        <input onChange={(e)=>handleChange(e)} value={data.visited} id="visited" class="form-check-input" type="checkbox"/>
                        <label class="form-check-label">
                            Visited
                        </label>
                        </div>
                    </div>
                    <button class="btn btn-primary">{props.btnText}</button>
                    <br/><br/><br/>
                </form>
            </div>
        );
    }

export default InputForm