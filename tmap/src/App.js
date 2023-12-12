import { useEffect, useRef } from "react";
import "./App.css";
import { config } from "./config";
import routeFeatures from "./res.json";

function App() {
  const { Tmapv3 } = window;
  const mapRef = useRef(null);
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

  return (
    <div className="App">
      <div className="Map" id="map"></div>
    </div>
  );
}

export default App;
