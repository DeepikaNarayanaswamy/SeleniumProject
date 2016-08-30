<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Tester Dashboard</title>
<%@ include file="header.jsp" %>
</head>

<body id="fh5co-home" data-section="home" style="background-image: url(images/full_image_2.jpg);" data-stellar-background-ratio="0.5">

<div class = "row gradient">

	<div class = "col-md-4">
	<h3>Create Flowchart </h3> 
	
	<a class = "link" href = "Flowchart.jsp">New Flowchart</a>
	</div>
	
	<div class = "col-md-4">
	
			<div class = "width30 fleft child_container">
					<h4>Add a VALIDATION RULE</h4>
			
			<span class = "width50 fleft">
				<button name = "addRule">Add a rule</button>
			</span>
		
	</div>
	
		<div class = "col-md-4">
			<h4>TM Workspace</h4>
		<a href = "TMWorkspace.jsp" class = "link">Get Me there</a>
			
		</div>
		<!-- 
		<div class = "width30 fleft child_container">
			<h4>View Requirements</h4>
		<button name = "Searchreqs">Search Requirements</button>
			
		</div> -->
		
	</div>
</div>
</body>

</html> --%>
<%@ include file="header.jsp" %>
<section id = "fh5co-work" data-section="home"  data-stellar-background-ratio="0.5">
		<div class="gradient"></div>
		<div class="container"  >
			<div class="text-wrap">
				
				<div class="row">
					<div class="col-md-12 section-heading text-center">
						<h2 class="to-animate fadeInUp animated">Dashboard</h2>
						
					</div>
				</div>
			
					<div class="row fh5co-block">
						<div class = "col-md-4 fh5co-person">
							<div class="fh5co-text">
								<i class="fh5co-intro-icon icon-wrench"></i>
								<h3>Create Flowchart </h3> 
								<a class = "btn btn-primary" href = "Flowchart.jsp">New Flowchart</a>
							</div>
						</div>
					<div class = "col-md-4 fh5co-person">
							<div class="fh5co-text">
							<i class="fh5co-intro-icon icon-wrench"></i>
							<h3>Add a Validation Rule</h3>
							<a href = "TMWorkspace.jsp" class = "btn btn-primary">Add a rule</a>
							
							</div>	
									
					</div>
					<div class = "col-md-4 fh5co-person">
						<div class="fh5co-text">
							<i class="fh5co-intro-icon icon-bulb"></i>
							<h3>TM Workspace</h3>
						<a href = "TMWorkspace.jsp" class = "btn btn-primary">Get Me there</a>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	
	</section>
