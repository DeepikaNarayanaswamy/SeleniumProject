function login(){
	uname = $("#username").val();
	pwd = $("#password").val();
	if (uname == null || uname == "" ){
		$(".error").text("Enter username");
	}
	else if (pwd == null || pwd == "" ){
		$(".error").text("Enter password");
	}else{
		$("LoginForm").submit();
	}
}