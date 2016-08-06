var  requirements;
var validations;
requirementsArray = [];
validationArray = [];
var hot1;
// This function is specific to initialize the steps to demo part
// It also gets the next req id
function init(){
	requirements = getAllRequirements();
	validations =  getAllValidations();
	getReqId();
	getAllSprints();
	setTimeout(function(){ initializeStepArea()}, 3000);
	bindDumpButton();
}
function initializeStepArea(){
	// this guy is not accepting jquery way of getting hte element by id :(
	
	if (hot1 != undefined)
		hot1.destroy();
	var stepsArea = document.getElementById('stepsArea');
	hot1 = new Handsontable(stepsArea, {
		 
		data:getCarData(),
		startRows:10,
		startCols:2,
	  colHeaders: ['Test Step ', 'Validation'],
	  columns: [
	    {
	      type: 'autocomplete',
	      source: requirementsArray,
	      strict: false
	    },
	   
	    {
	      type: 'autocomplete',
	      source: validationArray,
	      strict: false
	    },
	  ],
	  contextMenu:true

	  
	});
}
function saveRequirement(){
	var req = {};
	req["id"] = $("#story_id").text();
	req["description"] = $("#summary").val();
	req["title"] = $("#title").val();
	req["sprintId"] = $("#planned_for").val();
	req["priority"]=$("#priority").val();
	// Here we need to get the test step and the validation id for each step.
	dataArray = hot1.getData();
	console.log(dataArray);
	steps = [];
	
	for (i=0;i<dataArray.length;i++){
		step = {};
			if (dataArray[i][0] != null || dataArray[i][1] != null ){
			stepDesc = dataArray[i][0];
			validation = dataArray[i][1];
			req_id=0;
			validation_id = 0;
			// check if the step desc corresponds to a req. title if so get the req id 
			
			for (j=0;j<requirements.length;j++){
				if (stepDesc === requirements[j].title){
					req_id = requirements[j].id;
					break;
				}
			}
			for (k=0;k<validations.length;k++){
				if (validation === validations[k].fieldName){
					validation_id = validations[k].fieldId;
					break;
				}
			}
			step["description"] = stepDesc;
			step["main_Req_id"] = req["id"];
			step["req_id"] = req_id;
			if (req_id != 0){
				step["is_requirement"] = "Y";
			}else{
				step["is_requirement"] = "N";
			}
			step["validation_id"] = validation_id;
			steps.push(step);
		}
	}
	
	
	req["testSteps"] = steps;
	req["fileName"] = $("#file_name").val();
	$.ajax({
		url:"rest/requirements/save",
		type:"POST",
		contentType:"application/json;charset=utf-8",
		data:JSON.stringify(req),
		success:function(response){
			alert (response);
			// load the requirements again
			requirements = getAllRequirements();
			
			console.log(response);
			loadFlowchartJSP(response.req_id);
		},
		error: function(error){
			console.log(error);
			refreshStepArea();
			alert (error.responseText);
		} 
	})
}

function getAllRequirements(){
	
	$.ajax({
		url:"rest/requirements",
		success:function(response){
			console.log("success getting requirements");
			requirements = response;
			
			
		},
		error: function(error){
			
			console.log(error);
		} 
	})
	return requirements;
}
function getAllValidations(){
	
	$.ajax({
		url:"rest/validations",
		success:function(response){
			console.log("success getting validations");
			validations = response;
		},
		error: function(error){
			console.log(error);
		} 
	});
	
	return validations;
}


function getCarData() {
	
	  	validationArray.length=0;
	  	console.log(requirements);
	  	requirementsArray.length = 0;
		 for (i=0;i<validations.length;i++){
			 validationArray.push(validations[i].fieldName);
		 }
		 for (i=0;i<requirements.length;i++){
			 requirementsArray.push(requirements[i].title);
		 }
		 
		 console.log (requirementsArray);
		 console.log(validationArray);
	  
 
}

function refreshStepArea(){
	requirements = getAllRequirements();
	
	initializeStepArea();
}

function bindDumpButton() {
    if (typeof Handsontable === "undefined") {
      return;
    }

    Handsontable.Dom.addEvent(document.body, 'click', function (e) {

      var element = e.target || e.srcElement;

      if (element.nodeName == "BUTTON" && element.name == 'dump') {
        var name = element.getAttribute('data-dump');
        var instance = element.getAttribute('data-instance');
        var hot = window[instance];
        console.log('data of ' + name, hot.getData());
      }
    });
  }



function getReqId(){
	
	$.ajax({
		url:"rest/requirements/getNextReqId",
		success:function(response){
			$("#story_id").text(response);
			 
		},
		error: function(error){
			
			console.log(error);
		} 
	});
	
}

function getAllSprints(){
	
	$.ajax({
		url:"rest/requirements/getSprints",
		success:function(response){
			console.log("success getting requirements");
			planned_for = $("#planned_for");
			$.each(response, function() {
				planned_for.append($("<option />").val(this.id).text(this.name));
			});
			
		},
		error: function(error){
			
			console.log(error);
		} 
	})
	return requirements;
}


function getRequirementsByTitle(){
	var name = $("#search_requirement").val();
	
		$.ajax({
			url:"rest/requirements/getReqByName?reqTitle="+name,
			success:function(response){
				console.log("success getting requirements");
				loadRequriementResults(response);
				
				
			},
			error: function(error){
				
				console.log(error);
			} 
		})
		return requirements;
}

function loadRequriementResults(requirements){
	list = $("#requirement_container");
	 for (i=0;i<requirements.length;i++){
		 	 console.log(requirements[i].id);
		 	 $(list).append('<li onclick = "loadReqJSP()">' +requirements[i].title + '</a></li>' );		 
		 	 
	 }
}
function loadReqJSP(){
	 $("#requirement_area").load("AddRequirement.jsp").dialog();
}


function loadFlowchartJSP(reqId){
	window.location.href = "Flowchart.jsp?reqId="+reqId;
	
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
