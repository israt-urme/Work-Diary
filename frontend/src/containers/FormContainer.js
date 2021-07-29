import { Component } from "react";

import InputList from "../components/InputList";
import InputForm from "../components/InputForm";

import {connect} from 'react-redux'
import { PropTypes } from "prop-types";
import { getPlaces } from '../store/actions/diary'

class FormContainer extends Component {
  
  static propTypes = {
    location: PropTypes.array.isRequired
  }

  componentDidMount(){
    this.props.getPlaces()
  }

  render() {
    return (
      <div className="container">
        <InputForm
          requestType="post"
          locationID={null}
          btnText="Save"
        />
        <InputList
          data={this.props.location}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.places.places
})

export default connect(mapStateToProps, {getPlaces} )(FormContainer);

