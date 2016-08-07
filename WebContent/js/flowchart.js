var numberOfElements = 0;
var htmlBase = 'drawingArea';
// This will be used when we create / merge flowchart in Testers dashbaord
var globalFlowchartId;
jsPlumb.ready(function () {

	//FIX DOM:
//	$(("#taskcontainer0"))[0].innerHTML = $(("#taskcontainer0"))[0].innerHTML;
	//$(("#decisioncontainer0"))[0].innerHTML = $(("#decisioncontainer0"))[0].innerHTML;

	jsPlumb.draggable($(".window"));
	
	jsPlumb.importDefaults({
		Endpoint : ["Dot", {radius:8}],
		EndpointStyle : { fillStyle : "#4A6" },
		HoverPaintStyle : {strokeStyle:"#42a62c", lineWidth:8 },
		Connector:[ "Flowchart" ],
		ConnectionOverlays : [
			[ "Arrow", { 
				location:1,
				id:"arrow",
				length:20,
				foldback:0.4
			} ]
		]
	});

	var workflowConnectorStartpoint = {
		isSource: true,
		isTarget: false,
		maxConnections: 1,				 
		anchor:"BottomCenter"
	};
	
	var workflowConnectorEndpoint = {
		isSource: false,
		isTarget: true,
		maxConnections: -1,				 
		anchor:"TopCenter",
		paintStyle: { fillStyle: 'red' },
		endpoint: ["Rectangle", {width:12, height:12}]
	};
	
	jsPlumb.addEndpoint(
		$('.startpoint'),
		workflowConnectorStartpoint
	);
	
	jsPlumb.addEndpoint(
		$('.endpoint'),
		workflowConnectorEndpoint
	);
					
	$('#'+htmlBase).on("click", ".button_remove", function () {
		var parentnode = $(this)[0].parentNode.parentNode;
		jsPlumb.detachAllConnections(parentnode);
		jsPlumb.removeAllEndpoints(parentnode);
		$(parentnode).remove(); 
	});
	
	$(".button_add_task").click(function () {
		addTask();
	});
					
	$(".button_add_decision").click(function () {
		addDecision();
	});
	
	$('#createButton').click(function(){
		createFlowchart();
	});
	
	$('#loadButton').click(function(){
		loadFlowchart();
	});

	$('#updateButton').click(function(){
		updateFlowchart();
	});
});


function addStartEndNodes(id,posx,posy){
    var workflowConnectorStartpoint = {
		isSource: true,
		isTarget: false,
		maxConnections: 1,				 
		anchor:"BottomCenter"
	};
	
	var workflowConnectorEndpoint = {
		isSource: false,
		isTarget: true,
		maxConnections: -1,				 
		anchor:"TopCenter",
		paintStyle: { fillStyle: 'red' },
		endpoint: ["Rectangle", {width:12, height:12}]
	};
    taskContainer = document.createElement('div');
    if (id == "startpoint")
    {
        $(taskContainer).text("Start");
        $(taskContainer).addClass('startpoint point window node');
        $(taskContainer).attr("data-nodetype","startpoint");
      
    }
    else if (id == "endpoint")
    {
        $(taskContainer).addClass('endpoint point window node');
        $(taskContainer).text("End");
        $(taskContainer).attr("data-nodetype","endpoint");
        
    }
    $(taskContainer).css({top: posy, left: posx});
    $(taskContainer).attr('id', id);
    $(taskContainer).appendTo('#drawingArea');
	
	jsPlumb.draggable($('#' + id));
}

