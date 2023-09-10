import { useEffect } from "react";
import firebase from "./firebase";
import { getMessaging, getToken } from "firebase/messaging";

const App = () => {
  useEffect(() => {
    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey: process.env.REACT_APP_FIREBASE_MESSAGING_VAPID_KEY,
    })
      .then((token) => {
        console.log({ token });
      })
      .catch((e) => {
        console.log({ e });
      });
  }, []);
  return <div></div>;
};

export default App;
