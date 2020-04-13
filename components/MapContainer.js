import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const defaultProps = {
  center: {
    lat: -29.95,
    lng: -52.33
  },
  zoom: 7
};

export class MapContainer extends Component {
  constructor(props){
      super(props)
  }

  displayMarkers = () => {
    return this.props.checkins.map( checkin => {
      return <Marker 
                lat={checkin.coords.lat} 
                lng={checkin.coords.long} 
                text={checkin.status} 
              />
    })
  }
  
  render(){
    return (
      <GoogleMapReact 
      bootstrapURLKeys={{
        key: "AIzaSyA5-Epvqlzd6_rGDq4PQe6bx6AWbS0DBqU",
        language: "pt-br"
      }}
      defaultCenter={defaultProps.center} 
      defaultZoom={defaultProps.zoom}
      >
        {this.displayMarkers()}
      </GoogleMapReact>
    );
  }
}