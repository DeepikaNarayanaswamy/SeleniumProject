<html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="true" %>
<%@ page isELIgnored ="false" %>
<head>

	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans">
	<link rel="stylesheet" type="text/css" href = "css/styles.css">
	<script src="js/jquery.1.11.2.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src = "js/login.js"></script>
<script src = "js/requirement.js"></script>
<script src = "js/tmworkspace.js"></script>
<script src="js/jsPlumb-2.1.4-min.js"></script>
<script src = "js/flowchart.js"></script>
<script src = "assets/js/util.js"></script>
<script src = "js/bootstrap.js"></script>
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/font-awesome.css">
<link data-jsfiddle="common" rel="stylesheet" media="screen" href="dist/pikaday/pikaday.css">
 	<!--  Handson table js files -->
  <script data-jsfiddle="common" src="dist/pikaday/pikaday.js"></script>
  <script data-jsfiddle="common" src="dist/moment/moment.js"></script>
  <script data-jsfiddle="common" src="dist/zeroclipboard/ZeroClipboard.js"></script>
  <script data-jsfiddle="common" src="dist/numbro/numbro.js"></script>
  <script data-jsfiddle="common" src="dist/numbro/languages.js"></script>


  <script data-jsfiddle="common" src="dist/handsontable.js"></script>
<link data-jsfiddle="common" rel="stylesheet" media="screen" href="dist/handsontable.css">
<link data-jsfiddle="common" rel="stylesheet" href="css/jquery-ui.css">
<link rel="stylesheet" href="css/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="css/icomoon.css">
	<!-- Simple Line Icons -->
	<link rel="stylesheet" href="css/simple-line-icons.css">
	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="css/bootstrap.css">

	

	
	<link rel="stylesheet" href="css/stylemain.css">

	<!-- Styleswitcher ( This style is for demo purposes only, you may delete this anytime. ) -->
	
	<!-- End demo purposes only -->



	<!-- Modernizr JS -->
	<script src="js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

</head>
<header role="banner" id="fh5co-header">
			<div class="container">
				<!-- <div class="row"> -->
			    <nav class="navbar navbar-default">
		        <div class="navbar-header">
		        	<!-- Mobile Toggle Menu Button -->
					<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		         <a class="navbar-brand" href="login.jsp">Test Frame</a>
		         
	 			</div>
	 			<span id = "name" class = "name">
	 				 <c:if test = "${not empty sessionScope.username}">
	 				 	Welcome ${sessionScope.username}
	 				 </c:if>
		 			
		         
		        </nav>
			  <!-- </div> -->
		  </div>
	</header>
		
	
	

	<!--  this should be removed -->

