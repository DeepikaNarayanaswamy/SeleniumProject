package com.mbt.servlets;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.mbt.common.dao.RequirementsDAO;
import com.mbt.common.dtos.Requirement;
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
		// This function will be used to write to the xl file
		MBTHelper.getAllStepsForRequirement(requirement);
		}catch(Exception ex){
			ex.printStackTrace();
			status = "error :" + ex.getMessage();
		}
		return status;
	}
}
