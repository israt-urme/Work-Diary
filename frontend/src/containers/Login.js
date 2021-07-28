import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("received: ", values);
    //   }
    // });
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    return (
      <div className="container">
        {errorMessage}
        {this.props.loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <span className="p-2">Or</span>
              <Link to="/signup">
                <button type="submit" className="btn btn-secondary">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

//   const mapDispatchToProps = dispatch => {
//     return{
//       onTryAutoSignup: () => dispatch(actions.authCheckState())
//     }
//   }

export default connect(mapStateToProps)(Login);
