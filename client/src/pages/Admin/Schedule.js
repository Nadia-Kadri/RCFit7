import React, { Component } from "react";
import moment from "moment";
import "./index.css";

class Schedule extends Component {
  render() {
    return (
      <tr>
        <td scope="row">{moment(this.props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ddd MM/DD/YY")}</td>
        <td>{moment(this.props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("h:mmA")}</td>
        <td>{this.props.duration}</td>
        <td>{this.props.title}</td>
        <td>{this.props.trainer}</td>
        <td><span className="btn btn-outline-warning delete-schedule-button text-center">X</span></td>
        <td><span className="btn btn-outline-warning delete-schedule-button text-center">X</span></td>
        <td><span className="btn btn-outline-danger delete-schedule-button text-center">X</span></td>
      </tr>
    );
  }
}

export default Schedule;