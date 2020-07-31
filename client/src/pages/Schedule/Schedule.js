import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import moment from "moment"
import UpcomingSchedules from "./UpcomingSchedules";
import ScheduleCalendar from "./ScheduleCalendar";
import LoginModal from "./Modals/LoginModal";
import SignUpModal from "./Modals/SignUpModal";
import CancelModal from "./Modals/CancelModal";
import image from "../../images/schedule2.jpg";
import "./index.css";

class Schedule extends Component {

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
      .then(res => {
        console.log(res)
        this.getSchedules()
      })
      .catch(err => console.log(err))
  }

  userCancel = (scheduleId) => {
    API.userCancel(scheduleId)
      .then(res => {
        console.log(res)
        this.getSchedules()
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <React.Fragment>
        <header className="masthead-schedule">
          <div className="container h-100"></div>
        </header>

        <div className="masthead-text">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12" id="masthead-text-margin">
                <h1 className="float-right">SCHEDULE <i className="fa fa-angle-double-down" aria-hidden="true"></i></h1>
              </div>
            </div>
          </div>  
        </div>


        <div className="container-fluid">

          <div className="row">

            <div className="col-sm-7">
              <div className="card bg-light mb-3 custCard upcomingLeft">
                <div className="card-body">
                  <h4 className="card-title">Upcoming Classes</h4>
                  <div className="card-text">
                    <h6>Below are this week's upcoming classes, click Sign-Up to reserve your spot!</h6>
                    <table className="table table-hover table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Class</th>
                          <th scope="col">Time</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Trainer</th>
                          <th scope="col">Sign-Up/Cancel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <img src={image} className="col-sm-5 mb-3"/>
          </div> 

          <div className="row">
            <div className="col-sm-12">
              <div className="card bg-light mb-3 custCard">
                <div className="card-body">
                  <h4 className="card-title">Monthly Schedule</h4>
                  <div className="card-text">
                    <h6>Like to plan ahead? View the entire schedule below!</h6>
                    <div className="ml-5 mr-5">
                      <div className="m-5">
                        <ScheduleCalendar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <LoginModal />
        <SignUpModal getSchedules={this.getSchedules} />
        <CancelModal getSchedules={this.getSchedules} />
      </React.Fragment>
    );
  }
}

export default Schedule;
