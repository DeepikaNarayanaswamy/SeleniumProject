<%@ include file="header.jsp" %>
<body id = "fh5co-work" data-section="home" data-stellar-background-ratio="0.5">
<div id='loader'><img src="images/ajax-loader.gif"/></div>
  
<div class="gradient"></div>
	<div class="container">
	<div class = "row">
		<ul class="nav nav-pills nav-stacked col-md-2">
  			<li><a href="TesterHomePage.jsp">Dashboard</a></li>
			  <li><a href="Flowchart.jsp">Create Flowchart</a></li>
			  <li><a href="#">Add Rule</a></li>
			  <li class="active"><a>Workspace</a></li>
		</ul>
		<div class="alert alert-success fade in hide col-md-2 col-md-offset-4">
			    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			    <strong>Success!</strong> The Testcases are generated.
			  </div>
			  <div class="alert alert-danger fade in hide col-md-4 col-md-offset-4">
			    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			    <strong>Error!</strong> 
		</div>
		
			<div class="col-md-8 text-wrap col-md-offset-1">
				<div class="row">
					<div class="col-md-12 section-heading text-center">
						<h2 class="to-animate fadeInUp animated">Workspace</h2>
						<div class="row">
							<div class="col-md-8 col-md-offset-2 subtext to-animate fadeInUp animated">
								<h3>List of usecases</h3>
							</div>
						</div>
					</div>
				</div>
					
					<div class="row">
						<div id = "usecase_container">
						</div>
						
						<ul id = "flowchartusecase_container" class = "col-md-6">
							<span class="listing hide">	List of Flowcharts</span>
						</ul>
						<div id = "flowchart_area hide" class = "col-md-6">
							<button id = "generate_testcase" class = "btn btn-primary">Generate Testcase</button>
						</div>
					</div>
				
			</div>
	</div>
	</div>
	<div id = "testcase-form" class = "hide" title = "Save Testcase">
		<form>
			Testcase Name
			 <div class = "form-group">
						<input id="f_testcase_name" class="col-md-6 form-control" placeholder="Name" type="text" name="f_testcase_name">
			</div>
			
		</form>
			
	</div>   	
	
<script type="text/javascript">
	
	$(document).ready(function(){

		
	});
</script>
</body>