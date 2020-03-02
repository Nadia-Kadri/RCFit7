import React, { Component } from "react";
// import "./index.css";

class UserProfile extends Component {
  
  render() {
    return (
      <React.Fragment>
        <h1>User Profile Page</h1>
        <div className="custContainer">
          <div className="row">
            <div className="col-sm-6">
              column 1
            </div>
            <div className="col-sm-6">
              column 2
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;