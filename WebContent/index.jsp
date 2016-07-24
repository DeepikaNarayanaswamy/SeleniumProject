<%@page import="org.apache.jasper.tagplugins.jstl.core.Import"%>
<%@page language="java" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	
<html>
	<head>
		<title>Test Modulate - Model based Testing</title>
		<meta charset="utf-8" />
		
<script src="js/jquery.1.11.2.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src = "js/requirement.js"></script>
<script src = "assets/js/jquery.min.js"></script>
<script src = "assets/js/jquery.scrollex.min.js"></script>
<script src = "assets/js/jquery.scrolly.min.js"></script>
<script src = "assets/js/skel.min.js"></script>
<script src = "assets/js/util.js"></script>
<script src = "assets/js/main.js"></script>
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/font-awesome.css">

<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="assets/css/main.css">
<link data-jsfiddle="common" rel="stylesheet" media="screen" href="dist/pikaday/pikaday.css">
 	<!--  Handson table js files -->
  <script data-jsfiddle="common" src="dist/pikaday/pikaday.js"></script>
  <script data-jsfiddle="common" src="dist/moment/moment.js"></script>
  <script data-jsfiddle="common" src="dist/zeroclipboard/ZeroClipboard.js"></script>
  <script data-jsfiddle="common" src="dist/numbro/numbro.js"></script>
  <script data-jsfiddle="common" src="dist/numbro/languages.js"></script>


  <script data-jsfiddle="common" src="dist/handsontable.js"></script>

  <link data-jsfiddle="common" rel="stylesheet" media="screen" href="dist/handsontable.css">
	</head>
	<body onload = "init()">
	<header>
	<%@ include file = "jsp/Header.jsp" %>
	<%= session.getAttribute("username") %>
	</header>
		Sidebar
			<section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#creategraph">Create a Flow Diagram</a></li>
							<li><a href="#addrule">Add a new Rule</a></li>
							<li><a href="#mergemodels">Merge Models</a></li>
							<li><a href="#unittest">Run a Unit Test</a></li>

						</ul>
					</nav>
				</div>
			</section>

		Wrapper
			<div id="wrapper">

				Intro
					<section id="intro" class="wrapper style1 fullscreen fade-up">
						<div class="inner">
							<h1>Welcome to Test Modulate</h1>
							<p>Test Modulate allows you to create graphical representation of requirement and allows us to generate Manual and Automation Unit test</p>
							<ul class="actions">
								<li><a href="#one" class="button scrolly">Get Started</a></li>
							</ul>
						</div>
					</section>

				One

				<section id="one" class="wrapper style2 spotlights">
						<section>
							
							<div class="content">
								<div class="inner">
									<h2>Create a userstory</h2>
									<p>Allows the user to create a new graph based on the needs</p>
									<ul class="actions">
										<li><a href="#createstory" class="button">Start Now</a></li>
									</ul>
								</div>
							</div>
						</section>
						</section>


						<section id="createstory" class="wrapper style1 fullscreen fade-up">
					
						
						<div class="inner">
							<h1>Requirement Workspace</h1>

							<section>
								<%@ include file = "jsp/AddRequirement.jsp" %>
								
								
								</section>
								</div>
					</section>

									


					<section id="one" class="wrapper style2 spotlights">
						<section>
							
							<div class="content">
								<div class="inner">
									<h2>Start with a graph</h2>
									<p>Allows the user to create a new graph based on the needs</p>
									<ul class="actions">
										<li><a href="#creategraph" class="button">Get Started</a></li>
									</ul>
								</div>
							</div>
						</section>



	creategraph

					<section id="creategraph" class="wrapper style1 fullscreen fade-up">
					<div class="content">

					<div style="width: 50%; float: left;">
  <h4>Select a Requirement</h4>
  <select id = "newReqGraph">
  <option value="req1">Login as a registered user</option>
  <option value="req2">User able to add item to cart</option>
  <option value="req3">User able to place an order</option>
  </select>
