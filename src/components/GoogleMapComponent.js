import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMapComponent() {
  const [mapCenter, setMapCenter] = useState(center);
  const [markerPosition, setMarkerPosition] = useState(center);
  const [searchBox, setSearchBox] = useState(null);

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    const place = places[0];
    const location = place.geometry.location;
    setMapCenter({ lat: location.lat(), lng: location.lng() });
    setMarkerPosition({ lat: location.lat(), lng: location.lng() });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" libraries={['places']}>
      <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={10}>
        <StandaloneSearchBox onLoad={ref => setSearchBox(ref)} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Search places..."
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </StandaloneSearchBox>
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;