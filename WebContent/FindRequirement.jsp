<%@ include file="header.jsp" %>
<body onload = "initializeFindReqArea()">
Find Requirement


<div class = "fright">
	<input type = "text" placeholder ="Requirement" id="search_requirement"/>	
</div>
<div class = "clearfix width50 fleft" id = "requirement_container">
List of requirements with the sprint
	<!-- Here we are gonna have the list of sprints / release cycles of a requirement  -->
	<ul></ul>
</div>
</body>