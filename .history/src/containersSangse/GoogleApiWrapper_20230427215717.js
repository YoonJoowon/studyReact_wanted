import React from 'react';

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
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        </LoadScript>
}

export default GoogleApiWrapper;