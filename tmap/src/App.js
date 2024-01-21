import { useEffect, useRef } from "react";
import "./App.css";
import { config } from "./config";
import routeFeatures from "./res.json";

function App() {
  const { Tmapv3 } = window;
  const mapRef = useRef(null);
  const resultDrawArrRef = useRef([]);
  const checkedTraffic = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      console.log({ config, resultDrawArrRef });
    }, 4500);
  }, []);

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
    if (resultDrawArrRef.current.length) {
      resultDrawArrRef.current?.forEach((draw) => {
        draw?.setMap?.(null);
      });
      resultDrawArrRef.current = [];
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
            const nMarker = new Tmapv3.Marker({
              position: new Tmapv3.LatLng(
                convertedPoint._lat,
                convertedPoint._lng
              ),
              icon,
              iconSize,
              map: mapRef.current,
            });
            resultDrawArrRef.current.push(nMarker);
          }, 2500);
        } else if (geometry.type === "LineString") {
          const lineStringArray = [];
          // Show line string
          for (const i in geometry.coordinates) {
            const latLng = new Tmapv3.Point(
              geometry.coordinates[i][0],
              geometry.coordinates[i][1]
            );
            const convertedPoint =
              new Tmapv3.Projection.convertEPSG3857ToWGS84GEO(latLng);
            lineStringArray.push(convertedPoint);
          }

          const traffic = geometry?.traffic;
          checkedTraffic.current.push(traffic);

          if (checkedTraffic.current.length) {
            let strokeColor = "#06050D";
            if (traffic != "0") {
              if (traffic.length) {
                if (traffic[0][0] != 0) {
                  var trafficObject = {};
                  var tInfo = [];
                  for (var z = 0; z < traffic.length; z++) {
                    trafficObject = {
                      startIndex: traffic[z][0],
                      endIndex: traffic[z][1],
                      trafficIndex: traffic[z][2],
                    };
                    tInfo.push(trafficObject);
                  }
                  var noInfomationPoint = [];
                  for (var p = 0; p < tInfo[0].startIndex; p++) {
                    noInfomationPoint.push(lineStringArray[p]);
                  }
                  console.log({ noInfomationPoint });
                  setTimeout(() => {
                    const nPolyLine = new Tmapv3.Polyline({
                      path: noInfomationPoint,
                      strokeColor: "#06050D",
                      strokeWeight: 6,
                      map: mapRef.current,
                    });
                    resultDrawArrRef.current.push(nPolyLine);
                  }, 2500);
                  for (var x = 0; x < tInfo.length; x++) {
                    var sectionPoint = [];
                    for (
                      var y = tInfo[x].startIndex;
                      y <= tInfo[x].endIndex;
                      y++
                    ) {
                      sectionPoint.push(lineStringArray[y]);
                    }
                    if (tInfo[x].trafficIndex == 0) {
                      strokeColor = "#06050D";
                    } else if (tInfo[x].trafficIndex == 1) {
                      strokeColor = "#61AB25";
                    } else if (tInfo[x].trafficIndex == 2) {
                      strokeColor = "#FFFF00";
                    } else if (tInfo[x].trafficIndex == 3) {
                      strokeColor = "#E87506";
                    } else if (tInfo[x].trafficIndex == 4) {
                      strokeColor = "#D61125";
                    }
                    const n2PolyLine = new Tmapv3.Polyline({
                      path: sectionPoint,
                      strokeColor: strokeColor,
                      strokeWeight: 6,
                      map: mapRef.current,
                    });
                    resultDrawArrRef.current.push(n2PolyLine);
                  }
                } else {
                  var trafficObject = {};
                  var tInfo = [];
                  for (var z = 0; z < traffic.length; z++) {
                    trafficObject = {
                      startIndex: traffic[z][0],
                      endIndex: traffic[z][1],
                      trafficIndex: traffic[z][2],
                    };
                    tInfo.push(trafficObject);
                  }

                  for (var x = 0; x < tInfo.length; x++) {
                    var sectionPoint = [];
                    for (
                      var y = tInfo[x].startIndex;
                      y <= tInfo[x].endIndex;
                      y++
                    ) {
                      sectionPoint.push(lineStringArray[y]);
                    }

                    console.log({ tInfo });
                    console.log({ sectionPoint });

                    if (tInfo[x].trafficIndex == 0) {
                      strokeColor = "#06050D";
                    } else if (tInfo[x].trafficIndex == 1) {
                      strokeColor = "#61AB25";
                    } else if (tInfo[x].trafficIndex == 2) {
                      strokeColor = "#FFFF00";
                    } else if (tInfo[x].trafficIndex == 3) {
                      strokeColor = "#E87506";
                    } else if (tInfo[x].trafficIndex == 4) {
                      strokeColor = "#D61125";
                    }
                    setTimeout(() => {
                      const n3PolyLine = new Tmapv3.Polyline({
                        path: sectionPoint,
                        strokeColor,
                        strokeWeight: 6,
                        map: mapRef.current,
                      });
                      resultDrawArrRef.current.push(n3PolyLine);
                    }, 2500);
                  }
                }
              } else {
                // Working perfectly
                setTimeout(() => {
                  const nPolyLine = new Tmapv3.Polyline({
                    path: lineStringArray,
                    strokeColor: strokeColor,
                    strokeWeight: 6,
                    map: mapRef.current,
                  });
                  resultDrawArrRef.current.push(nPolyLine);
                }, 2500);
              }
            } else {
              console.log({ msg: "unhandledTraffic", traffic });
            }
          } else {
            setTimeout(() => {
              const nPolyLine = new Tmapv3.Polyline({
                path: lineStringArray,
                strokeColor: "#DD0000",
                strokeWeight: 6,
                map: mapRef.current,
              });
              resultDrawArrRef.current.push(nPolyLine);
            }, 2500);
          }
        } else {
          console.log({ msg: "unhandledType", type: geometry?.type });
        }
      });
      // setTimeout(() => {
      //   cleanTMap();
      // }, 5000);
      return () => cleanTMap();
    }
  }, [features]);

  return (
    <div className="App">
      <div className="Map" id="map"></div>
    </div>
  );
}

export default App;
