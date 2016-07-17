/**
 * 
 */
	var steps = new Array();
function initializeDragDrop()
{
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
};

function saveTotalGraph(){
	// get the test cases chosen
	steps.length = 0;
	for (var list=0; list< $("#sortable2").children().size();list++){
		testCase = $("#sortable2").children()[list];
		console.log(Graphs.length);
		// get the 
		for (var graphCount=0;graphCount<Graphs.length;graphCount++){
			console.log("here");
			console.log("testcaseid = "+testCase.id)
			if (testCase.id == Graphs[graphCount].graphId){
				console.log("Graphs[j].graphId",Graphs[graphCount].graphId)
				graph = Graphs[graphCount];
				console.log(graph);
				for (k=0;k<graph.graphProperties.nodeDataArray.length;k++){
					var node = graph.graphProperties.nodeDataArray[k];
					if (node.category == null){
						var step = {};
						step.id  = node.key;
						step.description = node.text;
						step.attributes = null;
						steps.push(step);
						console.log("step here : "+step.description);
						
					}
				}
				console.log("nowgraph");
				console.log(graph);
				for (var i=0;i< graph.graphProperties.nodeDataArray.length;i++){
					node = graph.graphProperties.nodeDataArray[i];
					if (node.category == "UndesiredEvent"){
						key = node.key;
						console.log("key her ",key);
						for (var j=0;j<graph.graphProperties.linkDataArray.length;j++)
						{
							linkdata = graph.graphProperties.linkDataArray[j];
				
							if (key == linkdata.to){
								stepid = linkdata.from;
								for (var k=0;k<steps.length;k++){
									step = steps[k];
									if (step.id == stepid){
										console.log("stepId",step.id)
										console.log(step.description)
										//console.log("attributes :",node.reasonsList);
										step.attributes = node.reasonsList;
									}
									console.log("after attrs ");
									console.log(step.attributes);
									console.log(step.description);
								}
								
								
							}
						}
					}
				}
				console.log("list count = ",list);
				console.log("STEPS= "+steps);
			}
		}
	}
	
	
		$.ajax({
		url:"GenerateTestCases",
		method:"POST",
		data:{'steps':JSON.stringify(steps)},
		success:function(){
			console.log("success");
		},
		error: function(error){
			console.log(error);
		} 
	})
}
