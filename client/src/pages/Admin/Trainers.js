import React, { Component } from "react";
import Trainer from "./Trainer";
// import "./index.css";

class Trainers extends Component {

  state = {
    email: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
  };

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
                <div className="col-sm-6" style={{height: "250px", overflowY: "scroll"}}>
                  <h6>Current Trainers</h6>
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.trainers.map(trainer => 
                        <Trainer 
                          key={trainer._id} 
                          id={trainer._id} 
                          firstName={trainer.firstName} 
                          lastName={trainer.lastName}
                          onClickDelete={this.props.onClickDelete} 
                        />)
                      }
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6">
                  <h6>Add a Trainer</h6>
                  <form>
                    <div className="form-group">
                      <label>Enter the email of the person you'd like to make a trainer</label>
                      <input 
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="johnsmith@gmail.com"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <small>Is the Trainer not adding to the list on the left when you click "Add Trainer"? Make sure they're registered with the correct email!</small><br/>
                    <button
                      className="btn btn-primary btn-sm"
                      disabled={
                        this.state.email ? "" : "disabled"
                      }
                      onClick={this.props.onClickAdd.bind(this, this.state.email)}
                    >Add Trainer</button>
                  </form>
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