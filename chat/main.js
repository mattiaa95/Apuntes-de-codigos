$(function() {
  //variables
  var message = $('#chat-message');
  var chat = $('#chat');
  var usuario = prompt("Pon tu nombre", "Harry Potter");


  //persona fisica..............
  $('#message-box').submit(function(e) {
    e.preventDefault();
    if ((message.val() != undefined) && (message.val() != "")) {
      //sockets llamar a fncion

    }

    message.val("");
    message.focus();

  });

  function poner_mensaje(mensaje) {
    chat.append("<p class='a'>" +usuario+": "+mensaje + '</p>');
  };





});
