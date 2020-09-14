import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import moment from "moment"
import UpcomingSchedules from "./UpcomingSchedules";
import ScheduleCalendar from "./ScheduleCalendar";
import LoginModal from "./Modals/LoginModal";
import SignUpModal from "./Modals/SignUpModal";
import CancelModal from "./Modals/CancelModal";
// import image from "../../images/schedule2.jpg";
import "./index.css";

class Schedule extends Component {

  state = {
    schedules: []
  };

  componentDidMount() {
    this.getSchedules()
  };

  getSchedules = () => {
    API.userSchedule()
      .then(res => { 
        let schedulesArr = [];
        for(let i = 0; i < res.data.length; i++) {
          let isSignedUp;
          let found = res.data[i].users.some(user => user === this.props.userId);
          found ? isSignedUp = true : isSignedUp = false;

          schedulesArr.push({
            id: res.data[i]._id,
            title: res.data[i].class.title,
            duration: res.data[i].class.duration,
            trainer: res.data[i].trainer.firstName,
            datetime: new Date(res.data[i].datetime),
            datetimeEnd: moment(new Date(res.data[i].datetime), "YYYY-MM-DDTHH:mm:ss.SSSZ").add(res.data[i].class.duration, 'minutes'),
            users: res.data[i].users, 
            isSignedUp: isSignedUp
          });
        };
        const signUpSchedulesArr = schedulesArr.filter(e => {return e.datetime < moment().add(7, 'days')})
        this.setState({ schedules: signUpSchedulesArr });
      })
      .catch(err => console.log(err));
  };

  userSignUp = (scheduleId) => {
    API.userSignUp(scheduleId)
      .then(res => {
        console.log(res)
        this.getSchedules()
      })
      .catch(err => console.log(err))
  };

  userCancel = (scheduleId) => {
    API.userCancel(scheduleId)
      .then(res => {
        console.log(res)
        this.getSchedules()
      })
      .catch(err => console.log(err))
  };
  
  render() {
    return (
      <React.Fragment>
        <header className="masthead-schedule">
          <div className="container h-100"></div>
        </header>

        <div className="masthead-text">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12" id="masthead-text-margin">
                <h1 className="float-right">SCHEDULE <i className="fa fa-angle-double-down" aria-hidden="true"></i></h1>
              </div>
            </div>
          </div>  
        </div>


        <div className="container-fluid">

          <div className="row">

            <div className="col-lg-7">
              <div className="card bg-light mb-3 custCard upcomingLeft">
                <div className="card-body">
                  <h4 className="card-title">Upcoming Classes</h4>
                  <div className="card-text">
                  <h6>Below are this week's upcoming classes, click Sign-Up to reserve your spot!</h6>

                  <div className="upcomingClassesTitle">{moment().format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().format("MMDDYY")}/>
                    </tbody>
                  </table>

                  <div className="upcomingClassesTitle">{moment().add(1, 'days').format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().add(1, 'days').format("MMDDYY")}/>
                    </tbody>
                  </table>

                  <div className="upcomingClassesTitle">{moment().add(2, 'days').format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().add(2, 'days').format("MMDDYY")}/>
                    </tbody>
                  </table>

                  <div className="upcomingClassesTitle">{moment().add(3, 'days').format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().add(3, 'days').format("MMDDYY")}/>
                    </tbody>
                  </table>

                  <div className="upcomingClassesTitle">{moment().add(4, 'days').format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().add(4, 'days').format("MMDDYY")}/>
                    </tbody>
                  </table>

                  <div className="upcomingClassesTitle">{moment().add(5, 'days').format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().add(5, 'days').format("MMDDYY")}/>
                    </tbody>
                  </table>

                  <div className="upcomingClassesTitle">{moment().add(6, 'days').format("dddd, MMMM Do")}</div>
                  <table className="table table-hover table-sm">
                    <tbody>
                      <UpcomingSchedules userId={this.props.userId} schedules={this.state.schedules} userSignUp={this.userSignUp} userCancel={this.userCancel} tableDate={moment().add(6, 'days').format("MMDDYY")}/>
                    </tbody>
                  </table>
                    
                      
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 upcomingRight">
              <div className="textContainer">
                <div className="textOne"><span id="textBelieve">BELIEVE</span> IN</div>
                <div className="textTwo">YOURSELF</div>
                <div className="textThree">AND <span id="textYou">YOU</span> WILL BE</div>
                <div className="textFour">UNSTOPPABLE</div>
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
        <SignUpModal getSchedules={this.getSchedules} />
        <CancelModal getSchedules={this.getSchedules} />
      </React.Fragment>
    );
  }
}

export default Schedule;
