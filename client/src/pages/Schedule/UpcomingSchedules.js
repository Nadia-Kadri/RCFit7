import React, { Fragment } from "react";
import UpcomingSchedule from "./UpcomingSchedule";
import moment from "moment";

// let filterSchedules = this.props.schedules.filter(schedule => moment(schedule.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("MMDDYY") === this.props.tableDate);
const UpcomingSchedules = props => (
  <Fragment>
    {props.schedules.map(schedule =>
      moment(schedule.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("MMDDYY") ===
      props.tableDate ? (
        <UpcomingSchedule
          key={schedule.id}
          id={schedule.id}
          title={schedule.title}
          duration={schedule.duration}
          trainer={schedule.trainer}
          datetime={schedule.datetime}
          datetimeEnd={schedule.datetimeEnd}
          users={schedule.users}
          isSignedUp={schedule.isSignedUp}
          userId={props.userId}
          userSignUp={props.userSignUp}
          userCancel={props.userCancel}
        />
      ) : null
    )}
  </Fragment>
);

export default UpcomingSchedules;
