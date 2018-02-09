import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const maps = (props) => {
  const initCenter = { lat: -6.9261321, lng: 107.7724994 }
  return <GoogleMap
    defaultZoom={18}
    defaultCenter={props.currCenter || initCenter}
  >
    {props.isMarkerShown && <Marker position={props.currCenter || initCenter} />}
  </GoogleMap>
}

export default withScriptjs(withGoogleMap(maps));