importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// firebase-cloud-messaging-push-scope requiring this automatically so we don't need to register this file at all, we just need to initialize firebase.
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register(`firebase-messaging-sw.js`)
//     .then(function (registration) {})
//     .catch(function (err) {});
// }
firebase.initializeApp({
  apiKey: "AIzaSyCidBU0K5ujoAeJqVFYem3r4SdDp5AfXQc",
  authDomain: "codersauthoritystudy.firebaseapp.com",
  projectId: "codersauthoritystudy",
  storageBucket: "codersauthoritystudy.appspot.com",
  messagingSenderId: "407357514835",
  appId: "1:407357514835:web:cf99717c5cef6319b612a6",
  measurementId: "G-RERN94TGD1",
});
const initMessaging = firebase.messaging();
