import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCFrmgv1iJYfKyNI3DB1EyXEzBYnRUSbTk&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={20}
    defaultCenter={{ lat: props.lat, lng: props.long }}
  >
    <Marker position={{ lat: props.lat, lng: props.long }} />
  </GoogleMap>
));

export default MyMapComponent;
