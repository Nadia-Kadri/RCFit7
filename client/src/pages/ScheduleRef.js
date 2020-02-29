import React from "react";

class Schedule extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-end ml-5">
          <div className="col-sm-3">
            <h4>Cardio</h4>
          </div>
          <div className="col-sm-3">
            <h4>Strength</h4>
          </div>
          <div className="col-sm-3">
            <h4>Hybrid</h4>
          </div>
          <div className="col-sm-3">
            <h4>Stretch</h4>
          </div>
        </div>

        <div className="row justify-content-end ml-4">
          <div className="col-sm-3">
            <p>MON., WED., FRI.</p>
          </div>
          <div className="col-sm-3">
            <p>TUES., THURS., SUN.</p>
          </div>
          <div className="col-sm-3">
            <p className="ml-4">SAT.</p>
          </div>
          <div className="col-sm-3">
            <p className="ml-4">SUN.</p>
          </div>
        </div>

        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sunday</h5>
              <p>9:00AM</p>
              <button>Register</button>
              Trainer: Chad
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Monday</h5>
              <p className="card-text">5:00AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">6:30AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">12:00AM</p>
              <button>Register</button>
              Trainer: Ryan <hr />
              <p className="card-text">5:00PM</p>
              <button>Register</button>
              Trainer: Akeem <hr />
              <p className="card-text">6:00PM</p>
              <button>Register</button>
              Trainer: Ryan
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tuesday</h5>
              <p className="card-text">5:00AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">6:30AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">12:00AM</p>
              <button>Register</button>
              Trainer: Ryan <hr />
              <p className="card-text">5:00PM</p>
              <button>Register</button>
              Trainer: Akeem <hr />
              <p className="card-text">6:00PM</p>
              <button>Register</button>
              Trainer: Ryan
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wednesday</h5>
              <p className="card-text">5:00AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">6:30AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">12:00AM</p>
              <button>Register</button>
              Trainer: Ryan <hr />
              <p className="card-text">5:00PM</p>
              <button>Register</button>
              Trainer: Akeem <hr />
              <p className="card-text">6:00PM</p>
              <button>Register</button>
              Trainer: Ryan
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thursday</h5>
              <p className="card-text">5:00AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">6:30AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">12:00AM</p>
              <button>Register</button>
              Trainer: Ryan <hr />
              <p className="card-text">5:00PM</p>
              <button>Register</button>
              Trainer: Akeem <hr />
              <p className="card-text">6:00PM</p>
              <button>Register</button>
              Trainer: Ryan
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Friday</h5>
              <p className="card-text">5:00AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">6:30AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">12:00AM</p>
              <button>Register</button>
              Trainer: Ryan <hr />
              <p className="card-text">5:00PM</p>
              <button>Register</button>
              Trainer: Akeem <hr />
              <p className="card-text">6:00PM</p>
              <button>Register</button>
              Trainer: Ryan
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Saturday</h5>
              <p className="card-text">5:00AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">6:30AM</p>
              <button>Register</button>
              Trainer: Carlos <hr />
              <p className="card-text">12:00AM</p>
              <button>Register</button>
              Trainer: Ryan <hr />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Schedule;