</div>
</br></br>
					<h2>Start with a flow diagram</h2>
						<div class="inner">

						<body>
  <div id = "newGraph" style="width:100%; white-space:nowrap;">
    <span style="display: inline-block; vertical-align: top; padding: 5px; width:250px">
      <div id= "newPallete" style="background-color: Snow; border: solid 1px gray; height: 480px"></div>
    </span>
    <span style="display: inline-block; vertical-align: top; padding: 5px; width:85%">
      <div id="newDiv" style="background-color: Snow; border: solid 1px gray; height: 480px"></div>
    </span>
   
  <div> 
  <button id="SaveNewButton" onclick="saveNewGraph()">Save</button>
  <button onclick="loadLogin()">Load</button>
  </div>
  </div>
</section>

Edit a graph
<section>
<div class="content">
								<div class="inner">
									<h2>Edit a graph</h2>
									<p>Allows the user to Edit or modify create flow diagram on any new requriement change</p>
									<ul class="actions">
										<li><a href="#editgraph" class="button">Edit Now</a></li>
									</ul>
								</div>
							</div>
						</section>

<section id="editgraph" class="wrapper style1 fullscreen fade-up">

							
							<div class="content">
								<div class="inner">


								<body>

<h2>Select the graph to edit</h2>
<select id = "graphSelect" onchange="changeGraph()">

	<option value= "">Select a Graph</option>
	<option value = "1">Login as a registered user</option>
	<option value = "2">User able to add item to cart</option>
	<option value = "3">User able to place an order</option>
	<option value = "4">Sample Graph</option>
</select>
  <div id = "loginGraph" style="width:100%; white-space:nowrap;">
    <span style="display: inline-block; vertical-align: top; padding: 5px; width:200px">
      <div id="loginPallete" style="background-color: Snow; border: solid 1px gray; height: 480px"></div>
    </span>
    <span style="display: inline-block; vertical-align: top; padding: 5px; width:85%">
      <div id="loginDiv" style="background-color: Snow; border: solid 1px gray; height: 480px"></div>
    </span>
   
  <div> 
  <button id="SaveButton" onclick="saveLogin()">Save</button>
  <button onclick="loadLogin()">Load</button>
  </div>
  </div>
  
  </body>
</div>
</div>
</section>

	<section id="addrule">
			<div class="content">
								<div class="inner">
									<h2>Add a New Rule</h2>
									<p>Allows the user to create a New Business rule</p>
									<ul class="actions">
										<li><a href="#addrulepage" class="button">Add Now</a></li>
									</ul>
								</div>
							</div>
						</section>


Addrulepage

<section id="addrulepage" class="wrapper style1 fullscreen fade-up">
<div class="content">
	
	<div class="inner">
	<h2>Validation change? Just add a new rule here</h2>
	
	<div class = "container" style="width: 50%; float: left;">
		
  			  <select id = "validationFields" onchange = "loadValidations()">
				
			  </select>
		
		
	     
    </div>
</div>
</div>
</section>


Mergemodesl

<section id="mergemodels" class="wrapper style1 fullscreen fade-up">
<div class="content">
	<div class="inner">

	<h1>Merge the modals and create a quick test case</h1>
<p>Merging of two the modal's allows the user to join use case flow to form a test case</p>
	Merge Model
	<ul id="sortable1" class="connectedSortable">
  <li class="ui-state-default cursorpointer" id = "1" >Login as a registered user</li>
  <li class="ui-state-default cursorpointer" id = "2">User able search for product</li>
  <li class="ui-state-default cursorpointer" id = "3">Checkout Graph</li>
  
</ul>
 
<ul id="sortable2" class="connectedSortable">
  
</ul>
<div>
<div  class = "marginBottom">
<input type="text" name="name" id="name" placeholder = "Enter File Location to save" />
</div>
<button onclick = "saveTotalGraph()"> Generate Test Case </button>
</div>
	
	
</div>
</div>
</section>


Run a unit Test

<section id="unittest" class="wrapper style1 fullscreen fade-up">
<div class="content">
	<div class="inner">
	
	<h1>Run a Junit test</h1>
	<select id = "graphSelectUnit" onchange="changeGraph()">

	<option value= "">Select a Test case to run</option>
</select>
<p>Spot test a flow by unit testing to avoid efforts on reopened defects !! </p>
	

	
	<button onclick = "generateUnitTest()">Run Unit Testing</button>
</div>
</div>
</section>

							
	Footer
			<footer id="footer" class="wrapper style1-alt">

			
				
			</footer>

		

	</body>
</html>