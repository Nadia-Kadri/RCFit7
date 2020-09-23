import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import mov from "../images/ladderdrill.mp4";
import "./hero-vid.css";
// import SideBox from "../components/Sidebox";

const Home = ({ logout }) => {
  return (
    <Fragment>
      <header className="v-header cont">
        <div className="fullscreen-video-wrap">
          <video
            src={mov}
            autoPlay={true}
            loop={true}
            playsInline
            muted
          ></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h3 className="text-center">LIFT EACH OTHER UP</h3>
          <Link className="header-link" to="/schedule">
            <span>
              <button className="btn button-style">
                START YOUR JOURNEY HERE
              </button>
            </span>
          </Link>
        </div>

        <div className="container wrap">
          <div className="row split">
            <div className="col-sm-6">
              <div className="row no-gutters  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="card" style={{ width: "40rem" }}>
                  <div className="card-body text-center text_style">
                    <h5 className="card-title ">Schedule Your First Class</h5>

                    <p className="card-text ">
                      Take the first step in the right direction of your fitness
                      journey with a certified trainer.
                    </p>
                    <Link to="/schedule">Class Schedule</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="row no-gutters  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="card" style={{ width: "40rem" }}>
                  <div className="card-body text-center text_style">
                    <h5 className="card-title">Sign-Up / Register</h5>
                    <p className="card-text">
                      Create an account to keep track of all of your classes and
                      track your fitness goals.
                    </p>
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Home;
