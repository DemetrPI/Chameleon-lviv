import { GoogleMap,} from '@react-google-maps/api';

const containerStyle = {
  width: "80%",
  height: "75vh",
  border: "1px solid green",
  position: "relative",
  marginTop:"1rem",
  marginRight: "auto",
  marginLeft: "auto", 
  borderRadius: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const center = {
  lat: 49.795556361046614,
  lng: 24.051039025841092,
};

function Map() {
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} />
  );
}

export default Map;