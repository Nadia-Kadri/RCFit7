import React from "react";
import moment from "moment";
//import "./index.css";

const Schedule = (props) => (
  <tr>
    <td>{moment(props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ddd MM/DD/YY")}</td>
    <td>{moment(props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("h:mmA")}</td>
    <td>{props.duration}</td>
    <td>{props.title}</td>
    <td>{props.trainer}</td>
  </tr>
);
  
export default Schedule;