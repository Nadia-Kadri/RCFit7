import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import API from "./utils/API";
import Navbar from "./components/Nav/Navbar";
import Sidebox from "./components/Sidebox/Sidebox";
import About from "./pages/About/About";
import Membership from "./pages/Membership/Membership";
import Schedule from "./pages/Schedule/Schedule";
import Contact from "./pages/Contact/Contact";
import Image from "./components/Images/Image";

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
        this.setState({
          authorized: res.data.message ? false : true,
          display: true
        });
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

  setRedirect = pathname => {
    this.setState({ redirect: pathname });
  };

  render() {
    return (
      <Router>
        <Navbar />

        <Route exact path="/" component={Image} />
        <Route exact path="/" component={Sidebox} />
        <Route exact path="/about" component={About} />
        <Route exact path="/membership-options" component={Membership} />
        <Route exact path="/schedule" component={Schedule} />
        <Route path="/contact" component={Contact} />
        {this.state.display ? (
          <div>
            <Switch>
              <Route exact path="/">
                {this.state.authorized ? (
                  <Home logout={this.logout} />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>

              <Route exact path="/profile">
                {this.state.authorized ? (
                  <Protected logout={this.logout} />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>

              <Route exact path="/login">
                <Login
                  isAuthorized={this.isAuthorized}
                  authorized={this.state.authorized}
                  redirect={window.location.pathname}
                />
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
        ) : (
          ""
        )}
      </Router>
    );
  }
}

export default App;
