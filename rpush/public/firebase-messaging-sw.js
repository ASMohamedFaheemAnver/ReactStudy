importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);
importScripts(`${location.origin}/config.js`);

// firebase-cloud-messaging-push-scope requiring this automatically so we don't need to register this file at all, we just need to initialize firebase.
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register(`firebase-messaging-sw.js`)
//     .then(function (registration) {})
//     .catch(function (err) {});
// }
firebase.initializeApp(config);
const initMessaging = firebase.messaging();