function addTask(id,posx,posy,text){
	if(typeof id === "undefined"){
		numberOfElements++;
		id = "taskcontainer" + numberOfElements;
	}
	taskContainer = document.createElement('div');
    $(taskContainer).addClass('window task node');
    $(taskContainer).css({top: posy, left: posx});
    $(taskContainer).attr('id', id);
    $(taskContainer).attr('data-nodetype', 'task');
    $(taskContainer).appendTo('#'+htmlBase).html($(("#taskcontainer0"))[0].innerHTML);
    $('#'+id).find("div.detail_text").text(text);		
	var taskSourceConnectorEndpoint = {
		isSource: true,
		isTarget: false,
		maxConnections: 1,
		anchor:[ 0.5, 1, 0, 1, 0, 0 , "task_end endpoint"],
	};

	var taskTargetConnectorEndpoint = {
		isSource: false,
		isTarget: true,
		maxConnections: 1,	
		anchor:[ 0.5, 0, 0, -1, 0, 0 , "task_end endpoint"],
		paintStyle: { fillStyle: 'red' },
		endpoint: ["Rectangle", {width:12, height:12}]
	};
	
	jsPlumb.addEndpoint(
		$('#'+id),
		taskSourceConnectorEndpoint
	);
	
	jsPlumb.addEndpoint(
		$('#'+id),
		taskTargetConnectorEndpoint
	);
	
	jsPlumb.draggable($('#' + id));
	return id;
}
function addDecision(id){
	if(typeof id === "undefined"){
		numberOfElements++;
		id = "decisioncontainer" + numberOfElements;
	}
	$('<div class="window decision node" id="' + id + '" data-nodetype="decision" style="left:30px; top:30px;">').appendTo('#'+htmlBase).html($(("#decisioncontainer0"))[0].innerHTML);
					
	var upperDecisionConnectorEndpoint = {
		isSource: false,
		isTarget: true,
		maxConnections: 1,				 
		anchor:[ 0.5, 0, 0, -1, 16, 0 , "upper_dec_end endpoint"],
		paintStyle: { fillStyle: 'red' },
		endpoint: ["Rectangle", {width:12, height:12}]
	};
	
	var leftDecisionConnectorEndpoint = {
		isSource: true,
		isTarget: false,
		maxConnections: 1,				 
		anchor:[ 0, 0.5, 0, 1, 0, 16 , "left_dec_start startpoint"]
	};
	
	var rightDecisionConnectorEndpoint = {
		isSource: true,
		isTarget: false,
		maxConnections: 1,				 
		anchor:[ 1.0, 0.5, 0, 1, 32, 16 , "right_dec_start startpoint"]
	};
	
	jsPlumb.addEndpoint(
		$('#'+id),
		leftDecisionConnectorEndpoint
	);
	
	jsPlumb.addEndpoint(
		$('#'+id),
		rightDecisionConnectorEndpoint
	);
	
	jsPlumb.addEndpoint(
		$('#'+id),
		upperDecisionConnectorEndpoint
	);
	
	jsPlumb.draggable($('#' + id));
	return id;
}
// This function constructs the flowchart json based on the elements in thet dom
function getFlowchartJSON(){
	var nodes = []
	$(".node").each(function (idx, elem) {
	var $elem = $(elem);
	var endpoints = jsPlumb.getEndpoints($elem.attr('id'));
	console.log('endpoints of '+$elem.attr('id'));
	console.log(endpoints);
		nodes.push({
			blockId: $elem.attr('id'),
			nodetype: $elem.attr('data-nodetype'),
			positionX: parseInt($elem.css("left"), 10),
			positionY: parseInt($elem.css("top"), 10),
            text: $(elem).find("div.detail_text").text()
		});
	});
	var connections = [];
	$.each(jsPlumb.getConnections(), function (idx, connection) {
		connections.push({
			connectionId: connection.id,
			pageSourceId: connection.sourceId,
			pageTargetId: connection.targetId
		});
	});
	
	var flowChart = {};
	flowChart.nodes = nodes;
	flowChart.connections = connections;
	flowChart.numberOfElements = numberOfElements;
	
	var flowChartJson = JSON.stringify(flowChart);
	//console.log(flowChartJson);
	
	$('#jsonOutput').val(flowChartJson);	var nodes = []
	$(".node").each(function (idx, elem) {
		var $elem = $(elem);
		var endpoints = jsPlumb.getEndpoints($elem.attr('id'));
		console.log('endpoints of '+$elem.attr('id'));
		console.log(endpoints);
			nodes.push({
				blockId: $elem.attr('id'),
				nodetype: $elem.attr('data-nodetype'),
				positionX: parseInt($elem.css("left"), 10),
				positionY: parseInt($elem.css("top"), 10),
	            text: $(elem).find("div.detail_text").text()
			});
		});
		var connections = [];
		$.each(jsPlumb.getConnections(), function (idx, connection) {
			connections.push({
				connectionId: connection.id,
				pageSourceId: connection.sourceId,
				pageTargetId: connection.targetId
			});
		});
		
		var flowChart = {};
		flowChart.nodes = nodes;
		flowChart.connections = connections;
		flowChart.numberOfElements = numberOfElements;
		
		var flowChartJson = JSON.stringify(flowChart);
		//console.log(flowChartJson);
		
		$('#jsonOutput').val(flowChartJson);
		return flowChartJson;
}




