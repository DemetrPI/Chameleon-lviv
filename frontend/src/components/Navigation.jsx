import chameleonMarker from "../assets/chameleons/marker_map.png";
import { Loader } from "@googlemaps/js-api-loader";
import { ApiKey } from "../utils/googleMapAPIKey";
import { useEffect } from "react";
import {Box} from  "@chakra-ui/react";

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

function Map() {

useEffect(() => {
  const loader = new Loader({
    apiKey: ApiKey,
    version: 3.55
  });

  const center = {
    lat: 49.795556361046614,
    lng: 24.051039025841092,
  };

  async function initMap() {
    await loader.load();
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 18,
      mapId: "178b1a54ab040efa",
    });

     const marker = new window.google.maps.Marker({
      map: map,
      position: center,
      icon: chameleonMarker,
    });

    const contentString = `
    <div style="text-align: center;">
      <h1 style="color: green; font-weight: bold;" >Майстерня Хамелеон</h1>
      <p style="font-style: italic; color: red; ">Нове життя ваших речей!</p>
    </div>
  `;


  const infoWindow = new window.google.maps.InfoWindow({ content: contentString });
  
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
  initMap().catch((e) => console.error(e));
}, []);


  return (
    <Box
    style={containerStyle}
    id="map"
  />
  );
}

export default Map;
