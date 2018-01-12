// Initialize Firebase
var config = {
  apiKey: "AIzaSyDSwdy8QBD6nkYB8f52EtJ8MDO18pYVxJ0",
  authDomain: "socialnetwork-be86a.firebaseapp.com",
  databaseURL: "https://socialnetwork-be86a.firebaseio.com",
  projectId: "socialnetwork-be86a",
  storageBucket: "socialnetwork-be86a.appspot.com",
  messagingSenderId: "884615217617"
};
firebase.initializeApp(config);

//Cerrando sesión
$('#logout').on('click', function(event) {
  firebase.auth().signOut().then(function() {
    $(location).attr('href', '../index.html');
  }).catch(function(error) {
    // An error happened.
  });
});
