import React, { Component } from "react";
import Button from "./Button";
import moment from "moment";

class UpcomingSchedule extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <span className="card-title">{this.props.title} {this.props.duration}</span>
            <span className="time-sign-up">
              <div className="time">{moment(this.props.datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("dddd h:mmA")}</div>
              <Button 
                id={this.props.id} 
                users={this.props.users}
                userId={this.props.userId}
                isSignedUp={this.props.isSignedUp}
                onClickSignUp={this.props.onClickSignUp}
                onClickCancel={this.props.onClickCancel}
              />
            </span>
            <p className="card-text">{this.props.trainer}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpcomingSchedule;