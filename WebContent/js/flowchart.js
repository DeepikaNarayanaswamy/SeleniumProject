var numberOfElements = 0;
var htmlBase = 'drawingArea';
// This will be used when we create / merge flowchart in Testers dashbaord
var globalFlowchartId;
var usecases;
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
// use to store the flowcharts of a usecase 
var flowchartUsecases = [];
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
	$("#mergeButton").click(function(){
		merge();
	});
});


function addStartEndNodes(id,posx,posy){
    
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
		
    setTimeout(function(){
    	jsPlumb.addEndpoint(
    			$("#"+id),
    			workflowConnectorStartpoint
    		);
    		
    		jsPlumb.addEndpoint(
    				$("#"+id),
    			workflowConnectorEndpoint
    		); 
    }, 3000);
    
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
		
		
		return flowChartJson;
}




// This function saves the new flowchart to db.
function createFlowchart(flowcharJson){
	var flowchart = {};
	flowchart["flowchartName"] =  $("#f_title").val();
	if (flowcharJson == undefined)
		flowchart["flowchartJSON"] = getFlowchartJSON();
	else
		flowchart["flowchartJSON"] = flowcharJson;
		
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
			loadFlowchartJSP(globalFlowchartId);
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
			usecases = response;
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
function loadFlowchart(flowchartId){
	//var flowChartJson = $('#jsonOutput').val();
	
	$("#startpoint").remove();
	$("#endpoint").remove();
	//$("#f_title_area").addClass ("hide");
	$("#createButton").addClass ("hide");
	$("#updateButton").removeClass("hide");
	// Get teh flowchartID from URL
	//flowchartId = getParameterByName("flowchartId");
		if (flowchartId != null && flowchartId != undefined)
		{
				$.ajax({
					url:"rest/flowchart/getFlowchartById?flowchartId="+flowchartId,
					success:function(response){
						console.log("success getting flowchart",response);
						if (response != null){
							flowchartJSON = response.flowchartJSON;
							$("#f_title").val(response.flowchartName);
							console.log(response.flowchartName);
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
	}
	
		
	);
	// dom not havign the elements when adding the endpoints
	


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
	flowchart["flowchartName"] = $("#f_title").val();
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

function merge(){
	var i;
	$("#merge_container").remove("input");
	// usecases is a global object taht is is populated by getusecases() 
	for (i=0;i<usecases.length;i++){
		
		var usecaseCheckbox = $('<input type="checkbox" name="usecase" />');
		$(usecaseCheckbox).attr("value",usecases[i].id);
		$("#merge_container").removeClass("hide");
		$("#merge_container").append(usecaseCheckbox).append( usecases[i].name);
	}
}


// Here we will get the flowcharts of a usecase and put in a json object.
function getFlowchartbyusecase(){
	$('input[name="usecase"]:checked').each(function() {
			
		$.ajax({
			url:"rest/flowchart/getFlowchartsByUsecaseId?usecaseId="+this.value,
			success:function(response){
				console.log("success getting flowchart",response);
				if (response.length != 0){
					
					var usecase = {};
					usecase.usecaseId = response[0].usecaseId;
					usecase.flowcharts = response
					flowchartUsecases.push(usecase);
					showFlowchartUsecaselist(flowchartUsecases);
					
				}
			},
			error: function(error){
				
				console.log(error);
			} 
		});
		
		});
	
}

function showFlowchartUsecaselist (flowchartUsecases){
if (flowchartUsecases.length != 0){
		
		for (i=0;i<flowchartUsecases.length;i++){
			var u_fc_list = document.createElement("div");
			
			var usecaseName = document.createElement("span");
			
			for (k=0;k<usecases.length;k++){
				if (flowchartUsecases[i].usecaseId == usecases[k].id)
					{
					usecaseName.innerText = usecases[k].name;
					break;
					}
			}
			$(u_fc_list).append(usecaseName);
			for (j=0;j<flowchartUsecases[i].flowcharts.length;j++){
				
				var usecaseCheckbox = $('<input type="checkbox" name="u_fc" />');
				$(usecaseCheckbox).attr("value",flowchartUsecases[i].usecaseId + "_"+flowchartUsecases[i].flowcharts[j].flowchartId);
				
				$("#flowchart_list").removeClass("hide");
				$(u_fc_list).append(usecaseCheckbox).append( flowchartUsecases[i].flowcharts[j].flowchartName);
				
			}
			$("#flowchart_list").append(u_fc_list);
		}
	}

}

function mergeAll(){
	// basically we should get the text in the flwochart json. And finally construct the json similart to what we have dione in java
	var teststeps = [];
	teststeps.push("start");
	$('input[name="u_fc"]:checked').each(function() {
		
		ufArray = this.value.split("_");
		// get the usecase id & flowchart id
		usecaseId = ufArray[0];
		flowchartId = ufArray[1];
		var flowcharts;
		for (i=0;i<flowchartUsecases.length;i++){
			if (flowchartUsecases[i].usecaseId == usecaseId)
				{			
					flowcharts = flowchartUsecases[i].flowcharts;								
					break;
				}
		}
		
		for (i=0;i<flowcharts.length;i++){
			if (flowcharts[i].flowchartId == flowchartId)
			{	
				console.log(flowcharts[i].flowchartName);
				console.log(flowcharts[i].flowchartJSON);
				json = JSON.parse(flowcharts[i].flowchartJSON);
				for (j=0;j<json.nodes.length;j++){
					if (json.nodes[j].nodetype === "task"){
						teststeps.push(json.nodes[j].text);
					}
				}
			}

		}
		
	});
	teststeps.push("end");
	console.log(teststeps);
	getFinalJson(teststeps);
}

function getFinalJson(teststeps){
	// here we need to check if a flowchart is drawn. if so then take that also.
	var startPosx = 100;
	var startPosy = 100;
			var flowchart = {};
			
	var		 nodes = []
	var		 connections = [];
			
			for (var i=0;i<teststeps.length;i++){
				
				nodeObject = {};
				if (teststeps[i].toLowerCase() == "start"){
					nodeObject.blockId = "startpoint";
					nodeObject.nodetype = "startpoint";
				}else if (teststeps[i].toLowerCase() == "end"){
					nodeObject.blockId = "endpoint";
					nodeObject.nodetype = "endpoint";
				}else {
					nodeObject.blockId = "taskcontainer"+(i);
					nodeObject.nodetype = "task";
					nodeObject.text = teststeps[i];
				}
				
				nodeObject.positionX =  startPosx;
				nodeObject.positionY =  startPosy;
				startPosx+=200;
				nodes.push(nodeObject);
				
				
			}
			
			for (var i=1;i<=teststeps.length;i++){
				 var connection = {};
				connection.connectionId  = "con_1"+i;
				if (i==1){
					connection.pageSourceId = "startpoint";
					connection.pageTargetId = "taskcontainer"+i;
				}else if (i == teststeps.length - 1){
					
					connection.pageSourceId ="taskcontainer"+(i-1);
					connection.pageTargetId = "endpoint";
				}
				
				else{
					connection.pageSourceId = "taskcontainer"+(i-1);
					connection.pageTargetId = "taskcontainer"+(i);
				}
				connections.push(connection);
			}
			flowchart.nodes =nodes;
			flowchart.connections = connections;
			console.log(flowchart);
			$("#startpoint").remove();
			$("#endpoint").remove();
			createFlowchart(JSON.stringify(flowchart));
}
