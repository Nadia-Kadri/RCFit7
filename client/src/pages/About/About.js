import React from "react";
import { name, image1 } from "../../media";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center m-4">
          <h3>WHAT RC FIT IS ABOUT</h3>
        </div>

        <div className="row m-5 justify-content-end">
          <div className="card mb-3" style={{ maxwidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={image1} className="card-img" alt={name} />
              </div>
              <div className="col-sm">
                <div className="card-body">
                  <h5 className="card-title">Motivation</h5>
                  <p className="card-text">
                    RC Fit 7 is about lifting each other up and not letting each
                    other down no matter how hard the circumstances get,
                    motivating each other by leaving no one behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5 justify-content-start">
          <div className="card mb-3" style={{ maxwidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="../public/images/meghan-holmes-wy_L8W0zcpI-unsplash.jpg"
                  className="card-img"
                  alt="Girls Doing Box Jumps"
                />
              </div>
              <div className="col-sm">
                <div className="card-body">
                  <h5 className="card-title">Culture</h5>
                  <p className="card-text">
                    Here at RC Fit 7 we are all about being a family. We are a
                    community of individuals who are striving to be the best
                    version of ourselves and that is at the core of our culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5 justify-content-center">
          <div className="card mb-3" style={{ maxwidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="../public/images/meghan-holmes-wy_L8W0zcpI-unsplash.jpg"
                  className="card-img"
                  alt="Girls Doing Box Jumps"
                />
              </div>
              <div className="col-sm">
                <div className="card-body">
                  <h5 className="card-title">Lifestyle</h5>
                  <p className="card-text">
                    We offers a great way for all people to connect and grow
                    together as a community through fitness, nutrition, and life
                    coaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-sm">Culture</div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm">Lifestyle</div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
