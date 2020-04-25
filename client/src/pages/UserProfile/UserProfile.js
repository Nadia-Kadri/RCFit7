import React, { Component } from "react";
import scheduleAPI from "../../utils/scheduleAPI";
import Schedule from "./Schedule";
import moment from "moment";
import { Link } from "react-router-dom";
// import "./index.css";

class UserProfile extends Component {
  state = {
    schedules: []
  };

  componentDidMount() {
    this.getSchedules()
    console.log(this.props.user)
  }

  getSchedules = () => {
    scheduleAPI.userSchedule()
      .then(res => { 
        let schedulesArr = []
        for(let i = 0; i < res.data.length; i++) {
          let isSignedUp
          let found = res.data[i].users.some(user => user === this.props.user._id)
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
        const userSchedulesArr = schedulesArr.filter(e => {return e.isSignedUp === true})
        this.setState({ schedules: userSchedulesArr })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row m-1">
            <div className="col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h2 className="card-title">Welcome {this.props.user.firstName}!</h2>
                  <p className="card-text">This is your User Profile Page that only you have access to. On this page you can view your personal information and see what classes you're signed up for. Scroll down to get started!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Personal Information</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th scope="row">Name:</th>
                        <td>{this.props.user.firstName} {this.props.user.lastName}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email:</th>
                        <td>{this.props.user.email}</td>
                      </tr>
                      <tr>
                        <th scope="row">Username:</th>
                        <td>{this.props.user.username}</td>
                      </tr>
                      <tr>
                        <th scope="row">Birthday:</th>
                        <td>{moment(this.props.user.birthday, "YYYY-MM-DDTHH:mm:ss.SSSZ").utc().format("MM/DD/YY")}</td>
                      </tr>
                      <tr>
                        <th scope="row">Date Joined:</th>
                        <td>{moment(this.props.user.created, "YYYY-MM-DDTHH:mm:ss.SSSZ").utc().format("MM/DD/YY")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Your Classes</h4>
                  <div className="card-text">
                    <p>These are all the classes that you've signed up for! Need to cancel? Navigate to the Schedule page <Link to="/schedule">here.</Link></p>
                  </div>
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Title</th>
                        <th scope="col">Trainer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.schedules.map(schedule => (
                          <Schedule
                            key={schedule.id}
                            id={schedule.id}
                            datetime={schedule.datetime}
                            duration={schedule.duration}
                            title={schedule.title}
                            trainer={schedule.trainer}
                          />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}
export default UserProfile;