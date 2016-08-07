<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Tester Dashboard</title>
<%@ include file="header.jsp" %>
</head>

<body>

<div class = "container">
	<div class = "child_container">
	<h3>Create Flowchart </h3> 
	
	<a class = "link" href = "Flowchart.jsp">New Flowchart</a>
	</div>
	
	<div>
	
			<div class = "width30 fleft child_container">
					<h4>Add a VALIDATION RULE</h4>
			<span class = "width50 fleft">
				<button name = "addPageObject">Add a page object</button>
			</span>
			<span class = "width50 fleft">
				<button name = "addRule">Add a rule</button>
			</span>
		
		</div>
		
		<div class = "width30 fleft child_container">
			<h4>View Requirements</h4>
		<button name = "Searchreqs">Search Requirements</button>
			
		</div>
		
		<div class = "width30 fleft child_container">
			<h4>TM Workspace</h4>
		<button name = "tmWorkspace">Get Me there</button>
			
		</div>
	</div>
</div>
</body>

</html>