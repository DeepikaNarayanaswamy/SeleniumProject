<html>
<%@ include file="header.jsp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%-- the below line is the magic :) :) --%>
<%@ page isELIgnored ="false" %>
  <head>
  <link rel="stylesheet" type="text/css" href="css/index.css">
  
  <link rel="stylesheet" href="css/jquery-ui.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
	  
  <%-- -1 is set when there is no parameter for the flowchart in the request --%>
  	
	
	<div id = "dialog-form">
	<div id="flowchart-extra" class = "hide">
  		<h3>Add a Validation Field</h3>
		  <div id = "validation-rules" class = "control-group">
			
		  </div>
		  <h3>Add a web element</h3>
		  <div>
		    <p>Here a text box will come
		    </p>
		  </div>
	</div>
	</div>   	
   	
  	
   	
  <body id="fh5co-work">
  			<div class="container">
  			<div class = "row">
				<ul class="nav nav-pills nav-stacked col-md-2">
	  				<li><a href="TesterHomePage.jsp">Dashboard</a></li>
					<li class="active"><a>Create Flowchart</a></li>
					<li><a href="#">Add Rule</a></li>
				  	<li><a href="TMWorkspace.jsp">Workspace</a></li>
				</ul>
			
					<div class="col-md-12 section-heading text-center">
						<h2 class="to-animate fadeInUp animated">Create Flowchart</h2>
						
					</div>
				</div>
				<div class = "row">
			      <div class = "col-md-4 text-center">
				      	<form>
				      		<div class="form-group ">
								<label for="f_title">Flowchart Name</label>
								<input id="f_title" class="form-control" placeholder="Name" type="text" name="f_title">
							</div>
				      		<div class="form-group ">
								<label for="f_title">Usecase</label>
								<select id = "f_usecase"></select>
							</div>
						</form>
			      </div>
			      
			        <div id="drawingArea" class = "col-md-4" style="width:100%">
      
					</div>

			      <div class="startpoint point window node" style="left: 800px; top:200px" data-nodetype="startpoint" id="startpoint">Start</div>
					 
			        <div class="window menu" style="left: 600px" id="menuContainer">
			            <p style="text-align: center">Menu</p>
			            <div class="menu_button_container">
			                <div class="button_add_task button menu_button">Add Task</div>
			                <%-- Hiding decisison for now
			                 <div class="button_add_decision button menu_button">Add Decision</div>--%>
			            </div>
			        </div>
			
			        <div class="window task" style="left: 120px; top:400px; display:none;" data-nodetype="task" id="taskcontainer0">
			            <div class="ctrl_container">
			                <div class="button_remove">x</div>
			            </div>
			            <div class="details_container">
			                <div class="detail_text" contenteditable="true">Enter text</div>
			                 <span id="validation_container"></span>
			            </div>
			           
			    
			        </div>
			
			        <div class="window decision" style="left: 250px; top:300px; display:none;" data-nodetype="decision" id="decisioncontainer0">
			            <div class="ctrl_container">
			                <div class="button_remove">x</div>
			            </div>
			        </div>
			
			       
			    </div>
			    
			       <div class="endpoint point window node" style="left: 800px; top:400px" data-nodetype="endpoint" id="endpoint">End</div>     
			    
			
				<div id = "merge_container" class = "hide">
					
					<div>
						<button onclick = "getFlowchartbyusecase()" id = "get_flowchart">Get flowcharts</button>
					</div>
					
				</div>
				<div id="flowchart_list">
					
						<div>
						    <button id="createButton" class="button menu_button">Create New Flowchart</button>
			                <button id="updateButton" class="button menu_button hide">Update Flowchart</button>
			            
						</div>
				</div>
  			</div>	
						
			
      <script src="js/jquery.1.11.2.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    
    <script src="js/jsPlumb-2.1.4-min.js"></script>
    <script src="contextMenu/contextMenu.js"></script>
    <script src="js/flowchart.js"></script>
    <script src="js/tmworkspace.js"></script>
    <script src="js/requirement.js"></script>
    
  </body>
  <script>
  $(document).ready(function(){
  	//console.log("flowchartid"+${param.flowchartId});
  	
	flowchartId = getParameterByName("flowchartId");
		if (flowchartId != null && flowchartId != undefined)  	
  			loadFlowchart(flowchartId);
  	
  	  else{
  		// This is create new flowchart flow
  		getUsecases();
  	}
  });
  </script>
</html>
