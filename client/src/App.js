import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import API from "./utils/API";

class App extends Component {
  state = {
    authorized: false,
    display: false
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        console.log(res)
        this.setState({
          authorized: res.data.message ? false : true,
          display: true
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false, display: true });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  setRedirect = (pathname) => {
    this.setState({ redirect: pathname });
  };

  render() {
    return (
      <Router>
        {this.state.display ? (
          <div>
            <Navbar />
            <Switch>

              <Route exact path="/">
                <Home logout={this.logout} />
              </Route>

              <Route exact path="/login">
                <Login isAuthorized={this.isAuthorized} authorized={this.state.authorized} redirect={window.location.pathname} />
              </Route>

              <Route exact path="/register">
                {this.state.authorized ? (
                  <Redirect to="/" />
                ) : (
                    <Register isAuthorized={this.isAuthorized} />
                  )}
              </Route>

              <Route exact path="/protected">
                {this.state.authorized ? (
                  <Protected logout={this.logout} />
                ) : (
                    <Redirect to="/login" />
                  )}
              </Route>

              <Route>
                <Redirect to="/" />
              </Route>

            </Switch>
          </div>
        ) : ""}
      </Router>
    );
  }
}

export default App;
