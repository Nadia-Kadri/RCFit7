import React from "react";
import Button from "./Button";
import moment from "moment";

const UpcomingSchedule = (props) => (
  <tr>
    <td>{moment(props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("h:mmA")} - {moment(props.datetimeEnd, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("h:mmA")}</td>
    <td>{props.title} with {props.trainer}</td>
    <td>
      <Button 
        id={props.id} 
        users={props.users}
        userId={props.userId}
        isSignedUp={props.isSignedUp}
        userSignUp={props.userSignUp}
        userCancel={props.userCancel}
      />
    </td>
  </tr>
);

export default UpcomingSchedule;