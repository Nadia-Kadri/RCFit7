import React from "react";
import image from "../../images/meghan-holmes-wy_L8W0zcpI-unsplash.jpg";
import image2 from "../../images/bruce-mars-ZXq7xoo98b0-unsplash.jpg";
import image3 from "../../images/adult-cutting-daylight-facial-expression-1153369.jpg";
// import SVG2 from "../../components/SVG2";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead">
          <div className="container h-100"></div>
        </header>

        <div className="masthead-text">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12" id="masthead-text-margin">
                <h1 className="float-right">WHAT RC FIT IS ABOUT</h1>
              </div>
            </div>
          </div>  
        </div>

        <div className="container-fluid">

          <div className="row justify-content-end">
            <div className="card mb-3" style={{ maxwidth: "100%" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={image}
                    className="card-img"
                    alt="Girls doing box jumps"
                  />
                </div>
                <div className="col-sm">
                  <div className="card-body">
                    <h4 className="card-title">Motivation</h4>
                    <p className="card-text">
                      RC Fit 7 is about lifting each other up and not letting
                      each other down no matter how hard the circumstances get,
                      motivating each other by leaving no one behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="card mb-3" style={{ maxwidth: "100%" }}>
              <div className="row no-gutters">
                <div className="col-sm">
                  <div className="card-body">
                    <h4 className="card-title">Culture</h4>
                    <p className="card-text">
                      Here at RC Fit 7 we are all about being a family. We are a
                      community of individuals who are striving to be the best
                      version of ourselves and that is at the core of our
                      culture.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src={image2}
                    className="card-img"
                    alt="Girls Doing Box Jumps"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="card mb-3" style={{ maxwidth: "100%" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={image3}
                    className="card-img"
                    alt="Girls Doing Box Jumps"
                  />
                </div>
                <div className="col-sm">
                  <div className="card-body">
                    <h4 className="card-title">Lifestyle</h4>
                    <p className="card-text">
                      We offers a great way for all people to connect and grow
                      together as a community through fitness, nutrition, and
                      life coaching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
