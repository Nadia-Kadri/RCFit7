import React, { Component } from "react";
import "./index.css";

class Class extends Component {
  render() {
    // console.log(this.props.id)
    return (
      <tr>
        <td scope="row">{this.props.title}</td>
        <td>{this.props.duration}</td>
        <td><button className="btn btn-outline-danger delete-class-button text-center" >X</button></td>
        {/* onClick={this.props.onClickDelete.bind(this, this.props.id)} */}
      </tr>
    );
  }
}

export default Class;