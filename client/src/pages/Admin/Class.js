import React, { Component } from "react";
import "./index.css";

class Class extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.duration}</td>
        <td><button className="btn btn-outline-danger delete-class-button text-center" id={this.props.id} >X</button></td>
        {/* onClick={this.props.onClickDelete.bind(this, this.props.id)}  */}
      </tr>
    );
  }
}

export default Class;