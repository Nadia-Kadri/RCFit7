import React from "react";
import "./index.css";

const Class = (props) => (
      <tr>
        <td>{props.title}</td>
        <td>{props.duration}</td>
        <td><button className="btn btn-outline-danger delete-class-button text-center" id={props.id} onClick={() => props.onClickDelete(props.id)} >X</button></td>
        {/* onClick={() => this.props.onClickDelete(this.props.id)}  */}
      </tr>
    );

export default Class;