import React, { Component } from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps';

const containerStyle = {
  width: "700px",
  height: "253px",
};

function GoogleApiWrapper({ apiKey }) {
  const center = {
    lat: 37.5665, // 서울 위도
    lng: 126.9780, // 서울 경도
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      />
    </LoadScript>
  );
}

export default GoogleApiWrapper;
// AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs
