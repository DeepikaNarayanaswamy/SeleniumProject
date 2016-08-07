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
import com.mbt.common.dtos.Usecase;
import com.mbt.helper.MySQLConnection;

public class UsecaseDAO {

	public static List<Usecase> getUsecases(){
		
		Connection con = MySQLConnection.getConnection();
		List<Usecase> usecaseList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_USECASES);
			
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				Usecase usecase = new Usecase();
				usecase.setId(rs.getInt(1));
				usecase.setName(rs.getString(2));
				usecaseList.add(usecase);
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
		return usecaseList;
		
	}
	// This method inserts the the req and usecase  in req_usecase_mappign table.
	public static void insertReqUsecase (Integer req_id,Integer usecase_id){
		
		Connection con = MySQLConnection.getConnection();
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.INSERT_REQ_USECASE);
		ps.setInt(1, req_id);		
		ps.setInt(2,usecase_id);
		ps.executeUpdate();
		System.out.println("Success inserting into req_usecase table");
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
	
	public static void insertFlowchartUsecase (Integer flowchart_id,Integer usecase_id){
		
		Connection con = MySQLConnection.getConnection();
		try{
		PreparedStatement ps = con.prepareStatement(QueryConstants.INSERT_FLOWCHART_USECASE);
		ps.setInt(1, flowchart_id);		
		ps.setInt(2,usecase_id);
		ps.executeUpdate();
		System.out.println("Success inserting into flowchart_usecase table");
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
	
	public static List<Flowchart> getFlowchartByUsecaseId(Integer usecaseId){
		
		Connection con = MySQLConnection.getConnection();
		List<Flowchart> flowcharts = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_FLOWCHART_BY_USECASE_ID);
			stmt.setInt(1, usecaseId);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				Flowchart flowchart = new Flowchart();
				flowchart.setFlowchartId(rs.getInt(1));
				flowchart.setFlowchartName(rs.getString(2));
				flowchart.setFlowchartJSON(rs.getString(3));
				flowchart.setUsecaseId(usecaseId);
				flowcharts.add(flowchart);
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
		return flowcharts;
	
		
		
	}
}
