import React, { useState, useEffect } from "react";
import API from "../../utils/scheduleAPI";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    API.userSchedule()
      .then(res => {
        let eventsArr = [];
        for (let i = 0; i < res.data.length; i++) {
          let end = moment(
            res.data[i].datetime,
            "YYYY-MM-DDTHH:mm:ss.SSSZ"
          ).add(res.data[i].class.duration, "minutes");
          eventsArr.push({
            id: res.data[i]._id,
            title: res.data[i].class.title,
            start: new Date(res.data[i].datetime),
            end: new Date(
              moment(end)
                .utc()
                .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
            )
          });
        }
        setEvents(eventsArr);
        // console.log(this.state.events)
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "70vh" }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default ScheduleCalendar;
