import React, { Component } from "react";
import moment from "moment";
// import "./index.css";

class BuildSchedule extends Component {

  state = {
    date: "",
    time: "",
    datetime: "",
    class: "",
    trainer: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
    this.convertDate()
  };

  convertDate = () => {
    let datetime = this.state.date+this.state.time;
    let convertedDate = moment(datetime, "YYYY-MM-DDHH:mm").utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.setState({
      datetime: convertedDate
    });
  };
  
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
                      <select className="form-control" name="class" onChange={this.handleInputChange}>
                        <option value={""}></option>
                        {this.props.classes.map(e => <option key={e._id} value={e._id} >{e.title}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Trainer</label>
                      <select className="form-control" name="trainer" onChange={this.handleInputChange}>
                        <option value={""}></option>
                        {this.props.trainers.map(trainer => <option key={trainer._id} value={trainer._id}>{trainer.firstName} {trainer.lastName}</option>)}
                      </select>
                    </div>
                  </div>
                  
                </div>

                <div className="row">
                  <div className="col-sm-4">
                  <button
                    className="btn btn-primary btn-sm"
                    disabled={
                      this.state.date && this.state.time && this.state.class && this.state.trainer ? "" : "disabled"
                    }
                    onClick={this.props.onClick.bind(this, this.state.datetime, this.state.class, this.state.trainer)}
                  >Submit</button>
                  </div>
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