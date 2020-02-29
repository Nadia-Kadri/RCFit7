import React from "react";

class Membership extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center my-4">Membership Options</h3>

        <div className="card-deck text-center my-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">BASE PLAN</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <button className="btn btn-outline-dark btn-sm">
              Click here for BASE PACKAGE
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PREMIUM PLAN</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <button className="btn btn-outline-dark btn-sm">
              Click here for PREMIUM PACKAGE
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ULTIMATE PLAN</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <button className="btn btn-outline-dark btn-sm">
              Click here for ULTIMATE PACKAGE
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Membership;
