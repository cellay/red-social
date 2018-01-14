// Función de inicio
function begin() {
  createPosts();
  pressLike();
  pressUnLike();
  showSectionToSendComment();
  createComments();
}

/* FUNCIÓN PARA CREAR PUBLICACIONES */
function createPosts() {
  // Crear variables para obtener elementos
  var postBtn = $('#post-btn');
  var postSection = $('.photo-post-section');
  // Crear evento de publicar al dar clic en botón
  $(postBtn).on('click', function() {
    // Capturar valor del área de texto
    var postTxtAreaValue = $('#post-txtarea').val();
    // Optener nombre de usuario
    var userName = $('#user-name').text();
    // Crear párrafo para nombre de usuario
    var pUserName = '<div class="row"><p class="col-xs-12 col-sm-12 col-md-12 user-name">' + userName + '</p></div>';
    // Crear párrafo de publicación
    var pPost = '<div class="row"><p class="col-xs-12 col-sm-12 col-md-12">' + postTxtAreaValue + '</p></div>';
    // Crear espacio donde irá imagen a subir
    var picLoad = '<div class="row"><img class="pic-test img-responsive" src="../assets/images/dog-velour.jpg"></div>';
    // Crear espacio donde irá la hora y usar librería para imprimir la hora
    var time = moment().format('HH:mm');
    var timeContainer = '<span class="col-xs-1 col-sm-1 col-md-1">' + time + '</span>';
    // Crear contenedor de íconos
    var iconsWrapper = '<div class="icons-wrapper col-xs-push-1 col-xs-offset-6 col-sm-offset-8 col-sm-3 col-md-offset-8 col-md-3"><a class="heart" href="#"><img src="https://image.flaticon.com/icons/png/128/149/149217.png" alt="heart"></a><a class="colored-heart" href="#" hidden><img src="https://image.flaticon.com/icons/png/128/214/214309.png" alt="colored-heart"></a><a class="comment-bubble" href="#"><img src="../assets/images/chat.svg"></a></div>';
    // Crear espacio para crear comentario
    var commentSide = '<div class="row comment-side-container" hidden><div class="col-xs-12 comment-side"><textarea name="name" class="col-xs-12 post-txtarea" id="comment-txtarea" placeholder="Comentario..."></textarea><button type="button" name="button" id="comment-btn">Comentar</button></div></div>' ;
    // Crear espacio donde se mostrará Comentario
    var commentDisplaySection = '<div class="row"><p class="col-xs-12 col-sm-12 col-md-12 comment-display-section"></p></div>';
    // Crear espacio para agregar publicación con botones de gustar y comentar
    var postWrapper = '<div class="post-wrapper col-xs-12 col-md-12">' + pUserName + pPost + picLoad + '<div class="row">' + timeContainer + iconsWrapper + '</div>' + commentSide + commentDisplaySection + '</div>';
    // Agregar un párrafo de publicacíon que aparecerá en el perfil
    $(postSection).find('div').first().before(postWrapper);
    // Limpiar contenido de textarea después de publicar
    $('#post-txtarea').val('');
    // Llamada de función para dar like
    pressLike();
    // Llamada de función para quitar like
    pressUnLike();
    // Llamada de función para desplegar sección donde se hace comentario
    showSectionToSendComment();
    // Llamada de función para crear comentario
    createComments();
  });
}

/* DESABILITAR BOTÓN */
function disableButton() {
  var postTxtarea = $('#post-txtarea');
  var postBtn = $('#post-btn');
  var textLength = postTxtarea.val().length;
}

/* FUNCIÓN PARA DAR LIKE */
function pressLike() {
  // Crear variables para obtener elementos
  var postContainer = $('.post-container');
  var likeBtn = $('.heart');
  var likeBtnColored = $('.colored-heart');
  // Agregar evento de clic en el botón de dar like
  $(likeBtn).on('click', function() {
    $(likeBtn).hide();
    $(likeBtnColored).show();
    // if ($(this).is(likeBtnColored)) {
    //   $(likeBtn).show();
    //   $(likeBtnColored).hide();
    // }
  });
}

/* FUNCIÓN PARA QUITAR LIKE */
function pressUnLike() {
  // Crear variables para obtener elementos
  var heartsContainer = $('.hearts-container');
  var likeBtn = $('.heart');
  var likeBtnColored = $('.colored-heart');
  // Agregar evento de clic en el botón para quitar like
  $(likeBtnColored).on('click', function() {
    $(likeBtnColored).hide();
    $(likeBtn).show();
  });
}

/* FUNCIÓN PARA MOSTRAR SECCIÓN PARA HACER COMENTARIOS */
function showSectionToSendComment() {
  // Crear variables para obtener elementos
  var commentIcon = $('.comment-bubble');
  var comentSideContainer = $('.comment-side-container');
  $(commentIcon).on('click', function() {
    $(comentSideContainer).toggle();
  });
}

/* FUNCIÓN PARA CREAR COMENTARIOS */
function createComments() {
  // Crear variables para obtener elementos
  var commentBtn = $('#comment-btn');
  var commentDisplaySection = $('.comment-display-section');
  // Crear evento de publicar al dar clic en botón
  $(commentBtn).on('click', function() {
    // Capturar valor del área de texto
    var commentTxtAreaValue = $('#comment-txtarea').val();
    // Crear párrafo de publicación
    var pComment = '<div class"row"><p class="parrapgrah-comment col-xs-12 ">' + commentTxtAreaValue + '</p></p>';
    $(commentDisplaySection).append(pComment);
    $('#comment-txtarea').val('');
  });
}

$(document).ready(begin);
