import React, { Component } from "react";
import Class from "./Class";
// import "./index.css";

class Classes extends Component {

  state = {
    title: "",
    duration: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
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
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.classes.map(e => 
                        <Class 
                          key={e._id} 
                          id={e._id} 
                          title={e.title} 
                          duration={e.duration} 
                          onClickDelete={e.onClickDelete} 
                        />)}
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6">
                  <h6>Add a Class</h6>
                  <form>
                    <div className="form-group">
                      <label>Class Title</label>
                      <input 
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Ex. HIIT Burn"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Duration</label>
                      <input 
                        type="text"
                        className="form-control"
                        name="duration"
                        placeholder="Minutes"
                        value={this.state.duration}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-sm"
                      disabled={
                        this.state.title && this.state.duration ? "" : "disabled"
                      }
                      onClick={this.props.onClickAdd.bind(this, this.state.title, this.state.duration)}
                    >Submit</button>
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

export default Classes;