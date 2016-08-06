<html>
  <head>
  <link rel="stylesheet" type="text/css" href="css/index.css">
  </head>
  <body onload = "loadFlowchart();">
    <div id="drawingArea" style="width:100%">
      

        <div class="window menu" style="left: 600px" id="menuContainer">
            <p style="text-align: center">Menu</p>
            <div class="menu_button_container">
                <div class="button_add_task button menu_button">Add Task</div>
                <div class="button_add_decision button menu_button">Add Decision</div>
                <button id="saveButton" class="button menu_button">Save</button>
                <button id="loadButton" class="button menu_button">Load</button>
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
    <textarea id="jsonOutput" style="width:100%;height:100px;"></textarea>

    <script src="js/jquery.1.11.2.min.js"></script>
    <script src="js/jsPlumb-2.1.4-min.js"></script>
    <script src="js/flowchart.js"></script>
    <script src="js/requirement.js"></script>
  </body>
</html>
