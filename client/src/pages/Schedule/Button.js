import React, { Component } from "react";

class Button extends Component {

  state = {
    signedUp: false
  }

  componentDidMount() {
    this.isSignedUp()
  }

  isSignedUp = () => {
    const found = this.props.users.some(user => user === this.props.userId)
    
    // console.log(this.props.users)
    // console.log(this.props.userId)
    if (found) {
      this.setState({ signedUp: true })
    } else {
      this.setState({ signedUp: false })
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.signedUp ? (
          <div className="btn btn-warning sign-up-button" id={this.props.id} onClick={this.props.onClickCancel.bind(this, this.props.id)}>Cancel</div>
          ) : (
          <div className="btn btn-primary sign-up-button" id={this.props.id} onClick={this.props.onClickSignUp.bind(this, this.props.id)}>Sign-Up</div>
          )
        }
      </React.Fragment>
    );
  }
}

export default Button;