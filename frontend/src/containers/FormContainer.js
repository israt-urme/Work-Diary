import { Component } from "react";
import axios from "axios"

import InputForm from "../components/InputList";

class FormContainer extends Component {
  
  state = {
      diary: []
    }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/main/')
    .then(res => {
      this.setState({
        diary: res.data
      });
      console.log(res.data);
    })
  }


  render() {
    return (
      <div className="container">
        <InputForm
          data={this.state.diary}
        />
      </div>
    );
  }
}

export default FormContainer;
