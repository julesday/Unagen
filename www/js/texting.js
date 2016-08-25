var chat = "Translator: Hi, My name is Aaron, How may I help you?";
$(document).ready(function(){
	$("#chatbox").html(chat);
//If user submits the form
	$("#submitmsg").click(function(){	
		var clientmsg = $("#usermsg").val();

			chat += "<br>"
			chat += "Me: "
			chat += clientmsg
			switch(clientmsg){
				case "Hi Aaron, I was wondering why these Americans keep on telling me to 'break my leg' before my presentation":
				chat += "<br>"
				chat += "Translator: to 'break a leg' is a common phrase used in the united states that means good luck"	
				}
		
		$("#chatbox").html(chat);
		return false;
	});
 
});