// This function saves the new flowchart to db.
function createFlowchart(flowchartName,flowcharJson){
	var flowchart = {};
	flowchart["flowchartName"] =  $("#f_title").val();
	flowchart["flowchartJSON"] = getFlowchartJSON();
	flowchart["requirementId"] = null;
	flowchart["usecaseId"] = $("#f_usecase").val();
	$.ajax({
		url:"rest/flowchart/save",
		type:"POST",
		contentType:"application/json;charset=utf-8",
		data:JSON.stringify(flowchart),
		success:function(response){
			$("#saveButton").addClass("hide");
			$("#updateButton").removeClass("hide");
			console.log(response);
			globalFlowchartId = response.flowchartId;
		},
		error: function(error){
			console.log(error);
			
			alert (error.responseText);
		} 
	});
}

function getUsecases(){
	
	$.ajax({
		url:"rest/requirements/getUsecases",
		success:function(response){
			console.log("success getting usecases");
			usecase = $("#f_usecase");
			$.each(response, function() {
				usecase.append($("<option />").val(this.id).text(this.name));
			});
			
		},
		error: function(error){
			
			console.log(error);
		} 
	});
}


// This function is used to show the flowchart based on the flowchartId
function loadFlowchart(){
	//var flowChartJson = $('#jsonOutput').val();
	$("#startpoint").remove();
	$("#endpoint").remove();
	$("#f_title_area").addClass ("hide");
	$("#createButton").addClass ("hide");
	$("#updateButton").removeClass("hide");
	// Get teh flowchartID from URL
	flowchartId = getParameterByName("flowchartId");
		if (flowchartId != null && flowchartId != undefined)
		{
				$.ajax({
					url:"rest/flowchart/getFlowchartById?flowchartId="+flowchartId,
					success:function(response){
						console.log("success getting flowchart",response);
						if (response != null){
							flowchartJSON = response.flowchartJSON;
							drawFlowchart(flowchartJSON);
							
						}
					},
					error: function(error){
						
						console.log(error);
					} 
				});
	
		}
}
// This method takes the flowchart json and renders the flowchart
function drawFlowchart(flowchartJSON){
	var flowChart = JSON.parse(flowchartJSON);
	var nodes = flowChart.nodes;
	$.each(nodes, function( index, elem ) {
		if(elem.nodetype === 'startpoint'){
				addStartEndNodes('startpoint', elem.positionX, elem.positionY);
		}else if(elem.nodetype === 'endpoint'){
			addStartEndNodes('endpoint', elem.positionX, elem.positionY);
		}else if(elem.nodetype === 'task'){
			//var id = addTask(elem.blockId);
			addTask(id, elem.positionX, elem.positionY,elem.text);
		}else if(elem.nodetype === 'decision'){
			var id = addDecision(elem.blockId);
			addTask(id, elem.positionX, elem.positionY);
		}else{
			
		}
	});
							
	var connections = flowChart.connections;
	$.each(connections, function( index, elem ) {
		 var connection1 = jsPlumb.connect({
			source: elem.pageSourceId,
			target: elem.pageTargetId,
			anchors: ["BottomCenter", [0.75, 0, 0, -1]]
			
		});
	});
	
	numberOfElements = flowChart.numberOfElements;
}
// This function will update the flowchart based on the flowchartId
function updateFlowchart(flowchartId,flowcharJson){
	flowchartId = getParameterByName("flowchartId");
	
	// This will be called when a flowchart of a req. needs to be edited.
		if (flowchartId == null)
		{
			// This means we are in testers dashboard
			flowchartId= globalFlowchartId;
		}
	var flowchart = {};
	flowchart["flowchartId"] = flowchartId;
	flowchart["flowchartJSON"] = getFlowchartJSON();
	$.ajax({
		url:"rest/flowchart/updateFlowchart",
		type:"POST",
		contentType:"application/json;charset=utf-8",
		data:JSON.stringify(flowchart),
		success:function(response){
			alert (response.status);
			console.log(response);
			
		},
		error: function(error){
			console.log(error);
			
			alert (error.responseText);
		} 
	});
}

function repositionElement(id, posX, posY){
	$('#'+id).css('left', posX);
	$('#'+id).css('top', posY);
	jsPlumb.repaint(id);
}