$(document).ready(function() {
  moment.locale('es');
  /* creando variables */
  var $textarea = $('#textarea');
  var $post = $('#post');
  $post.prop('disabled', true);
  
  
  /* Desabilitando boton post*/
  $textarea.on('keyup', disableButton);
  function disableButton() {
    var $textLength = $textarea.val().length;
    if ($textLength !== '') {
      $post.prop('disabled', false);  
    }
  }
  $post.on('click', addPost);
  function addPost() {    
    var $time = moment().format('HH:mm');
    var $content = $textarea.val();
    $('section').find('div:first').before('<div class="clearfix newsfeed-contact"><figure class= "col-sm-3"> <img src="../assets/images/profile-user.svg" class="img-circle contact" alt="Profile"></figure><p class="col-sm-9">' + $content + '</p><p class="time">' + $time + '</p></div>');
  }
});