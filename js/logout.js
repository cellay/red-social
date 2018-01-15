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

var dataImage= firebase.database().ref('imagePost');

  $('#file').on('change', function() {
      if(this.files&&this.files[0]) {
          var watcher = new FileReader();
          watcher.onload = function(e) {
            dataImage.push({
                url:e.target.result,
            });

            $('.photo-post-section').append('<img class = "uploadImg" style="height:auto;width:400px" src="" alt="">');
            $('.uploadImg').attr('src', e.target.result);
          };
          watcher.readAsDataURL(this.files[0])
      }
  })
