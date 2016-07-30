package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mbt.common.constants.QueryConstants;
import com.mbt.common.dtos.Requirement;
import com.mbt.common.dtos.Sprint;
import com.mbt.helper.MySQLConnection;

public class SprintDAO {

	public static List<Sprint>  getAllSprints(){
		
		Connection con = MySQLConnection.getConnection();
		List<Sprint> sprintList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_SPRINT);
			
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				Sprint sprint = new Sprint();
				sprint.setId(rs.getInt(1));
				sprint.setName(rs.getString(2));
				sprintList.add(sprint);
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
		return sprintList;
		
	}
}
