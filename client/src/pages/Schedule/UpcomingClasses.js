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
        // console.log(this.state.events)
      })
      .catch(err => console.log(err))
  }

  userSignUp = (classId) => {
    API.userSignUp(classId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  userCancel = (classId) => {
    API.userCancel(classId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  onClickSignUp = (id) => {
    // console.log(id)
    this.userSignUp(id)
    window.location.reload(false)
  }

  onClickCancel = (id) => {
    this.userCancel(id)
    window.location.reload(false)
  }

  render() {
    return (
      this.state.events.map(event => (
        <UpcomingClass 
          key={event._id} 
          id={event._id} 
          title={event.class.title} 
          duration={event.class.duration} 
          trainer={event.trainer.firstName} 
          time={event.datetime} 
          users={event.users} 
          userId={this.props.userId} 
          onClickSignUp={this.onClickSignUp}
          onClickCancel={this.onClickCancel}
        />
      ))
    );
  }
}

export default UpcomingClasses;