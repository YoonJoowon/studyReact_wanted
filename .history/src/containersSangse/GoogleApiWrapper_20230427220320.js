import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps';

function GoogleApiWrapper(props) {
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
    
      const center = {
        lat: -3.745,
        lng: -38.523
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        </LoadScript>
      )
}

export default GoogleApiWrapper;