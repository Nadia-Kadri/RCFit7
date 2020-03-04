import React from "react";
import "./index.css";

const Trainer = (props) => (
      <tr>
        <td>{props.firstName} {props.lastName}</td>
        <td><span className="btn btn-outline-danger delete-trainer-button text-center" id={props.id} onClick={() => props.onClickDelete(props.id)} >X</span></td>
        
      </tr>
    );

export default Trainer;