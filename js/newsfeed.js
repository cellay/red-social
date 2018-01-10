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
    $('section').find('div:first').before('<div class="clearfix newsfeed-contact"><figure class= "col-xs-3 col-sm-2"> <img src="../assets/images/profile-user.svg" class="img-circle contact" alt="Profile"></figure><h4 class="col-xs-2 col-sm-2">name</h4><span class="follow add-contact"><img src="../assets/images/addcontact.svg" alt="followers" class="icon-follow"></span><p class="col-xs-9 col-sm-10">' + $content + '</p><p class="time col-sm-offset-2 col-sm-1">' + $time + '</p><div class="icons"><span class="start-chat"><img src="../assets/images/chat.svg" alt="chat"></span><span><img src="../assets/images/heart.svg" alt="followers"></span></div></div>');
    createComment();
    addComments();
  }
  showSectionToSendComment();
  showSectionToSendComment2();
  addComments();

  /* FUNCIÓN PARA HACER COMENTARIOS */
  function createComment() {
    var $startChat = $('.start-chat');
    if ($startChat) {
      $('section').find('div:first').append('<div class="comment-area3 comments" hidden><textarea id="comment-txtarea" placeholder="Comentario..."></textarea><button type="button" name="button" class="btn-coments" id="comment-btn">Comentar</button></div><div class= "comment-display-section"></div>');  
      $startChat.on('click', function() {
        $('.comment-area3').toggle(); 
      });
    }
  }
  function showSectionToSendComment() {
    // Crear variables para obtener elementos
    var commentIcon = $('.comment1');
    var comentArea = $('.comment-area');
    $(commentIcon).on('click', function() {
      $(comentArea).toggle();
    });
  };
  function showSectionToSendComment2() {
    // Crear variables para obtener elementos
    var commentIcon2 = $('.comment2');
    var comentArea2 = $('.comment-area2');
     
    $(commentIcon2).on('click', function() {
      $(comentArea2).toggle();
    });
  };

  /* FUNCIÓN PARA CREAR COMENTARIOS */
  function addComments() {
  // Crear variables para obtener elementos
    var commentBtn = $('#comment-btn');
    var commentDisplaySection = $('.comment-display-section');
    // Crear evento de publicar al dar clic en botón
    $(commentBtn).on('click', function() {
      var commentTxtAreaValue = $('#comment-txtarea').val();
      // Crear párrafo de publicación
      var pComment = '<p class="parapgrah-comment">' + commentTxtAreaValue + '</p>';
      $(commentDisplaySection).append(pComment);
    });
  } 
});