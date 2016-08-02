package com.mbt.servlets;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.mbt.common.dao.ConfigDAO;
import com.mbt.common.dao.RequirementsDAO;
import com.mbt.common.dao.SprintDAO;
import com.mbt.common.dtos.Requirement;
import com.mbt.common.dtos.Sprint;
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
	public String saveRequirement(Requirement requirement){
		String status = "success";
		try{
		int i;
		
		RequirementsDAO.insertRequirement(requirement);
		for (i=0;i<requirement.getTestSteps().size();i++){
			RequirementsDAO.insertTestStep(requirement.getTestSteps().get(i));
			
		}
		String fileLocationtoSave = ConfigDAO.getFileLocation();
		// This function will be used to write to the xl file
		MBTHelper.getAllStepsForRequirement(requirement,fileLocationtoSave);
		}catch(Exception ex){
			ex.printStackTrace();
			status = "error :" + ex.getMessage();
		}
		return status;
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
}
