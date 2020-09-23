import React, { Fragment, useState, useEffect } from "react";
import scheduleAPI from "../../utils/scheduleAPI";
import Schedule from "./Schedule";
import moment from "moment";
import { Link } from "react-router-dom";
// import "./index.css";

const UserProfile = ({ user }) => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    getSchedules();
    console.log(user);
    // eslint-disable-next-line
  }, []);

  // const { schedule } = state;

  const getSchedules = () => {
    scheduleAPI
      .userSchedule()
      .then(res => {
        let schedulesArr = [];
        for (let i = 0; i < res.data.length; i++) {
          let isSignedUp;
          let found = res.data[i].users.some(use => use === user._id);
          found ? (isSignedUp = true) : (isSignedUp = false);
          // debugger;
          schedulesArr.push({
            id: res.data[i]._id,
            title: res.data[i].class.title,
            duration: res.data[i].class.duration,
            trainer: res.data[i].trainer.firstName,
            datetime: new Date(res.data[i].datetime),
            users: res.data[i].users,
            isSignedUp: isSignedUp
          });
        }
        const userSchedulesArr = schedulesArr.filter(
          e => e.isSignedUp === true
        );
        setSchedules(userSchedulesArr);
        console.log(userSchedulesArr);
      })
      .catch(err => console.log(err));
  };

  return (
    <Fragment>
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
                <h2 className="card-title">Welcome {user.firstName}!</h2>
                <p className="card-text">
                  This is your User Profile Page that only you have access to.
                  On this page you can view your personal information and see
                  what classes you're signed up for. Scroll down to get started!
                </p>
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
                      <td>
                        {user.firstName} {user.lastName}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Email:</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Username:</th>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <th scope="row">Birthday:</th>
                      <td>
                        {moment(user.birthday, "YYYY-MM-DDTHH:mm:ss.SSSZ")
                          .utc()
                          .format("MM/DD/YY")}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Date Joined:</th>
                      <td>
                        {moment(user.created, "YYYY-MM-DDTHH:mm:ss.SSSZ")
                          .utc()
                          .format("MM/DD/YY")}
                      </td>
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
                  <p>
                    These are all the classes that you've signed up for! Need to
                    cancel? Navigate to the Schedule page{" "}
                    <Link to="/schedule">here.</Link>
                  </p>
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
                    {schedules.map(schedule => (
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
    </Fragment>
  );
};

export default UserProfile;
