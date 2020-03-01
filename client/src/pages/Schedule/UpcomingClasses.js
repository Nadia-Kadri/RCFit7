import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import UpcomingClass from "./UpcomingClass";

class UpcomingClasses extends Component {

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
      })
      .catch(err => console.log(err))
  }

  userSignUp = (userID, classID) => {

  }

  onClick = (id) => {
    console.log(id)
  }

  render() {
    return (
      this.state.events.map(event => (
        <UpcomingClass key={event._id} id={event._id} title={event.class.title} duration={event.class.duration} trainer={event.trainer.firstName} onClick={this.onClick}/>
      ))
    );
  }
}

export default UpcomingClasses;