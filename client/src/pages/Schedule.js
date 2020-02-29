import React, { Component } from "react";
import API from "../utils/scheduleAPI";

class Schedule extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents()
  };

  getEvents = () => {
    API.userSchedule()
      .then(data => {
        data.data.forEach(scheduledClass => {
          this.state.events.push(scheduledClass)
        })
        console.log(this.state.events)
      }
      )
  }

  render() {
    return (
      <React.Fragment>
        <h1>Schedule Page</h1>
      </React.Fragment>
    );
  }
}

export default Schedule;
