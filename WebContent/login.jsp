<%@ include file="header.jsp" %>

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
		
		<div class = "error"></div>
		<div><button  onclick = "login()"/>Login</button></div>

	</form>
</div>