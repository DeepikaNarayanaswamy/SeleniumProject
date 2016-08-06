package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mbt.common.constants.QueryConstants;
import com.mbt.common.dtos.Requirement;
import com.mbt.common.dtos.TestStep;
import com.mbt.helper.MySQLConnection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;

public class RequirementsDAO {

	
	public static void insertRequirement(Requirement requirement){
		Connection con = MySQLConnection.getConnection();
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.INSERT_UPDATE_REQUIREMENT);
		ps.setInt(1, requirement.getId().intValue());
		ps.setString(2, requirement.getTitle());
		ps.setString(3,requirement.getDescription());
		ps.setString(4, requirement.getPriority());
		ps.setInt(5,requirement.getSprintId());
		ps.executeUpdate();
		}catch(SQLException ex){
			ex.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		
	}
	
	public static List<Requirement>  getAllRequirements(){
	
		Connection con = MySQLConnection.getConnection();
		List<Requirement> reqList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_ALL_REQUIREMENTS);
			
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				Requirement req = new Requirement();
				req.setId(rs.getInt(QueryConstants.COL_ID));
				req.setTitle(rs.getString(QueryConstants.COL_TITLE));
				req.setSprintId(rs.getInt(QueryConstants.COL_SPRINT_ID));
				reqList.add(req);
			}
		
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return reqList;
		
	}
	
	public static void insertTestStep(TestStep testStep){
		Connection con = MySQLConnection.getConnection();
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.INSERT_TEST_STEP);
		ps.setString(1, testStep.getDescription());
		if (testStep.getReq_id() != 0){
			ps.setString(2, "Y");
		}else{
			ps.setString(2, "N");
		}
		ps.setInt(3,testStep.getMain_Req_id());
		ps.setInt(4,testStep.getReq_id());
		//ps.setInt(5,testStep.getValidation_id());
		ps.executeUpdate();
		}catch(SQLException ex){
			ex.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		
	}
	
	
	public static List<TestStep> getStepsonMainReqId(Integer maiReqId){
		
		Connection con = MySQLConnection.getConnection();
		List<TestStep> stepList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_TEST_STEPS_FOR_REQUIREMENT);
			stmt.setInt(1,maiReqId);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				TestStep step = new TestStep();
				step.setId(rs.getInt(1));
				step.setDescription(rs.getString(2));
				step.setValidation_id(rs.getInt(3));
				
				step.setIs_requirement(rs.getString(4));
				step.setReq_id(rs.getInt(5));
				stepList.add(step);
			}
		
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return stepList;
		
	}
	
	/*
	 * Method that returns the next req.id 
	 */
	public static int getNextReqId(){
		
		Connection con = MySQLConnection.getConnection();
		int req_id = -1;
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_NEXT_REQ_ID);
			 
			ResultSet rs = stmt.executeQuery();
			if (rs.next()){
				
				req_id = rs.getInt(1);
				System.out.println("req_id = " + req_id);
			}
			if (req_id == 0){
				req_id = 1;
			}
		
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return req_id;
		
	}

	public static List<Requirement> getReqByName(String name){
	
		Connection con = MySQLConnection.getConnection();
		
		List<Requirement> reqList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_REQUIRMENT_BY_NAME);
			stmt.setString(1,name + "%");
			
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				Requirement req = new Requirement();
				req.setId(rs.getInt(1));
				req.setTitle(rs.getString(2));
				reqList.add(req);
			}
		
		}catch(SQLException ex){
			ex.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return reqList;
	
	}

	
}
