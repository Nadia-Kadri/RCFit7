import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment) 

class ScheduleCalendar extends Component {
  state = {
    events: [
      {
        id: 1,
        title: 'Some Event',
        start: new Date("2020-02-29T12:00:00.000Z"),
        end: new Date("2020-02-29T13:00:00.000Z"),
      },
      {
        id: 1,
        title: 'Some Other Event',
        start: new Date("2020-03-03T12:00:00.000Z"),
        end: new Date("2020-03-03T13:00:00.000Z"),
      }
    ]
  };

  // componentDidMount() {
  //   this.getEvents()
  // };

  // getEvents = () => {
  //   API.userSchedule()
  //     .then(res => { 
  //       this.setState({ events: res.data })
  //       console.log(this.state.events)
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <div className="App">
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "100vh" }}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default ScheduleCalendar;
