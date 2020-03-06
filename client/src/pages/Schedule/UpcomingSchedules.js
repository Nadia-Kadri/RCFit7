import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import UpcomingSchedule from "./UpcomingSchedule";
import moment from "moment"

class UpcomingSchedules extends Component {

  state = {
    schedules: []
  };

  componentDidMount() {
    this.getSchedules()
  };

  getSchedules = () => {
    API.userSchedule()
      .then(res => { 
        let schedulesArr = []
        for(let i = 0; i < res.data.length; i++) {
          let isSignedUp
          let found = res.data[i].users.some(user => user === this.props.userId)
          found ? isSignedUp = true : isSignedUp = false

          schedulesArr.push({
            id: res.data[i]._id,
            title: res.data[i].class.title,
            duration: res.data[i].class.duration,
            trainer: res.data[i].trainer.firstName,
            datetime: new Date(res.data[i].datetime),
            users: res.data[i].users, 
            isSignedUp: isSignedUp
          })
        }
        const signUpSchedulesArr = schedulesArr.filter(e => {return e.datetime < moment().add(7, 'days')})
        this.setState({ schedules: signUpSchedulesArr })
      })
      .catch(err => console.log(err))
  }

  userSignUp = (scheduleId) => {
    API.userSignUp(scheduleId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  userCancel = (scheduleId) => {
    API.userCancel(scheduleId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  onClickSignUp = (id) => {
    this.userSignUp(id)
    this.getSchedules()
  }

  onClickCancel = (id) => {
    this.userCancel(id)
    this.getSchedules()
  }

  render() {
    return (
      <React.Fragment>
        {this.state.schedules.map(schedule => (
          <UpcomingSchedule 
            key={schedule.id} 
            id={schedule.id} 
            title={schedule.title} 
            duration={schedule.duration} 
            trainer={schedule.trainer} 
            datetime={schedule.datetime} 
            users={schedule.users}
            isSignedUp={schedule.isSignedUp}
            userId={this.props.userId} 
            onClickSignUp={this.onClickSignUp}
            onClickCancel={this.onClickCancel}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default UpcomingSchedules;