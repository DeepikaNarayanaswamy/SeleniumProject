    

$("#myPaletteDiv").height("500");
$("#myDiagramDiv").height("500");
$('canvas').height("500");
 
finalFieldValidations = {'username':[],'password':[],'email':[]};
function generateTestCases(){
	console.log("generate test cases");
	$.ajax({
		url:"GenerateTestCases",
		method:"POST",
		data:{'fieldValidations':JSON.stringify(finalFieldValidations)},
		success:function(){
			console.log("success");
		},
		error: function(error){
			console.log(error);
		} 
	})
}