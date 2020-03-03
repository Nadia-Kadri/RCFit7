import React, { Component } from "react";

class SignUpModal extends Component {

  render() {
    return (
      <React.Fragment>
        {/* Button trigger modal  */}
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signupmodal">
          Launch demo modal
        </button> */}

        {/* Modal  */}
        <div className="modal fade" id="signupmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">You have successfully signed up!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Get ready to sweat!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpModal;