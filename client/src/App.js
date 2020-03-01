import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import MembershipOptions from "./pages/MembershipOptions";
import Schedule from "./pages/Schedule/Schedule";
import Contact from "./pages/Contact";
// import Protected from "./pages/Protected";
import API from "./utils/userAPI";

class App extends Component {
  state = {
    authorized: false,
    display: false,
    userId: false
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        console.log(res)
        res.data.message ? 
          this.setState({
            authorized: false,
            display: true,
            userId: false
          })
        : this.setState({
          authorized: true,
          display: true,
          userId: res.data._id
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
        window.location.reload(false)
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
            <Navbar logout={this.logout} authorized={this.state.authorized}/>
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

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/membershipOptions">
                <MembershipOptions />
              </Route>

              <Route exact path="/schedule">
                <Schedule userId={this.state.userId} />
              </Route>

              <Route exact path="/contact">
                <Contact />
              </Route>

              {/* <Route exact path="/protected">
                {this.state.authorized ? (
                  <Protected logout={this.logout} />
                ) : (
                    <Redirect to="/login" />
                  )}
              </Route> */}

              <Route>
                <Redirect to="/" />
              </Route>

            </Switch>
            <Footer />
          </div>
        ) : ""}
      </Router>
    );
  }
}

export default App;
