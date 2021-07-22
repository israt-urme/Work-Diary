import { Component } from "react";
import axios from "axios"

import InputDetails from "../components/InputDetails";
class PlaceDetail extends Component {
  
  state = {
      place: {}
    }

  componentDidMount(){
      const diaryID = this.props.match.params.placeID
    axios.get(`http://127.0.0.1:8000/api/main/${diaryID}/`)
    .then(res => {
      this.setState({
        place: res.data
      });
      console.log(res.data);
    })
  }


  render() {
    return (
        <div className= "container">
            <InputDetails
            data={this.state.place}
            />
        </div>
    );
  }
}

export default PlaceDetail;
