<html>
  <head>
  <link rel="stylesheet" type="text/css" href="css/index.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
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
                <div class="button_add_decision button menu_button">Add Decision</div>
                <button id="createButton" class="button menu_button">Create New Flowchart</button>
                <button id="updateButton" class="button menu_button hide">Update Flowchart</button>
                <button id="mergeButton" class="button menu_button">Merge</button>
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
    <textarea id="jsonOutput" style="width:100%;height:100px;"></textarea>

	<div id = "merge_container" class = "hide">
		
		<div>
			<button onclick = "getFlowchartbyusecase()" id = "get_flowchart">Get flowcharts</button>
		</div>
		
	</div>
	<div id="flowchart_list">
		
			<div>
			<button onclick = "mergeAll()" id = "get_flowchart">Merge me</button>
		</div>
	
	</div>
    <script src="js/jquery.1.11.2.min.js"></script>
    <script src="js/jsPlumb-2.1.4-min.js"></script>
    <script src="js/flowchart.js"></script>
    <script src="js/requirement.js"></script>
  </body>
  <script>
  $(document).ready(function(){
  
  	flowchartId = getParameterByName("flowchartId");
  	if (flowchartId != null){
  		loadFlowchart();
  	}else{
  		// This is create new flowchart flow
  		getUsecases();
  	}
  });
  </script>
</html>
