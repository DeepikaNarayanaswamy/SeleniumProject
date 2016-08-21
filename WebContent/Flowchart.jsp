<html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%-- the below line is the magic :) :) --%>
<%@ page isELIgnored ="false" %>
  <head>
  <link rel="stylesheet" type="text/css" href="css/index.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
  
  <%-- -1 is set when there is no parameter for the flowchart in the request --%>
  	
   	
   	
  	
   	
  <body class = "flowchart_container">
  
    <div id="drawingArea" style="width:100%">
      
      <div id = "f_title_area">
      	Enter flowchart title <input type = "text" id = "f_title"/>
      </div>
      
      
      
      		<div class="clearfix">
		<span class = "fleft width16"><label for="f_usecase">Usecase</label></span>
		<span class = "fleft"><select id = "f_usecase">
			
		  
		</select></span>
	</div>

      <div class="startpoint point window node" style="left: 150px; top:20px" data-nodetype="startpoint" id="startpoint">Start</div>
		 
        <div class="window menu" style="left: 600px" id="menuContainer">
            <p style="text-align: center">Menu</p>
            <div class="menu_button_container">
                <div class="button_add_task button menu_button">Add Task</div>
                <%-- Hiding decisison for now
                 <div class="button_add_decision button menu_button">Add Decision</div>--%>
            </div>
        </div>

        <div class="window task" style="left: 120px; top:200px; display:none;" data-nodetype="task" id="taskcontainer0">
            <div class="ctrl_container">
                <div class="button_remove">x</div>
            </div>
            <div class="details_container">
                <div class="detail_text" contenteditable="true">Enter text</div>
            </div>
        </div>

        <div class="window decision" style="left: 250px; top:300px; display:none;" data-nodetype="decision" id="decisioncontainer0">
            <div class="ctrl_container">
                <div class="button_remove">x</div>
            </div>
        </div>

       
    </div>
    
       <div class="endpoint point window node" style="left: 150px; top:400px" data-nodetype="endpoint" id="endpoint">End</div>     
    

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
    <script src="js/jquery.1.11.2.min.js"></script>
    <script src="js/jsPlumb-2.1.4-min.js"></script>
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
