import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SvgComponent from "../SVG";
import "./index.css";

const Navbar = ({ authorized, isAdmin, logout }) => {
  const [state, setState] = useState({
    collapsed: true
  });

  const { collapsed } = state;

  const handleClick = e => {
    console.log(e.target);
    // collapsed ? setState({ collapsed: false }) : "";
    // e.target.ariaExpanded === true ? setState({ collapsed: true }) : "";
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light index cust-nav">
        <Link to="/" className="nav-link">
          <SvgComponent style={{ height: "60px", width: "60px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ham_menu"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto">
            <Link
              to="/"
              className="nav-link border-right"
              onClick={handleClick}
            >
              <span className="float-right text">
                Home <span className="sr-only">(current)</span>
              </span>
            </Link>

            {/* <Link to="/about" className="nav-link border-right">
                <span className="float-right text">
                  About <span className="sr-only">(current)</span>
                </span>
              </Link> */}

            <Link
              to="/schedule"
              className="nav-link border-right"
              onClick={handleClick}
            >
              <span className="float-right text">
                Schedule <span className="sr-only">(current)</span>
              </span>
            </Link>

            <Link
              to="/contact"
              className="nav-link border-right"
              onClick={handleClick}
            >
              <span className="float-right text">
                Contact <span className="sr-only">(current)</span>
              </span>
            </Link>

            {authorized && !isAdmin ? (
              <Link
                to="/user/profile"
                className="nav-link border-right"
                onClick={handleClick}
              >
                <span className="float-right text">
                  User Profile <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              ""
            )}

            {authorized && isAdmin ? (
              <Link
                to="/admin"
                className="nav-link border-right"
                onClick={handleClick}
              >
                <span className="float-right text">
                  Admin Page <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              ""
            )}

            {authorized ? (
              <Link to="/" className="nav-link" onClick={handleClick}>
                <span className="float-right text" onClick={logout}>
                  Logout <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              <Link to="/login" className="nav-link" onClick={handleClick}>
                <span className="float-right text">
                  Login / Sign-Up <span className="sr-only">(current)</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
