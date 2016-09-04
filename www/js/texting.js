var chat = "<span class='message'><b>Translator:</b> Hi, My name is Aaron, How may I help you? Please state your goal for this session.</span>";
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
          chat += "<span class='message'>" + trans + "hello, how may I help you</span>";
          break;
        case "no thank you":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Okay, your session is now over."
          break;
        case "No thank you":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Okay, your session is now over."
          break;
        case "no, thank you":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Okay, your session is now over."
          break;
        case "No, thank you":
          chat += "<br>"
          chat += "<span class='message'>" +trans + "Okay, your session is now over."
          break;
        default:
          chat += "<br>";
          chat += "<span class='message'>" + trans + "To break a leg is a common phrase used in the united states that means good luck. Is there anything else I may help you with?</span>";
          break;
      }

      $("#chatbox").html(chat);
    }
  });

});

//$('#add-text').click(function() {
//    $('#userMsg').val('Hi Aaron, I was wondering why my co-workers keep on telling me to break my leg before my presentation');
//});

function add(text){
    var TheTextBox = document.getElementById("userMsg");
    TheTextBox.value = TheTextBox.value + text;
}