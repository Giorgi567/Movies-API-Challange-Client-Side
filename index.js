const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmgIRJw0Gh3ihy_hE2D9WpY3Xx5VbrmNU",
  authDomain: "movies-api-52dec.firebaseapp.com",
  projectId: "movies-api-52dec",
  storageBucket: "movies-api-52dec.appspot.com",
  messagingSenderId: "552233901863",
  appId: "1:552233901863:web:680360d57cf0d2df069302",
  measurementId: "G-W40J023F1Y",
});
document.addEventListener("DOMContentLoaded", function () {
  const auth = firebaseApp.auth();
  const emailInput = document.querySelector(".email-input");
  const passwordInput = document.querySelector(".password-input");
  const loginButton = document.querySelector(".form-btn");

  const login = () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };

  const forgotPassword = async () => {
    const email = resetPasswordinput.value;
    console.log(email);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  loginButton.addEventListener("click", () => {
    console.log("Inside click event");
    login();
  });


});
