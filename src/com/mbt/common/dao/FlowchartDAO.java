package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mbt.common.constants.QueryConstants;
import com.mbt.common.dtos.Flowchart;
import com.mbt.common.dtos.Requirement;
import com.mbt.helper.MySQLConnection;

public class FlowchartDAO {

	public static void saveFlowchart (Flowchart flowchart){
		String status = "error";
		Connection con = MySQLConnection.getConnection();
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.INSERT_FLOWCHART);
	
		ps.setString(1, flowchart.getFlowchartName());
		ps.setString(2,flowchart.getFlowchartJSON());
		ps.setInt(3,flowchart.getRequirementId());
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
	}
	
	public static Flowchart  getFlowchart(Integer reqId){
		Connection con = MySQLConnection.getConnection();
		Flowchart flowchart = new Flowchart();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_FLOWCHART);
			stmt.setInt(1, reqId);
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
}
