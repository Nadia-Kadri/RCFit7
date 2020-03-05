import React, { Component } from "react";
import classAPI from "../../utils/classAPI";
import userAPI from "../../utils/userAPI";
import scheduleAPI from "../../utils/scheduleAPI";
import moment from "moment";
import Class from "./Class";
// import "./index.css";
class UserProfile extends Component {
  state = {
    classes: [],
    trainers: [],
    schedules: [],
    title: "",
    duration: ""
  };
  componentDidMount() {
    this.getClasses();
    // this.getTrainers()
    // this.getSchedules()
  }
  getClasses = () => {
    classAPI
      .viewClasses()
      .then(res => {
        this.setState({ classes: res.data });
        // console.log(this.state.classes)
      })
      .catch(err => console.log(err));
  };


  // getSchedules = () => {
  //   scheduleAPI.userSchedule()
  //     .then(res => { 
  //       let schedulesArr = []
  //       for(let i = 0; i < res.data.length; i++) {
  //         let isSignedUp
  //         let found = res.data[i].users.some(user => user === this.props.user._id)
  //         found ? isSignedUp = true : isSignedUp = false

  //         schedulesArr.push({
  //           id: res.data[i]._id,
  //           title: res.data[i].class.title,
  //           duration: res.data[i].class.duration,
  //           trainer: res.data[i].trainer.firstName,
  //           datetime: new Date(res.data[i].datetime),
  //           users: res.data[i].users, 
  //           isSignedUp: isSignedUp
  //         })
  //       }
  //       this.setState({ schedules: schedulesArr })
  //     })
  //     .catch(err => console.log(err))
  // }




  //editForm = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="custContainer">
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
                  <p className="card-text">This is your protected User Profile Page that only you have access to. On this page you can view and update your personal information and see what classes you're signed up for. Scroll down to get started!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Personal Information</h4>
                  <tr>
                    <th scope="row">Name:</th>
                    <td>
                      {this.props.user.firstName} {this.props.user.lastName}
                    </td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Email:</th>
                    <td>{this.props.user.email}</td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Birthday:</th>
                    <td>{this.props.user.birthday}</td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Your Classes</h4>
                  <p className="card-text">
                    These are all the classes that you've signed up for!
                  </p>
                  <p>Navigate to schedule page to cancel???</p>
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.classes.map(e => (
                        <Class
                          key={e._id}
                          id={e._id}
                          title={e.title}
                          duration={e.duration}
                          trainers={e.trainers}
                          onClickDelete={e.onClickDelete}
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