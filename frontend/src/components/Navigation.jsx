import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { ApiKey } from "../utils/googleMapAPIKey";

const containerStyle = {
  width: "80%",
  height: "75vh",
  border: "1px solid green",
  position: "relative",
  marginTop: "1rem",
  marginRight: "auto",
  marginLeft: "auto",
  borderRadius: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 49.795556361046614, lng: 24.051039025841092 }),
    []
  );

  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          mapId={"mapId"}
        >
          <Marker position={{
            lat:49.79555636104661,
            lng: 24.051039025841092

          }}
          icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;


