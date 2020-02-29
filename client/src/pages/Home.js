import React from "react";

function Home({logout}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }} className="jumbotron">
            <h1>Welcome to the Home Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
