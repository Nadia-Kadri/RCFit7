import React, { Component } from "react";
import Trainer from "./Trainer";
// import "./index.css";

class Trainers extends Component {

  componentDidMount() {
    
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h4 className="card-title">Trainers</h4>
            <div className="card-text">
              <div className="row">
                <div className="col-sm-6">
                  <h6>Current Trainers</h6>
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.trainers.map(trainer => <Trainer key={trainer._id} userId={trainer._id} firstName={trainer.firstName} lastName={trainer.lastName} />)}
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6">
                  <h6>Add a Trainer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Trainers;