import React, { Component } from "react";
import Schedule from "./Schedule";
// import "./index.css";

class CurrentSchedules extends Component {

  componentDidMount() {
    
  }
  
  render() {
    return (
      <React.Fragment>
       <div className="card bg-light mb-3">
          <div className="card-body">
            <h4 className="card-title">Your Current Schedule</h4>
            <div className="card-text">
              <table className="table table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Title</th>
                    <th scope="col">Trainer</th>
                    <th scope="col">View Users</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>

                  {this.props.schedules.map(schedule => 
                    <Schedule 
                      key={schedule._id}
                      id={schedule._id}
                      datetime={schedule.datetime}
                      title={schedule.class.title}
                      duration={schedule.class.duration}
                      trainer={schedule.trainer.firstName}
                      users={schedule.users}
                    />
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CurrentSchedules;