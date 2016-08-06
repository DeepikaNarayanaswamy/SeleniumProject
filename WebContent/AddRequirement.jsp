<%@ include file="header.jsp" %>
<body onload = "init();">

<div class = "requriment_container">
	<div>
	<span class="fleft width40">
		<label for="story_id">User story ID</label>

		
	</span>
	<span id = "story_id"></span>
	</div>
	
	<div class="clearfix mar10">
	<span class="fleft width40">
		<label for="title">Title</label>
	</span>
	<span class="fleft">
		<input type="text" name="title" id="title" size="50" />
	</span>
	</div>
	
	

	<div class="clearfix">
	
	<div class = "fleft width40">
	<span class="fleft width40"><label for="priority">Select Priority</label></span>
	<span> 	<select id = "priority">
			<option value="Low">Low</option>
		  <option value="Medium">Medium</option>
		  <option value="High">High</option>
		  
		</select>
	</span>
	</div>

	<div class="fleft width40">
		<span class="fleft width40"><label for="planned_for">Planned for</label></span>
		<select id = "planned_for">
			
=======
	</span>
	</div>
	
	<div class="clearfix mar10">
	<span class="fleft width40">
		<label for="title">Title</label>
	</span>
	<span class="fleft">
		<input type="text" name="title" id="title" size="50" />
	</span>
	</div>
	
	

	<div class="clearfix">
	
	<div class = "fleft width40">
	<span class="fleft width40"><label for="priority">Select Priority</label></span>
	<span> 	<select id = "priority">
			<option value="Low">Low</option>
		  <option value="Medium">Medium</option>
		  <option value="High">High</option>
		  
		</select>
	</span>
	</div>

	<div class="fleft width40">
		<span class="fleft width40"><label for="planned_for">Planned for</label></span>
		<select id = "planned_for">
			<option value="Low">SPrint 1</option>
		  <option value="Medium">Sprint 2</option>
		  <option value="High">Sprint 3</option>
>>>>>>> branch 'version1' of https://github.com/DeepikaNarayanaswamy/SeleniumProject
		  
		</select>
	</div>
	</div>

	<div class="clearfix">
	
	<div class = "fleft width40">
	<span class="fleft width40"><label for="test_owner">Test Owner</label></span>
	<span> 	<select id = "test_owner">
			<option value="Low">Deepika</option>
		  <option value="Medium">Harish</option>
		  <option value="High">sathish</option>
		  
		</select>
	</span>
	</div>

	<div class="fleft width40">
		<span class="fleft width40"><label for="owned_by">Owned By</label></span>
		<select id = "owned_by">
			<option value="Low">Deepika</option>
		  <option value="Medium">Harish</option>
		  <option value="High">Sathish</option>
		  
		</select>
	</div>
	</div>
	
	<div class="clearfix">
		<span class = "fleft width16"><label for="tags">Tags</label></span>
		<span class = "fleft"><select id = "tags">
			<option value="Low">Deepika</option>
		  <option value="Medium">Harish</option>
		  <option value="High">Sathish</option>
		  
		</select></span>
	</div>

	<div class="clearfix">
		<span class = "fleft width40"><label for="summary">Summary/Description</label></span>
		<span class = "fleft"><textarea type="text" name="summary" id="summary" rows = "10" cols="50" > </textarea></span>
	</div>

	<div class="clearfix">

		<span class="fleft width40"><label for="message">Comments (if any)</label></span>
			
		<span class = "fleft"><textarea name="message" id="message" rows="10" cols="50"></textarea></span>
	</div>
	
	<div id="stepsArea" class=" clearfix hot handsontable htColumnHeaders">
		
		
	</div>
	
	<div class="clearfix">
		<span class="fleft width40"><label for="story_id">Enter file name to save :</label></span>
		<span class="fleft"><input type="text" name="file_name" id="file_name" size="50"/></span>
	</div>
					
	<div>
	<button value = "Save" onclick = "saveRequirement()">Save</button>
	</div>
	
	<div class = "link">
	<a href = "Flowchart.jsp">Show Graph</a>
	</div>
</div>
<div id = "flowchart_area">
</div>
</body>								
										