package com.mbt.servlets;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;

import com.mbt.common.dao.ConfigDAO;
import com.mbt.common.dao.FlowchartDAO;
import com.mbt.common.dao.RequirementsDAO;
import com.mbt.common.dao.SprintDAO;
import com.mbt.common.dao.UsecaseDAO;
import com.mbt.common.dtos.Flowchart;
import com.mbt.common.dtos.Requirement;
import com.mbt.common.dtos.Sprint;
import com.mbt.common.dtos.TestStep;
import com.mbt.common.dtos.Usecase;
import com.mbt.helper.MBTHelper;

@Path("/requirements")
public class RequirementsService {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Requirement> getAllReqs(){
		return RequirementsDAO.getAllRequirements();
	}
	
	@Path("/save")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public JSONObject saveRequirement(Requirement requirement){
		String status = "success";
		Integer flowchartId = -1;
		try{
		int i;
		
		RequirementsDAO.insertRequirement(requirement);
		System.out.println(requirement.getTestSteps().size());
		for (i=0;i<requirement.getTestSteps().size();i++){
			RequirementsDAO.insertTestStep(requirement.getTestSteps().get(i));
			
		}
		String fileLocationtoSave = ConfigDAO.getFileLocation();
		// This function will be used to write to the xl file
		
		List<TestStep> steps = new MBTHelper().getAllStepsForRequirement(requirement,fileLocationtoSave);
		// We will generate the flowchart here from the test steops and add to db.
		
		JSONObject flowchartJSON = MBTHelper.getFlowchart(steps);
		Flowchart flowchart = new Flowchart();
		flowchart.setFlowchartJSON(flowchartJSON.toJSONString());
		flowchart.setFlowchartName(requirement.getTitle());
		flowchart.setRequirementId(requirement.getId());
		
		 flowchartId = FlowchartDAO.saveFlowchart(flowchart);
		// Here we insert into flowchart usecase mapping table
		UsecaseDAO.insertFlowchartUsecase(flowchartId, requirement.getUseCaseId());
		// Here we insert into requirment usecase mapping table
		UsecaseDAO.insertReqUsecase(requirement.getId(),requirement.getUseCaseId());
		
		}catch(Exception ex){
			ex.printStackTrace();
			status = "error :" + ex.getMessage();
		}
		JSONObject jsonStatus = new JSONObject();
		jsonStatus.put("status",status);
		jsonStatus.put("req_id",requirement.getId());
		jsonStatus.put("flowchart_id", flowchartId);
		return jsonStatus;
	}
	@GET
	@Path("/getNextReqId")
	public String getRequirementId(){
		int req_id = 0;
		try{
		int i;
		
		req_id = RequirementsDAO.getNextReqId();
		
		}catch(Exception ex){
			ex.printStackTrace();
			
		}
		return req_id+"";
	}
	

	@GET
	@Path("/getSprints")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Sprint> getAllSprints(){
		return SprintDAO.getAllSprints();
	}
	
	@GET
	@Path("/getReqByName")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Requirement> getReqbyName(@QueryParam("reqTitle")String title){
		return RequirementsDAO.getReqByName(title);
	}
	
	
	
	@POST
	@Path("/updateFlowchart")
	@Consumes(MediaType.APPLICATION_JSON)
	
	public String updateFlowchartByReqId(Flowchart flowchart){
		return FlowchartDAO.updateFlowchart(flowchart);
	}
	
	@GET
	@Path("/getUsecases")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usecase> getAllUsecases(){
		return UsecaseDAO.getUsecases();
	}
	
}
