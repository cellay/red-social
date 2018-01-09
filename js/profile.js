// Función de inicio
function begin() {
  createPosts();
  pressLike();
}

function createPosts() {
  // Crear variables para obtener elementos
  var postBtn = $('#post-btn');
  console.log(postBtn);
  var postSection = $('.photo-post-section');
  // Crear evento de publicar al dar clic en botón
  $(postBtn).on('click', function() {
    // Capturar valor del área de texto
    var postTxtAreaValue = $('#post-txtarea').val();
    console.log(postTxtAreaValue);
    // Crear párrafo de publicación
    var pPost = '<p class="center-block">' + postTxtAreaValue + '</p>';
    // crear botones de gustar y comentar
    var likeBtn = '<a class="heart" href="#"><img src="https://image.flaticon.com/icons/png/128/149/149217.png" alt="heart"></a>';
    var likeBtnColored = '<a class="colored-heart" href="#" hidden><img src="https://image.flaticon.com/icons/png/128/214/214309.png" alt="colored-heart"></a>';
    var commentBtn = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Comentar</button>' ;
    // Crear espacio para agregar publicación con botones de gustar y comentar
    var postContainer = '<div>' + pPost + likeBtn + likeBtnColored + commentBtn + '</div>';
    // Agregar un párrafo de publicacíon que aparecerá en el perfil
    $(postSection).find('div').first().before(postContainer);
  });
}

function pressLike() {
  var heartsContainer = $('.hearts-container');
  var likeBtn = $('.heart');
  var likeBtnColored = $('.colored-heart');
  $(likeBtn).on('click', function() {
    $(likeBtn).hide();
    $(likeBtnColored).show();
    if ($(this).is(likeBtnColored)) {
      $(likeBtn).show();
      $(likeBtnColored).hide();
    }
  });
}

$(document).ready(begin);
