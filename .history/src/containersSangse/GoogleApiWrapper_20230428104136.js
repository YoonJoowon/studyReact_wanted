// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// class MapContainer extends Component {

//   componentDidUpdate(prevProps) {
//     if (this.props.google && this.props.google !== prevProps.google) {
//       this.forceUpdate();
//     }
//   }

//   render() {
//     const mapStyles = {
//       width: "700px",
//       height: "253px",
//     };
  
//     const containerStyle = {
//       position: "relative",
//       width: "700px",
//       height: "253px",
//     };
  
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         initialCenter={{
//           lat: 37.551374,
//           lng: 126.9740847,
//         }}
//         style={mapStyles}
//         containerStyle={containerStyle}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs'
// })(MapContainer);


// // AIzaSyB9rcCqXG9BR2iXNLRaEXMZOTkU53OhlEs
