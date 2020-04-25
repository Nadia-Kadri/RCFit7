import React from "react";

const Button = (props) => (
  <React.Fragment>
    {!props.userId ? (
      <div className="btn btn-primary sign-up-button" data-toggle="modal" data-target="#loginmodal" id={props.id}>Sign-Up</div>
    ) : (
      props.isSignedUp ? (
        <div className="btn btn-warning sign-up-button" data-toggle="modal" data-target="#cancelmodal" id={props.id} onClick={() => props.userCancel(props.id)}>Cancel</div>
        ) : (
        <div className="btn btn-primary sign-up-button" data-toggle="modal" data-target="#signupmodal" id={props.id} onClick={() => props.userSignUp(props.id)}>Sign-Up</div>
        )
    )
    }
  </React.Fragment>
);

export default Button;