import { Component } from "react";
import axios from "axios"

import InputList from "../components/InputList";
import InputForm from "../components/InputForm";

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
          requestType="post"
          diaryID={null}
          btnText="Save"
        />
        <InputList
          data={this.state.diary}
        />
      </div>
    );
  }
}

export default FormContainer;
