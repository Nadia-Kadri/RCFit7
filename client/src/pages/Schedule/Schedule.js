import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import UpcomingClasses from "./UpcomingClasses";
import ScheduleCalendar from "./ScheduleCalendar";
import "./index.css";

class Schedule extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents()
  };

  getEvents = () => {
    API.userSchedule()
      .then(res => { 
        this.setState({ events: res.data })
        console.log(this.state.events)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <h1>Schedule Page</h1>
        <div className="custContainer">
          <div className="row">
            <div className="col-sm-5">
              <UpcomingClasses />
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
