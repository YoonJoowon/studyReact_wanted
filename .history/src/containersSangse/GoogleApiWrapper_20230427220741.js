import React from 'react';
import GoogleMapReact from 'google-map-react';

function GoogleApiWrapper(props) {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          />
        </div>
      )
}

export default GoogleApiWrapper;

// AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs