importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyCFwxpZWrPFKGM-Xxex6l7HxZnkazS5kos",
  authDomain: "jadwalbib.firebaseapp.com",
  projectId: "jadwalbib",
  storageBucket: "jadwalbib.firebasestorage.app",
  messagingSenderId: "889313937829",
  appId: "1:889313937829:web:d2b78818c020ecfefe404c"
  });
  const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});