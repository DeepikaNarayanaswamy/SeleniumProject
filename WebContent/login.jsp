<%-- <%@ include file="header.jsp" %>

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
</div> --%>


<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Test Modulate - Model Based Testing Approach</title>

  <!-- 
	//////////////////////////////////////////////////////

	FREE HTML5 TEMPLATE 
	DESIGNED & DEVELOPED by FREEHTML5.CO
		
	Website: 		http://freehtml5.co/
	Email: 			info@freehtml5.co
	Twitter: 		http://twitter.com/fh5co
	Facebook: 		https://www.facebook.com/fh5co

	//////////////////////////////////////////////////////
	 -->


	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link rel="shortcut icon" href="favicon.ico">

	<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700' rel='stylesheet' type='text/css'>
	
	<!-- Animate.css -->
	
	</head>
	<body>
	<%@ include file="header.jsp" %>
	<section id="fh5co-home" data-section="home" style="background-image: url(images/full_image_2.jpg);" data-stellar-background-ratio="0.5">
		<div class="gradient"></div>
		<div class="container">
			<div class="text-wrap">
				<div class="text-inner">
					<div class="row">
						<div class = "col-md-4 col-md-offset-4 fh5co-person text-center"> 
							<form name = "LoginForm" method  = "POST" action = "/SeleniumProject/LoginServlet">
								<div class="form-group ">
									<label for="username" class="sr-only">Username</label>
									<input id="username" class="form-control" placeholder="Name" type="text" name="username">
								</div>
								<div class="form-group ">
									<label for="password" class="sr-only">Password</label>
									<input id="password" class="form-control" placeholder="Password" type="password" name="password">
								</div>
								
								<div class = "error"></div>
								<div class="form-group ">
									<button class="btn btn-primary btn-lg" onclick = "login()">Login</button>
								</div>
								
						
							</form>
					</div>
					</div>
				</div>
			</div>
		</div>
	
	</section>

	</body>
</html>

