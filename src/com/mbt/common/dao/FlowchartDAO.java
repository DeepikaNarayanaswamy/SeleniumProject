package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mbt.common.constants.QueryConstants;
import com.mbt.common.dtos.Flowchart;
import com.mbt.helper.MySQLConnection;

public class FlowchartDAO {

	public static Integer saveFlowchart (Flowchart flowchart){
		String status = "error";
		Connection con = MySQLConnection.getConnection();
		Integer flowchartId = -1;
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.INSERT_FLOWCHART,Statement.RETURN_GENERATED_KEYS);
	
		ps.setString(1, flowchart.getFlowchartName());
		ps.setString(2,flowchart.getFlowchartJSON());
		if (flowchart.getRequirementId() != null)
			ps.setInt(3,flowchart.getRequirementId());
		else
		{
			// Not associated with any req.
			ps.setInt(3,-1);
		}
		ps.executeUpdate();
		
		// get the autoincremented flowchart id
	    ResultSet rs = ps.getGeneratedKeys();

	    if (rs.next()) {
	    	flowchartId = rs.getInt(1);
	    } else {

	        // throw an exception from here
	    }
		System.out.println(flowchartId);
		status = "success";
		
		
		}catch(SQLException ex){
			status = "error";
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
		return flowchartId;
	}
	
	public static Flowchart  getFlowchart(Integer id){
		Connection con = MySQLConnection.getConnection();
		Flowchart flowchart = new Flowchart();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_FLOWCHART);
			stmt.setInt(1, id);
			ResultSet rs = stmt.executeQuery();
			if (rs.next()){
				flowchart.setFlowchartName(rs.getString(1));
				flowchart.setFlowchartJSON(rs.getString(2));
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
		System.out.println(flowchart.getFlowchartJSON());
		return flowchart;
		
	}
	
	public static String updateFlowchart(Flowchart flowchart){
		String status = "error";
		Connection con = MySQLConnection.getConnection();
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.UPDATE_FLOWCHART);
	
		
		ps.setString(1,flowchart.getFlowchartJSON());
		ps.setInt(2,flowchart.getFlowchartId());
		ps.executeUpdate();
		status = "success";
		}catch(SQLException ex){
			status = "error";
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
		return status;
	}
}
