import { useEffect, useState } from "react";
import Map from "./components/Map";
import loadingIcon from "@iconify/icons-mdi/3d-rotation";
import { Icon } from "@iconify/react";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    } catch (e) {
      console.log({ e });
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  console.log({ eventData, loading });

  return (
    <div>
      {!loading ? <Map eventData={eventData} /> : <Icon icon={loadingIcon} />}
    </div>
  );
}

export default App;
