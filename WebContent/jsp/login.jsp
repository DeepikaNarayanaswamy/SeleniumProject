<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src = "js/login.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>

	<form  name = "LoginForm" method  = "POST" action = "/SeleniumProject/LoginServlet">
	<div><label for = "username"> User name </label><input id = "username" name = "username" type = "text"/></div>
	<div><label for = "password">Password</label><input id = "password" name = "password" type = "password"/></div>
	<div><input type = "submit" value = "submit" onclick = "login()"/></div>
	</form>

</body>
</html>