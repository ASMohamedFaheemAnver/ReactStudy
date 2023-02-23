import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({ center, zoom, eventData }) => {
  const markers = eventData
    .filter((event) => event?.categories[0]?.id === 8)
    .map((event) => {
      return {
        id: event.id,
        lat: event.geometries[0].coordinates[1],
        lng: event.geometries[0].coordinates[0],
      };
    });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          libraries: ["visualization"],
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        heatmap={{
          positions: markers,
          options: {
            radius: 20,
            opacity: 1,
          },
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          new maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.3,
            map,
            center: center,
            radius: 800000,
          });
          const triangleCoords = [
            { lat: 25.774, lng: -80.19 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            { lat: 38.321, lng: -68.757 },
          ];
          const polygon = new maps.Polygon({
            paths: triangleCoords,
            strokeColor: "blue",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "blue",
            fillOpacity: 0.35,
            map,
          });
          maps.event.addListener(polygon, "click", function (event) {
            console.log({ event });
          });
        }}
        onChange={(value) => {
          console.log({ value });
        }}
      >
        {/* {markers.map((marker) => {
          return <Marker key={marker.id} lat={marker.lat} lng={marker.lng} />;
        })} */}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 0, lng: 0 },
  zoom: 1,
};

export default Map;
