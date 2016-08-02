<%@ include file="header.jsp" %>
<body>
Find Requirement


<div class = "fright">
	<input type = "text" placeholder ="Requirement" id="search_requirement"/><i class="fa fa-search" aria-hidden="true" onclick = "getRequirementsByTitle()"></i>	
</div>
<ul class = "clearfix width50 fleft" id = "requirement_container">
List of requirements with the sprint
	<!-- Here we are gonna have the list of sprints / release cycles of a requirement  -->
	
</ul>
<div id = "requirement_area">
</div>
</body>