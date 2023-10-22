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

console.log(`sss`);

const login = () => {
  const email = document.querySelector(".email-input").value; // Use querySelector instead of getElementsByClassName
  const password = document.querySelector(".password-input").value; // Use querySelector instead of getElementsByClassName

  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const btn = document.querySelector(".form-btn"); // Use querySelector instead of getElementsByClassName

btn.addEventListener("click", () => {
  console.log(`inside`);
  login();
});
