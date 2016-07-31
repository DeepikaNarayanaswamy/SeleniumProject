var requirements = ["Login as a registered user","User able to add item to cart","User able to place an order"];
fieldValidations={
    "username": [{'validationrule':"Username should contain letter, number and period",'validationdata':""},{"validationrule":"Username should not be left blank","validationdata":""},{"validationrule":"Username should not be more than 40 characters","validationdata":""},{'validationrule':"Username should not start with or contain any symbols",'validationdata':""}],
    "password":[{'validationrule':"Password should be atleast 6 characters","validationdata":""},{"validationrule":"Password should contain combination of letter, numbers and symbols","validationdata":""},{"validationrule":"Password should not contain spaces and period","validationdata":""},{"validationrule":"Password should not be more than 40 characters","validationdata":""}],
    "email":
    	[{'validationrule':"Enter Email ID without @ symbol and click Login",
    		'validationdata':"sathishibm999yopmail.com"},
    	{"validationrule":"Should not accept continous garbage values like #@$%&*@#$%","validationdata":"^&^sathi"},
    	{"validationrule":"Enter data without username (@domain.com)","validationdata":"sathishibm999"},
    	{"validationrule":"Enter data as Encoded html within email","validationdata":"/sathishibm999@yopmail.com"},
    	{'validationrule':"Enter data as Email ID containing two or more @ symbols",'validationdata':"sathishibm999@@@yopmail.com"},
    	{"validationrule":"Enter data as Leading dot in address",'validationdata':"sathishibm999@yopmail.com."},
    	{"validationrule":"Enter data as Trailing dot in address","validationdata":".sathishibm999@yopmail.com"}
    	,{"validationrule":"Enter data as Unicode chars as address","validationdata":"ѕатЂіѕЂіъм999"},
    	{"validationrule":"Enter data as Missing top level domain (.com/.net/.org) etc","validationdata":"sathishibm999@yopmail"},
    	{"validationrule":"Enter data as Leading dot in front of domain name","validationdata":"sathishibm999@.yopmail.com"},
    	{"validationrule":"Enter data as Mulitple dot in the domain name (email@domain..com)","validationdata":"….sathishibm999@yopmail.com"}
    	]
}
newFieldValidations = {
    "username":[],
    "password":[],
    "email":[]
}
var currentField;
fields = ['username','password','email'];
function cancelRule(rule){
        $(rule).addClass('hiderule');
}
// function to show the different options - save graph/view validations/share with team
// hide the graph part
function showValidations(){
    $("#sample").hide();
    $(".graphOptions").show();
    loadFields();
}
function showShareTeam(){
    $("#sample").hide();
    $(".graphOptions").hide();
}
function loadAllValidations(){

	for (i=0;i<fields.length;i++){
		var ruleDiv = document.createElement("div");
		ruleDiv.id = fields[i] + "rule";
		ruleDiv.className = "row defaultValidations hiderule";
        ruleDiv.innerHTML = fields[i].toUpperCase() + " VALIDATIONS"  
		var listRules = document.createElement('ul');
		listRules.id = fields[i];
		
		
		for(j=0;j<fieldValidations[fields[i]].length;j++){
			console.log(fields[i])
         id = fields[i]+"_"+j;
         $(listRules).append("<li style = 'width:500px' id ="+id+">"+fieldValidations[fields[i]][j].validationrule+"<span onClick =cancelRule('#"+id+"') class ='cancelrule'><i class='fa fa-times' aria-hidden='true'></i></span></li>");
		}
		for(k=0;k<newFieldValidations[fields[i]].length;k++){
			 id = fields[i]+"_"+(j+k);
			 $(listRules).append("<li style = 'width:500px' class =id ="+id+">"+newFieldValidations[fields[i]][k].validationrule+"<span onClick =cancelRule('#"+id+"') class ='cancelrule'><i class='fa fa-times' aria-hidden='true'></i></span>              </li>");
		 }
		$(ruleDiv).append(listRules);
		$(ruleDiv).append("<button onclick=addNewRule('"+fields[i]+"') data-target='#addNewValidation'>Add New Validation for "+fields[i]+"</button>");    
		
		$(ruleDiv).append("<span class = 'saverule' onclick = saveValidations()><i class='fa fa-floppy-o' aria-hidden='true'></i> Save all Validation Rules</span>");
		
		
		$(".container").append(ruleDiv);
		
	}
}
function loadFields(){
    
	if ( $('#validationFields').children().length == 0 ) {
		$("#validationFields").append('<option value ="">Choose field</option>');
         for (i=0;i<fields.length;i++){
            $("#validationFields").append('<option value ='+fields[i]+'>'+fields[i]+'</option>');
        }
        loadAllValidations();
    }
	
	
}

