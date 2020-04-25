import React from "react";
import UpcomingSchedule from "./UpcomingSchedule";

const UpcomingSchedules = (props) => (
  <React.Fragment>
    {props.schedules.map(schedule => (
      <UpcomingSchedule 
        key={schedule.id} 
        id={schedule.id} 
        title={schedule.title} 
        duration={schedule.duration} 
        trainer={schedule.trainer} 
        datetime={schedule.datetime} 
        users={schedule.users}
        isSignedUp={schedule.isSignedUp}
        userId={props.userId} 
        userSignUp={props.userSignUp}
        userCancel={props.userCancel}
      />
    ))}
  </React.Fragment>
);

export default UpcomingSchedules;