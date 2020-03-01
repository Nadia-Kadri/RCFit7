import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment) 

class ScheduleCalendar extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents()
  };

  getEvents = () => {
    API.userSchedule()
      .then(res => {
        let eventsArr = []
        for(let i = 0; i < res.data.length; i++) {
          let end = moment(res.data[i].datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").add(res.data[i].class.duration, "minutes")
          eventsArr.push({
            id: res.data[i]._id,
            title: res.data[i].class.title,
            start: new Date(res.data[i].datetime),
            end: new Date(moment(end).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"))
          })
        }
        this.setState({ events: eventsArr })
        // console.log(this.state.events)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Calendar
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
