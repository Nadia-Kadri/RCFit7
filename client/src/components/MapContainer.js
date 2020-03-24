import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: 28.32639, lng: -81.526698 }}
        >
          <Marker position={{ lat: 28.32639, lng: -81.526698 }} />
        </Map>
      </React.Fragment>
    );
  }
}

const mapStyles = {
  position: "relative",
  height: "50%",
  width: "90%",
  marginTop: 30,
  alignContent: "center",
  overflow: "hidden"
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnlfFcbhDSk7jZt-1W1tQX7xdl4FLo2uA"
})(MapContainer);
