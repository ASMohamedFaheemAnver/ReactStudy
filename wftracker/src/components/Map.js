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
        // heatmap={{
        //   positions: markers,
        //   options: {
        //     radius: 20,
        //     opacity: 1,
        //   },
        // }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) =>
          new maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.3,
            map,
            center: center,
            radius: 800000,
          })
        }
      >
        {markers.map((marker) => {
          return <Marker key={marker.id} lat={marker.lat} lng={marker.lng} />;
        })}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 0, lng: 0 },
  zoom: 1,
};

export default Map;
