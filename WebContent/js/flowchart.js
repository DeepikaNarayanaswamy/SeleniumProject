var numberOfElements = 0;
var htmlBase = 'drawingArea';
var flowchartJSON;
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
	
	$('#saveButton').click(function(){
		saveFlowchart();
	});
	
	$('#loadButton').click(function(){
		loadFlowchart();
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
function saveFlowchart(){
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
	
	$('#jsonOutput').val(flowChartJson);
	reqId = getParameterByName("reqId");
	var flowchart = {};
	flowchart["requirementId"] = reqId;
	flowchart["flowchartJSON"] = flowChartJson;
	$.ajax({
		url:"rest/requirements/updateFlowchart",
		type:"POST",
		contentType:"application/json;charset=utf-8",
		data:JSON.stringify(flowchart),
		success:function(response){
					
			console.log(response);
			
		},
		error: function(error){
			console.log(error);
			
			alert (error.responseText);
		} 
	});

	
}
function loadFlowchart(){
	//var flowChartJson = $('#jsonOutput').val();
	
	reqId = getParameterByName("reqId");
	$.ajax({
		url:"rest/requirements/getFlowchartByReqId?reqId="+reqId,
		success:function(response){
			console.log("success getting flowchart",response);
			if (response != null){
				flowchartJSON = response.flowchartJSON;
				
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
		},
		error: function(error){
			
			console.log(error);
		} 
	});
	
	
	
	
	
}
function repositionElement(id, posX, posY){
	$('#'+id).css('left', posX);
	$('#'+id).css('top', posY);
	jsPlumb.repaint(id);
}