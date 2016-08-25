var chat = "<span class='message'><b>Translator:</b> Hi, My name is Aaron, How may I help you?</span>";
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
        case "Hi Aaron, I was wondering why these Americans keep on telling me to 'break my leg' before my presentation":
          chat += "<br>";
          chat += "<span class='message'>" + trans + "is a common phrase used in the united states that means good luck</span>";
          break;
        case "hello":
      }

      $("#chatbox").html(chat);
    }
  });

});