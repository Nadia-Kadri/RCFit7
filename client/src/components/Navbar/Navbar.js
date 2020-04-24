import React from "react";
import { Link } from "react-router-dom";
import SvgComponent from "../SVG";
import "./index.css";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light navbar-cust bg-light index cust-nav">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <div>
              <SvgComponent style={{ height: "60px", width: "60px" }} />
            </div>
            <h3></h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
            <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active border-right"
                    : "nav-link border-right"
                }
              >
                <span className="float-right text">
                  Home <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active border-right"
                    : "nav-link border-right"
                }
              >
                <span className="float-right text">
                  About <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link
                to="/schedule"
                className={
                  window.location.pathname === "/schedule"
                    ? "nav-link active border-right"
                    : "nav-link border-right"
                }
              >
                <span className="float-right text">
                  Schedule <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active border-right"
                    : "nav-link border-right"
                }
              >
                <span className="float-right text">
                  Contact <span className="sr-only">(current)</span>
                </span>
              </Link>





              {this.props.authorized && !this.props.isAdmin ? (
              <Link 
                to="/user/profile"
                className={
                  window.location.pathname === "/user/profile"
                    ? "nav-link active border-right"
                    : "nav-link border-right"
                }>
                <span className="float-right text">
                  User Profile <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              ""
            )}
            {this.props.authorized && this.props.isAdmin ? (
              <Link 
                to="/admin"
                className={
                  window.location.pathname === "/admin"
                    ? "nav-link active border-right"
                    : "nav-link border-right"
                }>
                <span className="float-right text">
                  Admin Page <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              ""
            )}
            {this.props.authorized ? (
              <Link 
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }>
                <span className="float-right text" onClick={this.props.logout}>
                  Logout <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              <Link 
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }>
                <span className="float-right text">
                  Login / Sign-Up <span className="sr-only">(current)</span>
                </span>
              </Link>
            )}


            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
