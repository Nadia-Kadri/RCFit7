import React, { Component } from "react";
// import "./index.css";

class BuildSchedule extends Component {

  state = {
    date: "",
    time: "",
    class: "",
    trainer: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
    console.log(this.state)
  };

  handleSelectChange = event => {
    // console.log(event.target.value)
    const { name, id } = event.target;
    this.setState({
      [name]: id
    });
    console.log(this.state)
  };

  componentDidMount() {
    
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h4 className="card-title">Build Your Schedule</h4>
            <div className="card-text">

              <form>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Date</label>
                      <input 
                        type="date"
                        className="form-control"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <input 
                        type="time"
                        className="form-control"
                        name="time"
                        value={this.state.time}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Class</label>
                      <select className="form-control" name="class" value={this.state.class} onChange={this.handleSelectChange}>
                        {this.props.classes.map(e => <option key={e._id} id={e._id}>{e.title}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Trainer</label>
                      <select className="form-control" name="trainer" value={this.state.trainer} onChange={this.handleSelectChange}>
                        {this.props.trainers.map(trainer => <option key={trainer._id} id={trainer._id}>{trainer.firstName} {trainer.lastName}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* <button
                    className="btn btn-primary btn-sm"
                    disabled={
                      this.state.title && this.state.duration ? "" : "disabled"
                    }
                    onClick={this.props.onClick.bind(this, this.state.date, this.state.time, this.state.class, this.state.trainer)}
                  >Submit</button> */}
                  </div>
                </form>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BuildSchedule;