jQuery.ajaxSetup({
	  beforeSend: function() {
	     $('#loader').show();
	  },
	  complete: function(){
	     $('#loader').hide();
	  },
	  success: function() {}
	});
TMWorkspace = {
 flowchartUsecases : [],
	loadUsecases : function(){

			var container = $("#usecase_container");
			var i;
			
			// globalusecases comes from requirements.js
			for (i=0;i<globalUseCases.length;i++)
				{
					var usecasebox = document.createElement('div');
					$(usecasebox).text(globalUseCases[i].name);
					$(usecasebox).attr("id","usecase_"+globalUseCases[i].id);
					$(usecasebox).addClass("col-md-2 fh5co-project-item usecase-item");
					$(usecasebox).click(function(){
						TMWorkspace.getFlowchartbyusecase(this.id.split('_')[1]);
					});
					$(container).append(usecasebox);
				}
			$("#generate_testcase").click(function(){
				TMWorkspace.generateTestcase();
			});
	},

	getFlowchartbyusecase :function (usecaseId){
		usecasePresent = false;
		// resetting flowcharts 
		for (i=0;i<TMWorkspace.flowchartUsecases.length;i++){
			if (TMWorkspace.flowchartUsecases[i].usecaseId == usecaseId)
				TMWorkspace.flowchartUsecases[i].flowcharts.length = 0;
		}	
		$.ajax({
			url:"rest/flowchart/getFlowchartsByUsecaseId?usecaseId="+usecaseId,
			success:function(response){
				console.log("success getting flowchart",response);
				flist = $("#flowchartusecase_container");
				$(flist).empty();
				if (response.length != 0){
					
					var usecase = {};
					usecase.usecaseId = response[0].usecaseId;
					usecase.flowcharts = response;
					TMWorkspace.flowchartUsecases.push(usecase);
					TMWorkspace.showFlowchartUsecaselist(usecaseId);
					
				}
			},
			error: function(error){
				flist = $("#flowchartusecase_container");
				$(flist).empty();
				console.log(error);
			} 
		});
		
},
	showFlowchartUsecaselist  : function(usecaseId){
		flist = $("#flowchartusecase_container");
		$("#flowchart_area").removeClass("hide");
		$(".listing").removeClass("hide");
		$(flist).empty();
		usecaseTitle = document.createElement('span');
		// here we need to set the title fo the usecase cleicked
		
		var flowcharts;
		for (i=0;i<TMWorkspace.flowchartUsecases.length;i++){
			if (usecaseId == TMWorkspace.flowchartUsecases[i].usecaseId){
				flowcharts =  TMWorkspace.flowchartUsecases[i].flowcharts;
			}
		}
		
		for (j=0;j<flowcharts.length;j++){
			flistItem = document.createElement('li');
			console.log(flowcharts[j]);
			$(flistItem).attr('id',"uf_"+usecaseId+"_"+flowcharts[j].flowchartId);
			$(flistItem).text(flowcharts[j].flowchartName);
			$(flistItem).addClass('pointer flist');
			$(flistItem).click(function(){ // when #showhidecomment is clicked
		        window.location.href = "Flowchart.jsp?flowchartId="+this.id.split('_')[2]; // load the sample.jsp page in the #chkcomments element
		    }); 
			$(flist).append(flistItem);
		};
	},

 generateTestcase:function(){
	 var flowchartids = [];
	 $.each($("#flowchartusecase_container").children(),function(){
		 flowchartids.push(this.id.split('_')[2]);
	 });
	 $( "#testcase-form").removeClass("hide");
	 dialog = $( "#testcase-form" ).dialog({
			   height: 400,
		      width: 700,
		      modal: true,
		      buttons: {
		        "Save": function(){
		        	dialog.dialog( "close" );	

		       	 $.ajax({
		       			url:"rest/flowchart/generateTestcase?testcaseName="+$("#f_testcase_name").val()+"&flowchartIds="+flowchartids,
		       			type:"POST",
		       			success:function(response){
		       				console.log("success");
		       				$(".alert-success").removeClass("hide");
		       			},
		       			error: function(error){
		       				$(".alert-danger").removeClass("hide");
		       			} 
		       		});
		       	 
		        	
		        },
		        Cancel: function() {
		        	dialog.dialog( "close" ); 
		        }
		      },
		      close: function() {
		        
		    	  dialog.dialog( "close" );
		      }
		    });
	 
	 
	 
 }
};
