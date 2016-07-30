<html>
<head>

	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans">
	<link rel="stylesheet" type="text/css" href = "css/styles.css">
</head>
<body>
<div class = "fright login">


	<form  name = "LoginForm" method  = "POST" action = "/SeleniumProject/LoginServlet">
	
		<div >
		<span class = "fleft mar10"><label for = "username"> User name </label></span>
		<span class = "fright mar10"><input id = "username" name = "username" type = "text"/></span>
		</div>
		
		<div>
		<span class = "fleft mar10"><label for = "password">Password</label></span>
		<span class = "fright mar10"><input id = "password" name = "password" type = "password"/></span>
		</div>
		
		<div><button  onclick = "login()"/>Login</button></div>

	</form>
</div>
</body>
</html>