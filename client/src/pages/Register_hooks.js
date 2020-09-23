import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/userAPI";

const Register = ({ isAuthorized }) => {
  const [state, setState] = useState({
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
    reg: new RegExp(
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  });

  const {
    firstName,
    lastName,
    username,
    email,
    password,
    confirm,
    birthday,
    validUN,
    validEM,
    validPW,
    validCF,
    error,
    reg
  } = state;

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        if (value.length > 7) {
          API.availableUN(value.toLowerCase())
            .then(res => {
              res.data.length < 1
                ? setState({ validUN: true })
                : setState({ validUN: false });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          setState({ validUN: false });
        }
        break;
      case "email":
        setState({ validEM: reg.test(value) });
        break;
      case "password":
        setState({
          validPW: value.length > 7,
          validCF: value.length > 7 && value === confirm
        });
        break;
      case "confirm":
        setState({
          validCF: validPW && password === value
        });
        debugger;
        break;
      default:
    }
  };

  const register = event => {
    event.preventDefault();
    API.register({
      firstName: firstName,
      lastName: lastName,
      username: username.toLowerCase(),
      email: email,
      password: password,
      birthday: birthday
    })
      .then(res => {
        if (res.data.message) {
          setState({
            error: res.data.message
          });
        } else {
          console.log("registration successful");
          isAuthorized();
        }
      })
      .catch(err => {
        console.log(err);
        setState({ error: "A server error has occured." });
      });

    setState({
      password: "",
      confirm: ""
    });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState({
      [name]: value
    });
    validateField(name, value);
  };

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
                    value={firstName}
                    onChange={handleInputChange}
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
                    value={lastName}
                    onChange={handleInputChange}
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
                    value={birthday}
                    onChange={handleInputChange}
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
                    value={email}
                    onChange={handleInputChange}
                  />
                  {validEM ? (
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
                    value={username}
                    onChange={handleInputChange}
                  />
                  {validUN ? (
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
                    value={password}
                    onChange={handleInputChange}
                  />
                  {validPW ? (
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
                    value={confirm}
                    onChange={handleInputChange}
                  />
                  {validCF ? (
                    <small>Passwords match</small>
                  ) : (
                    <small>Passwords don't match</small>
                  )}
                </div>
                {error ? <small>{error}</small> : ""}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    disabled={validUN && validEM && validCF ? "" : "disabled"}
                    onClick={register}
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
};

const contStyle = {
  marginTop: "20px",
  width: "650px"
};

export default Register;
