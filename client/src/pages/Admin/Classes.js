import React, { Component } from "react";
// import "./index.css";

class Classes extends Component {

  componentDidMount() {
    
  }


  
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h4 className="card-title">Recurring Classes</h4>
            <div className="card-text">
              <div className="row">
                <div className="col-sm-6">
                  <h6>Current Classes</h6>
                </div>
                <div className="col-sm-6">
                  <h6>Add a Class</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Classes;