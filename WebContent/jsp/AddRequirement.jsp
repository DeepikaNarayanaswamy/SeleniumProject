										<div class="field half first">
											<label for="story_id">User story ID</label>
											<input type="text" name="story_id" id="story_id" />
										</div>
										
										<div class="field half first" style="float:none;">
											<label for="title">Title</label>
											<input type="text" name="title" id="title" />
										</div>
										
										<div class="field half first" style="float:none;">
											<label for="summary">Summary/Description</label>
											<textarea type="text" name="summary" id="summary" rows = "10" > </textarea>
										</div>

										<div class="field half first">
											<label for="email">Acceptance Test/Criteria</label>
											<input type="text" name="email" id="email" />
										</div>

										<div class="field half first" style="float:none;">
										<label for="email">Select Priority</label>
											
											<select>
  											<option value="Low">Low</option>
											  <option value="Medium">Medium</option>
											  <option value="High">High</option>
											  
											</select>
										</div>
										<div class="field">
											<label for="message">Comments (if any)</label>
											<textarea name="message" id="message" rows="5"></textarea>
										</div>
										
										<%@ include file = "TestModulate.jsp" %>
										<div class="field half first">
											<label for="story_id">Enter file name to save :</label>
											<input type="text" name="file_name" id="file_name" />
										</div>
														
								<ul class="actions">
								<li><button value = "Save" onclick = "saveRequirement()">Save</button></li>
							
								</ul>