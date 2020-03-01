import React, { Component } from "react";
import moment from "moment";

// moment(res.data[i].datetime, "YYYY-MM-DDTHH:mm:ss.SSSZ").add(res.data[i].class.duration, "minutes")

class UpcomingClass extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <span className="card-title">{this.props.title} {this.props.duration}</span>
            <span className="time-sign-up">
              <div className="time">{moment(this.props.time, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("hh:mm A")}</div>
              <div className="btn btn-primary sign-up-button" id={this.props.id} onClick={this.props.onClick.bind(this, this.props.id)}>Sign-Up</div>
            </span>
            <p className="card-text">{this.props.trainer}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpcomingClass;