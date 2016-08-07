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

@Path("/flowchart")
public class FlowchartService {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Requirement> getAllReqs(){
		return RequirementsDAO.getAllRequirements();
	}
	
	@Path("/save")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public JSONObject saveFlowchart(Flowchart flowchart){
		String status = "success";
		Integer flowchartId = -1;
		try{
		int i;
		
		flowchart.setFlowchartJSON(flowchart.getFlowchartJSON());
		flowchart.setFlowchartName(flowchart.getFlowchartName());
			
		flowchartId = FlowchartDAO.saveFlowchart(flowchart);
		// Here we insert into flowchart usecase mapping table
		UsecaseDAO.insertFlowchartUsecase(flowchartId, flowchart.getUsecaseId());
		
		}catch(Exception ex){
			ex.printStackTrace();
			status = "error :" + ex.getMessage();
		}
		JSONObject jsonStatus = new JSONObject();
		jsonStatus.put("status",status);
		jsonStatus.put("flowchartId", flowchartId);
		return jsonStatus;
	}
	@GET
	@Path("/getFlowchartById")
	@Produces(MediaType.APPLICATION_JSON)
	public Flowchart getFlowchartById(@QueryParam("flowchartId")Integer id){
		return FlowchartDAO.getFlowchart(id);
	}

	
	
	
	@POST
	@Path("/updateFlowchart")
	@Consumes(MediaType.APPLICATION_JSON)
	
	public String updateFlowchartByReqId(Flowchart flowchart){
		return FlowchartDAO.updateFlowchart(flowchart);
	}
	
	
	
}