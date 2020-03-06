import React from "react";
import moduleName from "../images/exercise.jpg";
import image from "../images/meghan-holmes-wy_L8W0zcpI-unsplash.jpg";
import image2 from "../images/bruce-mars-ZXq7xoo98b0-unsplash.jpg";
import image3 from "../images/adult-cutting-daylight-facial-expression-1153369.jpg";
import SVG2 from "../components/SVG2";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          style={{
            height: 500,
            // clear: "both",
            textAlign: "center",
            backgroundImage: `url(${moduleName})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            paddingTop: "60px",
            backgroundPosition: "center center",
            overflow: "hidden",
            position: "relative"
          }}
        ></section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12"></div>
          </div>
          <div className="row justify-content-end m-4">
            <h2>WHAT RC FIT IS ABOUT</h2>
          </div>

          <section style={{ padding: "0px 0px 10px 0px" }}>
            <div className="image-w-content">
              <div className="icon">
                <SVG2 />
              </div>
              <div className="images"></div>
              <div className="cont-about"></div>
            </div>
          </section>
          <div className="row m-5 justify-content-end">
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
                    <h5 className="card-title">Motivation</h5>
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

          <div className="row m-5 justify-content-start">
            <div className="card mb-3" style={{ maxwidth: "100%" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={image2}
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
                      version of ourselves and that is at the core of our
                      culture.
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
                    src={image3}
                    className="card-img"
                    alt="Girls Doing Box Jumps"
                  />
                </div>
                <div className="col-sm">
                  <div className="card-body">
                    <h5 className="card-title">Lifestyle</h5>
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
