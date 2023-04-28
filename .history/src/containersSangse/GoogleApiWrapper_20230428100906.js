import { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const [state, setState] = useState({
    map: null,
    maps: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker, e) => {
    setState((prevState) => ({
      ...prevState,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    }));
  };

  const onMapClicked = (props) => {
    if (state.showingInfoWindow) {
      setState((prevState) => ({
        ...prevState,
        showingInfoWindow: false,
        activeMarker: null,
      }));
    }
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.551374,
        lng: 126.9740847,
      }}
      onClick={onMapClicked}
    >
      <Marker
        onClick={onMarkerClick}
        name={'Your location'}
        position={{ lat: 37.551374, lng: 126.9740847 }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs',
})(MapContainer);

// AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs