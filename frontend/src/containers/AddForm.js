import { Component } from "react";

import InputForm from "../components/InputForm";

import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { addPlaces } from "../store/actions/diary";

class AddForm extends Component{

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

    handleSubmit(event){

        event.preventDefault()

        const {name, country, description, visited} = this.state

        const place = {name, country, description, visited}

        this.props.addPlaces(place)
        alert("successfully added!")

        this.setState({
            name: "",
            country: "",
            description: "",
            visited: "false"
        })
        
    }
    render(){
        return(
            <div>
                <InputForm
                title="ADD PLACE"
                data={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                btnText="Save"
                />
            </div>
        );
    }
}

export default connect(null, { addPlaces })(AddForm)