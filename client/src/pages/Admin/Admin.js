import React, { Component } from "react";
import Classes from "./Classes";
import Trainers from "./Trainers";
import BuildSchedule from "./BuildSchedule";
import CurrentSchedules from "./CurrentSchedules";
import Modal from "./Modals/Schedule";
import classAPI from "../../utils/classAPI";
import userAPI from "../../utils/userAPI";
import scheduleAPI from "../../utils/scheduleAPI";
// import "./index.css";

class Admin extends Component {

  state = {
    classes: [],
    trainers: [],
    schedules: [],
    users: []
  };

  componentDidMount() {
    this.getClasses()
    this.getTrainers()
    this.getSchedules()
  };

  getClasses = () => {
    classAPI.viewClasses()
      .then(res => this.setState({ classes: res.data }))
      .catch(err => console.log(err))
  };

  getTrainers = () => {
    userAPI.viewTrainers()
      .then(res => this.setState({ trainers: res.data }))
      .catch(err => console.log(err))
  };

  getSchedules = () => {
    scheduleAPI.userSchedule()
      .then(res => this.setState({ schedules: res.data }))
      .catch(err => console.log(err))
  };

  addClass = (title, duration, event) => {
    event.preventDefault();
    classAPI.addClass({
      title: title,
      duration: duration
    })
      .then(res => this.getClasses())
      .catch(err => console.log(err))
  };

  deleteClass = (id) => {
    let found = this.state.schedules.some(schedule => schedule.class._id === id)
    found ? 
    (
      alert("Error! Can't delete this") 
    ) : (
      classAPI.deleteClass(id)
        .then(res => this.getClasses())
        .catch(err => console.log(err))
    )
  }

  addTrainer = (email, event) => {
    event.preventDefault();
    userAPI.addTrainer(email)
      .then(res => this.getTrainers())
      .catch(err => console.log(err))
  }

  deleteTrainer = (id) => {
    userAPI.deleteTrainer(id)
      .then(res => this.getTrainers())
      .catch(err => console.log(err))
  }

  addSchedule = (datetime, e, trainer, event) => {
    event.preventDefault();
    scheduleAPI.createSchedule({
      datetime: datetime,
      class: e,
      trainer: trainer
    })
      .then(res => {
        res.data.errmsg ? alert("Can't add, duplicate datetime") : this.getSchedules()
      })
      .catch(err => console.log(err))
  }

  deleteSchedule = (id) => {
    scheduleAPI.deleteSchedule(id)
      .then(res => this.getSchedules())
      .catch(err => console.log(err))
  }

  getUsers = (id) => {
    scheduleAPI.viewUsers(id)
      .then(res => this.setState({users: res.data.users}))
      .catch(err => console.log(err))
  }

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
                  <p className="card-text">This is your protected Admin Page that only you have access to. On this page you can add recurring classes, update trainers, build your schedule and much more. Scroll down to get started!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Classes classes={this.state.classes} onClickAdd={this.addClass} onClickDelete={this.deleteClass} />
            </div>
            <div className="col-sm-6">
              <Trainers trainers={this.state.trainers} onClickAdd={this.addTrainer} onClickDelete={this.deleteTrainer} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <BuildSchedule classes={this.state.classes} trainers={this.state.trainers} onClick={this.addSchedule} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <CurrentSchedules schedules={this.state.schedules} onClickViewUsers={this.getUsers} onClickDelete={this.deleteSchedule} />
            </div>
          </div>

        </div>
        <Modal users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default Admin;