function loadValidations(){
	fieldName = $("#validationFields").val();
    for (i=0;i<fields.length;i++){
        if (fieldName === fields[i]){
            	$("#"+fieldName+"rule").show();
        }else{
            	$("#"+fields[i]+"rule").hide();
        }

    }
    
    
 }
function showRuleModal(fieldname){
	$("#addNewValidation .modal-title").html("Enter validation rule for "+fieldname)
	$("#addNewValidation").modal();
	currentField = fieldname;
	
}
 
function addNewRule(fieldName)
{var newRule = prompt("Enter new rule", "newrule");
	var newdata = prompt("Enter new data", "newdata");
	var ruleJSON = {};
	ruleJSON.validationrule = newRule;  
	ruleJSON.validationdata = newdata;
	if (newRule != "" || newRule != null && newdata != "" || newdata != null )
	{
		console.log(fieldName);
		newFieldValidations[fieldName].push(ruleJSON);
		id = fieldName+"_"+(newFieldValidations[fieldName].length + fieldValidations[fieldName].length-1);
		console.log(id);
		$("#"+fieldName).append("<li id ="+id+">"+newRule+"<span onClick =cancelRule('#"+id+"') class ='cancelrule'><i class='fa fa-times' aria-hidden='true'></i></span></li>");
			
		//loadValidations(fieldName);
	}
	else{
		alert ("Enter valid rule")
	}
}

// Function that saves the final validation rules for a field.
function saveValidations(){
		
		for (i=0;i<fields.length;i++){
			finalFieldValidations[fields[i]].length = 0;
        // loop through the original and new rules and take the one that are not cancelled by the user.
			for (j=0;j< newFieldValidations[fields[i]].length + fieldValidations[fields[i]].length;j++){
				var listElement = $("#"+fields[i]+"_"+j);
				if(!$(listElement).hasClass('hiderule')){
					console.log($(listElement).text());
					finalFieldValidations[fields[i]].push($(listElement).text());    
				}
			}
		}
}




function changeGraph(){
	if ($("#graphSelect").val() == 1){
		initLogin();
		$("#registerGraph").hide();
	}else if ($("#graphSelect").val() == 2){
		initRegister();
		$("#loginGraph").hide();
	}
	else if ($("#graphSelect").val() == 3){
		initCheckout();
		$("#registerGraph").hide();
		$("#loginGraph").hide();
	}
	
}
function saveStory(){
	$("#storySuccess").removeClass("hiderule");
	$("#storySuccess").fadeIn();
	requirements.push($("#summary").val());
	loadRequirements();
	
}

function loadRequirements(){
	$("#newReqGraph").append('<option value ="">Choose Requirement</option>');
    for (i=0;i<requirements.length;i++){
       $("#newReqGraph").append('<option value ='+requirements[i]+'>'+requirements[i]+'</option>');
   }
    
    for (i=0;i<requirements.length;i++){
        $("#graphSelect").append('<option value ='+(i+1)+'>'+requirements[i]+'</option>');
    }
    for (i=0;i<requirements.length;i++){
        $("#graphSelectUnit").append('<option value ='+(i+1)+'>'+requirements[i]+'</option>');
    }
    
    
}

function generateUnitTest(){
	$.ajax({
		url:"UnitTestingServlet",
		method:"POST",
		data:{'fieldValidations':JSON.stringify(fieldValidations)},
		success:function(){
			console.log("success");
		},
		error: function(error){
			console.log(error);
		} 
	})
}
//Add new rule load
$("#addrulepage").on("click", function() {
	loadFields();
});


