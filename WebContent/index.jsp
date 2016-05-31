<!DOCTYPE HTML>
<!--
	Hyperspace by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Test Modulate - Model based Testing</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		
<script src="js/jquery.1.11.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/add.rule.js"></script>
<script src="js/jquery-ui.js"></script>
<script src = "js/common.js"></script>
<script src = "js/manual.test.js"></script>
	</head>
	<body>

		<!-- Sidebar -->
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

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Intro -->
					<section id="intro" class="wrapper style1 fullscreen fade-up">
						<div class="inner">
							<h1>Welcome to Test Modulate</h1>
							<p>Test Modulate allows you to create graphical representation of requirement and allows us to generate Manual and Automation Unit test</p>
							<ul class="actions">
								<li><a href="#one" class="button scrolly">Get Started</a></li>
							</ul>
						</div>
					</section>

				<!-- One -->

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
					<div id = "storySuccess" class="alert alert-success hiderule">
			    		<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			    		<strong>Success!</strong> Requirement Saved Successfully
			  		</div>
						
						<div class="inner">
							<h1>Requirement Workspace</h1>

							<section>
									<form method="post" action="MAILTO:harishp1906@gmail.com" method="post" enctype="text/plain">
										<div class="field half first">
											<label for="name">User story ID</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half first" style="float:none;">
											<label for="email">Summary</label>
											<input type="text" name="summary" id="summary" />
										</div>

										<div class="field half first">
											<label for="email">Acceptance Test/Criteria</label>
											<input type="text" name="email" id="email" />
										</div>

										<div class="field half first" style="float:none;">
										<label for="email">Select Priority</label>
											
											<select>
  											<option value="Low">Low</option>
											  <option value="Medium">Medium</option>
											  <option value="High">High</option>
											  
											</select>
										</div>
										<div class="field">
											<label for="message">Comments (if any)</label>
											<textarea name="message" id="message" rows="5"></textarea>
										</div>

										<ul class="actions">
								<li><a href="#one" class="button scrolly" onclick = "saveStory()">Save</a></li>
								<li><a href="#intro" class="button scrolly">Cancel</a></li>
								<li><input type="submit" value="Send Email"></li>
							</ul>
										
									</form>
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



	<!-- creategraph -->

					<section id="creategraph" class="wrapper style1 fullscreen fade-up">
					<div class="content">

					<div style="width: 50%; float: left;">
  <h4>Select a Requirement</h4>
  <select id = "newReqGraph">
  <!-- <option value="req1">Login as a registered user</option>
  <option value="req2">User able to add item to cart</option>
  <option value="req3">User able to place an order</option> -->
  </select>
</div>
</br></br>
					<h2>Start with a flow diagram</h2>
						<div class="inner">

						<body onload = "initNewGraph()">
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

<!-- Edit a graph-->
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


								<body onload = "initLogin()">

<h2>Select the graph to edit</h2>
<select id = "graphSelect" onchange="changeGraph()">

	<option value= "">Select a Graph</option><!-- 
	<option value = "1">Login as a registered user</option>
	<option value = "2">User able to add item to cart</option>
	<option value = "3">User able to place an order</option>
	<option value = "4">Sample Graph</option> -->
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


<!-- Addrulepage -->

<section id="addrulepage" class="wrapper style1 fullscreen fade-up">
<div class="content">
	
	<div class="inner">
	<h2>Validation change? Just add a new rule here</h2>
	
	<div class = "container" style="width: 50%; float: left;">
		
  			  <select id = "validationFields" onchange = "loadValidations()">
				
			  </select>
		<script>
		loadFields();
		</script>
		
	     
    </div>
</div>
</div>
</section>


<!-- Mergemodesl -->

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
<script>
initializeDragDrop();
</script>
<div>
<div  class = "marginBottom">
<input type="text" name="name" id="name" placeholder = "Enter File Location to save" />
</div>
<button onclick = "saveTotalGraph()"> Generate Test Case </button>
</div>
	
	
</div>
</div>
</section>


<!-- Run a unit Test -->

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

							
	<!-- Footer -->
			<footer id="footer" class="wrapper style1-alt">

			
				
			</footer>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

			<script src="js/go.js"></script>
<script src="js/add.rule.js"></script>
<script src="js/jquery.1.11.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src = "js/common.js"></script>
<script src = "js/graphpage.js"></script>
<script src = "js/Data.js"></script>
<script id="code">
</script>

<script src="js/jquery.1.11.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/add.rule.js"></script>
<script src = "js/common.js"></script>
<link rel="stylesheet" href="css/font-awesome.css">
<link rel="stylesheet" href="css/add.rule.css">
<link rel="stylesheet" href="css/bootstrap.css">

	</body>
</html>