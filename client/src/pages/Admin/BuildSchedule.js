import React, { Component } from "react";
// import "./index.css";

class BuildSchedule extends Component {

  componentDidMount() {
    
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h4 className="card-title">Build Your Schedule</h4>
            <div className="card-text">
              <div className="row">
                <div className="col-sm-4">
                  <h6>Date and Time</h6>
                </div>
                <div className="col-sm-4">
                  <h6>Class</h6>



                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>




                </div>
                <div className="col-sm-4">
                  <h6>Trainer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BuildSchedule;