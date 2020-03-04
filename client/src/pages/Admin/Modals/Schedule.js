import React from "react";
// import "./index.css";

const Schedule = (props) => (
  <React.Fragment>
    <div className="modal fade" id="viewUsers" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">The below clients are signed up for this class</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.users.length === 0 ? (
              <div>No one signed up for this class yet!</div>
            ) : (
              <ol>
                {props.users.map(user => {
                  return <li key={user._id} >{user.firstName + " " + user.lastName}</li>
                  })
                }
              </ol>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
    );

export default Schedule;