var chat = "";
$(document).ready(function(){
//If user submits the form
	$("#submitmsg").click(function(){	
		var clientmsg = $("#usermsg").val();
		if(chat == "") {
			chat += clientmsg;
			if(clientmsg.includes ("hello")){
				chat += "<br>"
				chat += "bonjour"		
			}	
		}
		else {
			if(clientmsg.includes ("hello")){
			
		}
			chat += "<br>"
			chat += clientmsg;
		}
		
		
		$("#chatbox").html(chat);
		return false;
	});
 
});