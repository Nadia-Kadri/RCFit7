import React, { Component } from "react";

class UpcomingClass extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <span className="card-title">{this.props.title} {this.props.duration}</span>
            <span className="btn btn-primary sign-up-button" id={this.props.id} onClick={this.props.onClick.bind(this, this.props.id)}>Sign-Up</span>
            <p className="card-text">{this.props.trainer}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpcomingClass;