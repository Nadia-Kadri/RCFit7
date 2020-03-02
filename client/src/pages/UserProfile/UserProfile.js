import React, { Component } from "react";
// import "./index.css";

class UserProfile extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="custContainer">
          <div className="row">
            <div className="col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2>Welcome Nadia(make dynamic)!</h2>
              <p>This is your protected User Profile Page that only you have access to. On this page you can view and update your personal information, see what classes you're signed up for, and edit your membership status. Scroll down to get started!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h4>Personal Information</h4>
              <p>Name, email, date of birth, etc.</p>
            </div>
            <div className="col-sm-6">
              <h4>Membership</h4>
              <p>Membership plan and membership status</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h4>Your classes</h4>
              <p>Navigate to schedule page to cancel???</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;