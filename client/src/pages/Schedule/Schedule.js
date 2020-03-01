import React, { Component } from "react";
import UpcomingClasses from "./UpcomingClasses";
import ScheduleCalendar from "./ScheduleCalendar";
import "./index.css";

class Schedule extends Component {
  
  render() {
    return (
      <React.Fragment>
        <h1>Schedule Page</h1>
        <div className="custContainer">
          <div className="row">
            <div className="col-sm-5">
              <UpcomingClasses userId={this.props.userId} />
            </div>
            <div className="col-sm-7">
              <ScheduleCalendar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Schedule;
