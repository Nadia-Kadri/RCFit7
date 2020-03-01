import React from "react";
import "./index.css";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-bottom navbar-light bg-light footer">
          <a className="navbar-brand text-center footer-text" href="#">
            231B North Village Blvd. <br />
            Celebration, FL 34747
          </a>
          <a className="navbar-brand text-center footer-text" href="#">
            RCFIT7@rcfit7.com <br />
            321-688-1279
          </a>
          <a className="navbar-brand text-center footer-text" href="#">
            Instagram
            <br />
            Facebook
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
export default Footer;