<html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="true" %>
<head>

	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans">
	<link rel="stylesheet" type="text/css" href = "css/styles.css">
	<script src="js/jquery.1.11.2.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src = "js/login.js"></script>
<script src = "js/requirement.js"></script>

<script src = "assets/js/util.js"></script>

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
</head>
	<header>
		<div class = "fleft logo"> Test Modulate </div>
		<div class = "fright name">
		<span> Welcome </span>
		
		<span id = "name">
		 <%= session.getAttribute("username") %></span>

	</header>

