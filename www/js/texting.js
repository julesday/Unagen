var chat = "<span class='message'><b>Translator:</b> Hi, My name is Aaron, How may I help you? Please state your goal for this session. Hola, Mi nombre es Aaron, ¿En qué puedo ayudarle? Por favor, indique su objetivo para esta sesión.</span>";
var responses = {
  "hello": "How can I help you?",
  "I need a translation" : "No problem"
};


$(document).ready(function () {
  $("#chatbox").html(chat);
//If user submits the form
  $("#submitMsg").click(function () {
    var clientMsg = $('#userMsg').val();
    if (clientMsg !== "") {
      $('#userMsg').val("");
      var me = "<span><b>Me</b>: </span>";
      var trans = "<span><b>Translator</b>: </span>";
      chat += "<br>";
      chat += "<span class='message'>" + me + clientMsg + "</span>";
      switch (clientMsg) {

        case "hello":
          chat += "<br>"
          chat += "<span class='message'>" + trans + "¿Hola, como puedo ayudarte?</span>";
          break;
        case "Hello":
          chat += "<br>"
          chat += "<span class='message'>" + trans + "¿Hola, como puedo ayudarte?</span>";
          break;
        case "hi":
          chat += "<br>"
          chat += "<span class='message'>" + trans + "¿Hola, como puedo ayudarte?</span>";
          break;
        case "Hi":
          chat += "<br>"
          chat += "<span class='message'>" + trans + "¿Hola, como puedo ayudarte?</span>";
          break;
        case "no":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Está bien, su sesión ha terminado. Your session is now over"
          break;
        case "No":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Está bien, su sesión ha terminado. Your session is now over"
          break;
        case "no, gracias":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Está bien, su sesión ha terminado. Your session is now over"
          break;
        case "No, gracias":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Está bien, su sesión ha terminado. Your session is now over"
          break;
        case "si":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "¿Qué más puedo ayudarle?"
          break;
        case "Si":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "¿Qué más puedo ayudarle?"
          break;

        default:
          chat += "<br>";
          chat += "<span class='message'>" + trans + "break a leg es una frase común que se utiliza en los Estados Unidos que significa buena suerte. ¿Hay algo más en lo que pueda ayudar?</span>";
          break;
      }

      $("#chatbox").html(chat);
    }
  });

});


function add(text){
    var TheTextBox = document.getElementById("userMsg");
    TheTextBox.value = TheTextBox.value + text;
}