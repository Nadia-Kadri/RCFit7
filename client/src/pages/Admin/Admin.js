import React, { Component } from "react";
import Classes from "./Classes";
import Trainers from "./Trainers";
import BuildSchedule from "./BuildSchedule";
import CurrentSchedules from "./CurrentSchedules";
import classAPI from "../../utils/classAPI"
// import trainerAPI from "../../utils/trainerAPI"
// import "./index.css";

class Admin extends Component {

  componentDidMount() {
    
  }

  getClasses = () => {
    
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
              <Classes />
            </div>
            <div className="col-sm-6">
              <Trainers />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <BuildSchedule />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <CurrentSchedules />
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Admin;