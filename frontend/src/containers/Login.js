import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from '../store/actions/auth'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAuth(this.state.username, this.state.password)
        this.props.history.push('/')
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
        errorMessage = <p>{this.props.error.message}</p>;
        }

        const {username, password} = this.state

        return (
            <div className="container">
                {errorMessage}
                {this.props.loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
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
                        id="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        id="password"
                        value={password}
                        onChange={this.handleChange}
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

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (username,password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
