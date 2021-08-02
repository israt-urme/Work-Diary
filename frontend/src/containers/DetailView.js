import { Component } from "react";

import InputDetails from "../components/InputDetails";
import InputForm from "../components/InputForm";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getPlacesByID } from '../store/actions/diary'

class PlaceDetail extends Component {

  state = {
    name: "",
    country: "",
    description: "",
    visited: "false"
  }

  static propTypes = {
    location: PropTypes.array.isRequired,
    getPlacesByID: PropTypes.func.isRequired,
  }

  componentDidMount(){
    this.props.getPlacesByID(this.props.match.params.placeID)
    // console.log("hey", this.props)
  }

  //state updated from places to place_by_id
  componentDidUpdate(){
    console.log("test-test",this.props.location.place_by_id)
    const place = this.props.location.place_by_id

    // console.log(place_data)
    if(this.state.name === ''){
      this.setState({
        name: place.name,
        country: place.country,
        description: place.description,
        visited: place.visited
      })
    }
    console.log("placeStatus: ", this.state.place)
    
    
  }
  
  render() {
    console.log("place: ", this.state.place)
    return (
        <div className= "container">
          <br/><br/>
          <div className="row">
            <div className="col-5">
              <InputDetails
                data={this.state}
              />
            </div>
            <div className="col-7">
              <InputForm
                title="UPDATE PLACE"
                requestType="put"
                locationID={this.props.match.params.placeID}
                btnText="Update"
                data={this.state}
              />
            </div>
          </div> 
        </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.places
})

export default connect(mapStateToProps, { getPlacesByID} )(PlaceDetail)