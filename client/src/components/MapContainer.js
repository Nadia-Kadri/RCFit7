import React, { Fragment } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";

// console.log(getMapAPI());

// const key = getMapAPI().catch(err => {
//   if (err) throw err;
// });
// console.log(key);

const MapContainer = ({ google }) => {
  const getMapAPI = async () => {
    try {
      const map_api = await axios.get("/api/googleapikey");
      console.log(map_api);
      return map_api.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(getMapAPI());

  return (
    <Fragment>
      <Map
        google={google}
        className={"map"}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 28.32639, lng: -81.526698 }}
      >
        <Marker
          position={{ lat: 28.32639, lng: -81.526698 }}
          name={"RCFIT 7: Celebration Family Fitness Bootcamp"}
        />
      </Map>
    </Fragment>
  );
};

const mapStyles = {
  position: "absolute",
  height: "50%",
  width: "50%",
  marginRight: 0,
  // padding: "100px",
  alignContent: "center",
  overflow: "hidden",
  zIndex: "-1"
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_APIKEY
})(MapContainer);
