import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./style.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    display: false,
    redirect: "/"
  };

  componentDidMount() {
    //recording what page triggered the Login component so that login can redirect to that page after sign-in
    this.setState({ redirect: this.props.redirect });
  };

  login = event => {
    event.preventDefault();
    API.login({
      username: this.state.username.toLowerCase(),
      password: this.state.password
    })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          console.log("login successful")
          this.props.isAuthorized();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });

    this.setState({ password: "" });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.authorized ?
          //if login component was triggered by its own path, redirect to home page
          (<Redirect to={this.state.redirect === "/login" ? "/" : this.state.redirect} />) : (
            <div className="container loginContainer">
              <form>
                <FormGroup>
                  <Label text="Username" />
                  <Input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label text="Password" />
                  <Input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password"
                  />
                </FormGroup>
                {this.state.error ? <Small text={this.state.error} /> : ""}
                <FormBtn
                  disabled={
                    this.state.username && this.state.password ? "" : "disabled"
                  }
                  text="Login"
                  onClick={this.login}
                  classes="btn-primary"
                />
                <Link to="/register">Not registered? Click here.</Link>
              </form>
            </div>

          )}
      </React.Fragment>
    );
  }
}

export default Login;
