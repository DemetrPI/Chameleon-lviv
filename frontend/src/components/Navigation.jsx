import React from 'react'
import { ApiKey } from '../utils/googleMapAPIKey';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '75vh',
  border: "1px solid green",
  position:"relative",
  marginTop:"5rem",
  borderRadius: "5%",
};

const center = {
  address: "м.Львів, вул. Хоткевича, буд. 6, кв. 84",
  lat: 49.795556361046614,
  lng: 24.051039025841092
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ApiKey
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
       >
       
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map
