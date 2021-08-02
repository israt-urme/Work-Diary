import { Component } from "react";

import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { addPlaces } from "../store/actions/diary";

import axios from "axios";

class InputForm extends Component{

    state = {
        name: "",
        country: "",
        description: "",
        visited: "false"
    }
    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    static propTypes = {
        addPlaces: PropTypes.func.isRequired
    }

    handleChange(e){

        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event, requestType, locationID){
        console.log("type: ", requestType, "id: ", locationID)

        event.preventDefault()

        const {name, country, description, visited} = this.state

        const place = {name, country, description, visited}

        if(requestType === 'post'){
            this.props.addPlaces(place)
        }
        else if(requestType === 'put'){
            axios.put(`http://127.0.0.1:8000/api/main/${locationID}/`, {
                    name: place.name,
                    country: place.country,
                    description: place.description,
                    visited: place.visited
                })
                .then( res => console.log(res))
                .catch(err => console.log(err))
        }

        this.setState({
            name: "",
            country: "",
            description: "",
            visited: "false"
        })
        
    }
    render(){
        const data = this.state
        return(
            <div>
                <h3>{this.props.title}</h3>
                <br/>
                <form onSubmit={(event) => this.handleSubmit(
                    event,
                    this.props.requestType,
                    this.props.locationID
                )}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label>Name</label>
                        <input
                            onChange={this.handleChange}
                            value={data.name}
                            name="name"
                            className="form-control"
                            placeholder="Enter place name"
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label>Country</label>
                        <input
                            onChange={this.handleChange} 
                            value={data.country}
                            name="country" 
                            className="form-control" 
                            placeholder="Enter country name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea 
                            onChange={this.handleChange} 
                            value={data.description} 
                            name="description"
                            className="form-control" 
                            rows="3" 
                            placeholder="Place Details here">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input
                            onChange={this.handleChange} 
                            value={data.visited} 
                            name="visited"
                            className="form-check-input" 
                            type="checkbox"/>
                        <label className="form-check-label">
                            Visited
                        </label>
                        </div>
                    </div>
                    <button className="btn btn-primary">{this.props.btnText}</button>
                    <br/><br/><br/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPlaces })(InputForm)