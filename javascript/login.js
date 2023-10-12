
var firebaseConfig = {
  apiKey: "AIzaSyC0WgDPU6Q0bvaH-_Z1o2l53My1FylrTqU",
  authDomain: "ryderreid-server1aus.firebaseapp.com",
  databaseURL: "https://ryderreid-server1aus-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ryderreid-server1aus",
  storageBucket: "ryderreid-server1aus.appspot.com",
  messagingSenderId: "8392851134",
  appId: "1:8392851134:web:48a7a30b703f4f532d68ef"
};
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  
  let signInButton = document.getElementById('login')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("email")
    var password = document.getElementById("password")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "dashboard.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
    //is signed in
  } else {
    //no user signed in
  }
})

let signOutButton = document.getElementById("logout")
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")
  
  auth.signOut()
  alert("Logged Off")
  window.location = "login.html";
})
