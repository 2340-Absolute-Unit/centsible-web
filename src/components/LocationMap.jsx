/* eslint-disable no-undef */

import React from 'react';

import { compose, withProps } from "recompose";

import { GMAPS_API_KEY } from "../config/googleAPI"; 

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'; 

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + GMAPS_API_KEY +  "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 33.841841, lng: -84.386351}}>
    {props.locations && props.locations.map((location) => 
        <InfoBox
        defaultPosition={new google.maps.LatLng(
            location.geopoint.latitude, location.geopoint.longitude)
        }
        options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `4px` }}>
          <div style={{ fontSize: `12px`, fontColor: `#08233B` }}>
            {location.name}, {location.phone}
          </div>
        </div>
      </InfoBox>
    
    )}
    {props.locations && props.isMarkerShown && props.locations.map((location) => 
        <Marker position={{ lat: location.geopoint.latitude, lng: location.geopoint.longitude }} />
    )}
  </GoogleMap>
);

export default MyMapComponent; 