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

    function handleSubmit(event, requestType, locationID){

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
            axios.put(`http://127.0.0.1:8000/api/main/${locationID}/`, {
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
                    props.locationID
                )}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label>Name</label>
                        <input onChange={(e)=>handleChange(e)} value={data.name} id="name" className="form-control" placeholder="Enter place name"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Country</label>
                        <input onChange={(e)=>handleChange(e)} value={data.country} id="country" className="form-control" placeholder="Enter country name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea onChange={(e)=>handleChange(e)} value={data.description} id="description" className="form-control" rows="3" placeholder="Place Details here"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input onChange={(e)=>handleChange(e)} value={data.visited} id="visited" className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            Visited
                        </label>
                        </div>
                    </div>
                    <button className="btn btn-primary">{props.btnText}</button>
                    <br/><br/><br/>
                </form>
            </div>
        );
    }

export default InputForm