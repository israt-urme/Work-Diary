import { Component } from "react";

import InputList from "../components/InputList";
import AddForm from "./AddForm";

import {connect} from 'react-redux'
import { PropTypes } from "prop-types";
import { getPlaces, deletePlaces } from '../store/actions/diary'

class FormContainer extends Component {
  
  static propTypes = {
    location: PropTypes.array.isRequired,
    getPlaces: PropTypes.func.isRequired,
    deletePlaces: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.getPlaces()
  }

  render() {
    return (
      <div className="container">
        <AddForm />
        <InputList
          data={this.props.location}
          handleClick={this.props.deletePlaces}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.places.places
})

export default connect(mapStateToProps, {getPlaces, deletePlaces} )(FormContainer);

