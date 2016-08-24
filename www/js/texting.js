var chat = "";
$(document).ready(function(){
//If user submits the form
	$("#submitmsg").click(function(){	
		var clientmsg = $("#usermsg").val();
		

		switch (clientmsg) {
		case clientmsg == "hi": 
		chat += "<br>"
		chat += "clientmsg"
		break;
		case clientmsg == "umm": 
		chat += "<br>"
		chat += "clientmsg"
}
		
		
		$("#chatbox").html(chat);
		return false;
	});
 
});

