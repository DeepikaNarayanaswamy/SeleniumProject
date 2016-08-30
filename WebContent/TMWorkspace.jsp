<%@ include file="header.jsp" %>
<body id = "fh5co-work" data-section="home" data-stellar-background-ratio="0.5">
<div class="gradient"></div>
	<div class="container">
	<div class = "row">
		<ul class="nav nav-pills nav-stacked col-md-2">
  			<li><a href="TesterHomePage.jsp">Dashboard</a></li>
			  <li><a href="Flowchart.jsp">Create Flowchart</a></li>
			  <li><a href="#">Add Rule</a></li>
			  <li class="active"><a>Workspace</a></li>
		</ul>
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
						<ul id = "flowchartusecase_container" class = "clearfix">
						</ul>
						<div id = "flowchart_area"></div>
					</div>
				
			</div>
	</div>
	</div>
<script type="text/javascript">
	
	$(document).ready(function(){

		
	});
</script>
</body>