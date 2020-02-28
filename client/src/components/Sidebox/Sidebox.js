import React from "react";
import { Link } from "react-router-dom";

class SideBox extends React.Component {
  render() {
    return (
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">LIFT EACH OTHER UP.</h5>
          <span>
            <Link to="/about">ABOUT RC FIT 7</Link>
          </span>
          <br />
          <span>
            <Link to="/membership-options">MEMBERSHIP OPTIONS</Link>
          </span>
          <br />
          <span>
            <Link to="/schedule">SCHEDULE</Link>
          </span>
        </div>
      </div>
    );
  }
}
const cardStyle = {
  width: "18rem",
  margin: "50px 50px"
};
export default SideBox;
