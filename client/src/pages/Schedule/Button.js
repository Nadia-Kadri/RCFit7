import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isSignedUp ? (
          <div className="btn btn-warning sign-up-button" id={this.props.id} onClick={this.props.onClickCancel.bind(this, this.props.id)}>Cancel</div>
          ) : (
          <div className="btn btn-primary sign-up-button" data-toggle="modal" data-target="#signupmodal" id={this.props.id} onClick={this.props.onClickSignUp.bind(this, this.props.id)}>Sign-Up</div>
          )
        }
      </React.Fragment>
    );
  }
}

export default Button;