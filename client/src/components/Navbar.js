import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            <h3>RC FIT 7</h3>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                <span className="float-right">
                  About <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link to="/membership-options" className={window.location.pathname === "/membership-options" ? "nav-link active" : "nav-link"}>
                <span className="float-right">
                  Membership Options <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link to="/schedule" className={window.location.pathname === "/schedule" ? "nav-link active" : "nav-link"}>
                <span className="float-right">
                  Schedule <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                <span className="float-right">
                  Contact <span className="sr-only">(current)</span>
                </span>
              </Link>
            </div>
            <Link to="/login">
              <span className="float-right">
                <button>Login / Sign-Up</button>
              </span>
            </Link>
          </div>
        </nav>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <a className="navbar-brand text-center" href="#">
            231B North Village Blvd. <br />
            Celebration, FL 34747
          </a>
          <a className="navbar-brand text-center" href="#">
            RCFIT7@rcfit7.com <br />
            321-688-1279
          </a>
          <a className="navbar-brand text-center" href="#">
            Instagram
            <br />
            Facebook
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
