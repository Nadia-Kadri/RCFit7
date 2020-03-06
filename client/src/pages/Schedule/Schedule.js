import React, { Component } from "react";
import UpcomingSchedules from "./UpcomingSchedules";
import ScheduleCalendar from "./ScheduleCalendar";
import LoginModal from "./Modals/LoginModal";
import SignUpModal from "./Modals/SignUpModal";
import CancelModal from "./Modals/CancelModal";
import backgroundImage from "../../images/schedulepage.jpg";
import "./index.css";

class Schedule extends Component {
  
  render() {
    return (
      <React.Fragment>
        {/* <div style={{backgroundImage: `url(${backgroundImage})`, height: 500, width: `100%`}}></div> */}
        <div className="custContainer">
          <div className="row m-1">
            <div className="col-sm-12">
              <h1>Schedule Page</h1>
            </div>
          </div>

          <div className="row">

            <div className="col-sm-6">
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
                        <UpcomingSchedules userId={this.props.userId} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 upcomingRight">
              <div className="card bg-light mb-3 custCard">
                <div className="card-body">
                  photo
                </div>
              </div>
            </div>
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
        <SignUpModal />
        <CancelModal />
      </React.Fragment>
    );
  }
}

export default Schedule;
