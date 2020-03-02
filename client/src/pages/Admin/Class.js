import React, { Component } from "react";
import "./index.css";

class Class extends Component {
  render() {
    return (
      <tr>
        <td scope="row">{this.props.title}</td>
        <td>{this.props.duration}</td>
        <td><span className="btn btn-outline-danger delete-class-button text-center">X</span></td>
      </tr>
    );
  }
}

export default Class;