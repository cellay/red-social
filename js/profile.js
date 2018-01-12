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
  // console.log(postBtn);
  var postSection = $('.photo-post-section');
  // Crear evento de publicar al dar clic en botón
  $(postBtn).on('click', function() {
    // Capturar valor del área de texto
    var postTxtAreaValue = $('#post-txtarea').val();
    console.log(postTxtAreaValue);
    // Crear párrafo de publicación
    var pPost = '<p>' + postTxtAreaValue + '</p>';
    // Crear espacio donde irá la hora y usar librería para imprimir la hora
    var time = moment().format('HH:mm');
    var timeContainer = '<span class="time-indicator">' + time + '</span>';
    // Crear botones de gustar y comentar
    var likeBtn = '<a class="heart" href="#"><img src="https://image.flaticon.com/icons/png/128/149/149217.png" alt="heart"></a>';
    var likeBtnColored = '<a class="colored-heart" href="#" hidden><img src="https://image.flaticon.com/icons/png/128/214/214309.png" alt="colored-heart"></a>';
    var commentBubble = '<a class="comment-bubble" href="#"><img src="../assets/images/chat.svg"></a>';
    var commentSide = '<div class="comment-side" hidden><textarea name="name" class="center-block post-txtarea" id="comment-txtarea" placeholder="Comentario..."></textarea><button type="button" name="button" id="comment-btn">Comentar</button></div>' ;
    // Crear espacio para agregar publicación con botones de gustar y comentar
    var postContainer = '<div class="post-container">' + pPost + timeContainer + likeBtn + likeBtnColored + commentBubble + commentSide + '</div>';
    // Agregar un párrafo de publicacíon que aparecerá en el perfil
    $(postSection).find('div').first().before(postContainer);
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
  var comentSide = $('.comment-side');
  $(commentIcon).on('click', function() {
    $(comentSide).show();
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
    var pComment = '<p class="parrapgrah-comment">' + commentTxtAreaValue + '</p>';
    $(commentDisplaySection).append(pComment);
  });
}

$(document).ready(begin);
