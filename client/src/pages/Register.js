import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/userAPI";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    birthday: "",
    validUN: false,
    validEM: false,
    validPW: false,
    validCF: false,
    error: "",

    // eslint-disable-next-line
    reg: new RegExp(
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  };

  validateField = (name, value) => {
    switch (name) {
      case "username":
        if (value.length > 7) {
          API.availableUN(value.toLowerCase())
            .then(res => {
              res.data.length < 1
                ? this.setState({ validUN: true })
                : this.setState({ validUN: false });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.setState({ validUN: false });
        }
        break;
      case "email":
        this.setState({ validEM: this.state.reg.test(value) });
        break;
      case "password":
        this.setState({
          validPW: value.length > 7,
          validCF: value.length > 7 && value === this.state.confirm
        });
        break;
      case "confirm":
        this.setState({
          validCF: this.state.validPW && this.state.password === value
        });
        break;
      default:
    }
  };

  register = event => {
    event.preventDefault();
    API.register({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username.toLowerCase(),
      email: this.state.email,
      password: this.state.password,
      birthday: this.state.birthday
    })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          console.log("registration successful");
          this.props.isAuthorized();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });

    this.setState({
      password: "",
      confirm: ""
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.validateField(name, value);
  };

  render() {
    return (
      <div className="container" style={contStyle}>
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="MM/DD/YYYY"
                      name="birthday"
                      value={this.state.birthday}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    {this.state.validEM ? (
                      <small>Email is valid</small>
                    ) : (
                      <small>Email is invalid</small>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="at least 8 characters"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                    {this.state.validUN ? (
                      <small>Username is available</small>
                    ) : (
                      <small>Username is not available</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="at least 8 characters"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    {this.state.validPW ? (
                      <small>Password is valid</small>
                    ) : (
                      <small>Password must be at least 8 characters</small>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirm"
                      value={this.state.confirm}
                      onChange={this.handleInputChange}
                    />
                    {this.state.validCF ? (
                      <small>Passwords match</small>
                    ) : (
                      <small>Passwords don't match</small>
                    )}
                  </div>
                  {this.state.error ? <small>{this.state.error}</small> : ""}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      disabled={
                        this.state.validUN &&
                        this.state.validEM &&
                        this.state.validCF
                          ? ""
                          : "disabled"
                      }
                      onClick={this.register}
                    >
                      Submit
                    </button>
                    <br></br>
                    <Link to="/login">Already registered? Click here.</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const contStyle = {
  marginTop: "20px",
  width: "650px"
};

export default Register;
