import { useEffect, useRef } from "react";
import "./App.css";
import { config } from "./config";
import routeFeatures from "./res.json";

function App() {
  const { Tmapv3 } = window;
  const mapRef = useRef(null);
  const lineStringArrayRef = useRef([]);
  const polyLineRef = useRef(null);
  const markerRef = useRef(null);
  console.log({ config });
  useEffect(() => {
    // Render only 1 time
    if (!mapRef.current) {
      mapRef.current = new Tmapv3.Map("map", {
        center: new Tmapv3.LatLng(config.center.lat, config.center.lng),
        zoom: 11,
      });
    }
  }, [Tmapv3]);

  // useEffect(() => {
  //   const getRoutes = async () => {
  //     const data = {
  //       startX: config.start.lng,
  //       startY: config.start.lat,
  //       endX: config.end.lng,
  //       endY: config.end.lat,
  //       reqCoordType: "WGS84GEO",
  //       resCoordType: "EPSG3857",
  //     };
  //     const backendResponse = await axios.post(
  //       `${process.env.REACT_APP_TMAP_HITPOINT}/tmap/routes?version=1&format=json`,
  //       data,
  //       {
  //         headers: {
  //           appKey: process.env.REACT_APP_TMAP_APP_KEY,
  //         },
  //       }
  //     );
  //     console.log({ backendResponse });
  //   };
  //   getRoutes();
  // }, []);

  const cleanTMap = () => {
    lineStringArrayRef.current = [];
    if (polyLineRef.current) {
      polyLineRef.current?.setMap(null);
    }
  };

  const { features } = routeFeatures;
  console.log({ features });
  useEffect(() => {
    if (mapRef?.current) {
      features?.forEach((feature) => {
        const { geometry, properties } = feature;
        if (geometry.type === "Point") {
          // Show points
          const latLng = new Tmapv3.Point(
            geometry.coordinates[0],
            geometry.coordinates[1]
          );
          const convertedPoint =
            new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(latLng);

          let icon = "/point.png";
          let iconSize = new Tmapv3.Size(8, 8);
          if (properties.pointType === "S") {
            icon = "/start.png";
            iconSize = new Tmapv3.Size(32, 32);
          } else if (properties.pointType === "E") {
            iconSize = new Tmapv3.Size(32, 32);
            icon = "/end.png";
          }

          setTimeout(() => {
            markerRef.current = new Tmapv3.Marker({
              position: new Tmapv3.LatLng(
                convertedPoint._lat,
                convertedPoint._lng
              ),
              icon,
              iconSize,
              map: mapRef.current,
            });
          }, 2500);
        } else if (geometry.type === "LineString") {
          // Show line string
          for (const i in geometry.coordinates) {
            const latLng = new Tmapv3.Point(
              geometry.coordinates[i][0],
              geometry.coordinates[i][1]
            );
            const convertedPoint =
              new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(latLng);
            lineStringArrayRef.current.push(convertedPoint);
          }
        } else {
          console.log({ msg: "unhandledType", type: geometry?.type });
        }
      });
      console.log({ lineStringArray: lineStringArrayRef.current });
      setTimeout(() => {
        polyLineRef.current = new Tmapv3.Polyline({
          path: lineStringArrayRef.current,
          strokeColor: "#DD0000",
          strokeWeight: 6,
          map: mapRef.current,
        });
      }, 2500);
      return () => cleanTMap();
    }
  }, [features, Tmapv3]);

  return (
    <div className="App">
      <div className="Map" id="map"></div>
    </div>
  );
}

export default App;
