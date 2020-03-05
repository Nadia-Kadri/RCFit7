import React from "react";
import Button from "./Button";
import moment from "moment";

const UpcomingSchedule = (props) => (
  <tr>
    <td>{props.title}</td>
    <td>{moment(props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("dddd h:mmA")}</td>
    <td>{props.duration}</td>
    <td>{props.trainer}</td>
    <td>
      <Button 
        id={props.id} 
        users={props.users}
        userId={props.userId}
        isSignedUp={props.isSignedUp}
        onClickSignUp={props.onClickSignUp}
        onClickCancel={props.onClickCancel}
      />
    </td>
  </tr>
);


export default UpcomingSchedule;