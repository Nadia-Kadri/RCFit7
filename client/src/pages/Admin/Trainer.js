import React, { Component } from "react";
import "./index.css";

class Trainer extends Component {
  render() {
    return (
      <div>
        <span>{this.props.firstName} {this.props.lastName}</span>
        <span className="btn btn-outline-danger delete-trainer-button text-center">X</span>
      </div>
    );
  }
}

export default Trainer;