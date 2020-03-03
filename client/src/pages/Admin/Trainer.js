import React, { Component } from "react";
import "./index.css";

class Trainer extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName} {this.props.lastName}</td>
        <td><span className="btn btn-outline-danger delete-trainer-button text-center">X</span></td>
      </tr>
    );
  }
}

export default Trainer;