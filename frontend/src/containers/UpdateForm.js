import { Component } from "react";

import InputForm from "../components/InputForm";

import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { addPlaces } from "../store/actions/diary";

import axios from "axios";

class UpdateForm extends Component{

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

    handleSubmit(event, locationID){
        console.log("id: ", locationID)

        event.preventDefault()

        const {name, country, description, visited} = this.state

        const place = {name, country, description, visited}

            axios.put(`http://127.0.0.1:8000/api/main/${locationID}/`, {
                    name: place.name,
                    country: place.country,
                    description: place.description,
                    visited: place.visited
                })
                .then( res => console.log(res))
                .catch(err => console.log(err))
        
    }
    render(){
        return(
            <div>
                <InputForm
                title="UPDATE PLACE"
                data={this.state}
                handleChange={this.handleChange}
                handleSubmit={(event) => this.handleSubmit(
                    event,
                    this.props.locationID
                )}
                btnText="Update"
                />
            </div>
        );
    }
}

export default connect(null, { addPlaces })(UpdateForm)