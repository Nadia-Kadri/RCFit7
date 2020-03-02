import React, { Component } from "react";
// import "./index.css";

class Admin extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="custContainer">
          <div className="row">
            <div className="col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2>Welcome Nadia(make dynamic)!</h2>
              <p>This is your protected Admin Page that only you have access to. On this page you can add recurring classes, update trainers, build your schedule and much more. Scroll down to get started!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h4>Add a recurring class</h4>
            </div>
            <div className="col-sm-6">
              <h4>Add or remove a trainer</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h4>Build your schedule</h4>
              <div className="row">
                <div className="col-sm-4">
                  <h6>Date and Time</h6>
                </div>
                <div className="col-sm-4">
                  <h6>Recurring Class</h6>
                </div>
                <div className="col-sm-4">
                  <h6>Trainer</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h4>Your current schedule</h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;