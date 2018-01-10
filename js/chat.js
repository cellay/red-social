// Función de inicio
function begin() {
  chatInteraction();
}

// Función de chat
function chatInteraction() {
  // Crear variables para obtener elementos
  var textName = $('#name');
  var textMessage = $('#message');
  var sendBtn = $('#send-btn');
  var msgList = $('#msg-list');
  // console.log(textName);
  // console.log(textMessage);
  // console.log(sendBtn);


  $(sendBtn).on('click', function() {
    var userName = $(textName).val();
    var userMessage = $(textMessage).val();
    /* ESTO DEBE DESAPARECER */
    var msgInHtml = '<li><b>' + userName + ': ' + '</b>' + userMessage + '</li>';
    // Agregar estructura HTML a lista no ordenada (área de mensajes)
    $(msgList).append(msgInHtml);

    firebase.database().ref('chat').push({
      name: userName,
      message: userMessage
    });
  });
}

firebase.database().ref('chat').on('value', function(snapshot) {
  var msgInHtml = '';
  var msgList = $('#msg-list');
  snapshot.forEach(function(e) {
    var element = e.val();
    var userName = element.name;
    var userMessage = element.message;
    msgInHtml += '<li><b>' + userName + ': ' + '</b>' + userMessage + '</li>';
  });
  // Agregar estructura HTML a lista no ordenada (área de mensajes)
  $(msgList).append(msgInHtml);
});

$(document).ready(begin);
