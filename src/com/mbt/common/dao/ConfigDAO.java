package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mbt.common.constants.QueryConstants;
import com.mbt.helper.MySQLConnection;

public class ConfigDAO {

	// This method is used to get the file location of the xl
	public static String getFileLocation(){
		
		Connection con = MySQLConnection.getConnection();
		String fileLocation  = null;
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_XL_LOCATION);
			 
			ResultSet rs = stmt.executeQuery();
			if (rs.next()){
				
				fileLocation= rs.getString(1);
				
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
		return fileLocation;
		
	}	
}
