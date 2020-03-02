import React, { Component } from "react";
// import "./index.css";

class BuildSchedule extends Component {

  componentDidMount() {
    
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h4 className="card-title">Build Your Schedule</h4>
            <div className="card-text">
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
        </div>
      </React.Fragment>
    );
  }
}

export default BuildSchedule;