import React, { Component } from "react";
import "./index.css";

class Class extends Component {
  render() {
    return (
      <div>
        <span>{this.props.title} {this.props.duration}</span>
        <span className="btn btn-outline-danger delete-class-button text-center">X</span>
      </div>
    );
  }
}

export default Class;