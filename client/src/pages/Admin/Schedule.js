import React from "react";
import moment from "moment";
import "./index.css";

const Schedule = (props) => (
  <tr>
    <td>{moment(props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ddd MM/DD/YY")}</td>
    <td>{moment(props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("h:mmA")}</td>
    <td>{props.duration}</td>
    <td>{props.title}</td>
    <td>{props.trainer}</td>
    <td><span className="btn btn-outline-warning view-users-schedule-button text-center" id={props.id} onClick={() => props.onClickViewUsers(props.id)} data-toggle="modal" data-target="#viewUsers" >X</span></td>
    {/* <td><span className="btn btn-outline-warning edit-schedule-button text-center">X</span></td> */}
    <td><span className="btn btn-outline-danger delete-schedule-button text-center" id={props.id} onClick={() => props.onClickDelete(props.id)} >X</span></td>
  </tr>
);
  

export default Schedule;