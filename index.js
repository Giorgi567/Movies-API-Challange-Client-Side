window.addEventListener("DOMContentLoaded", () => {
  var currentDomain = window.location.hostname;
  console.log(currentDomain);
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmgIRJw0Gh3ihy_hE2D9WpY3Xx5VbrmNU",
    authDomain: "movies-api-52dec.firebaseapp.com",
    projectId: "movies-api-52dec",
    storageBucket: "movies-api-52dec.appspot.com",
    messagingSenderId: "552233901863",
    appId: "1:552233901863:web:680360d57cf0d2df069302",
    measurementId: "G-W40J023F1Y",
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
});
