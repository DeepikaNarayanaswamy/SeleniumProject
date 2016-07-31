package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mbt.common.constants.QueryConstants;
import com.mbt.common.dtos.Requirement;
import com.mbt.common.dtos.Validation;
import com.mbt.helper.MySQLConnection;

public class ValidationRuleDAO {

	public static List<Validation>  getAllValidation(){
		
		Connection con = MySQLConnection.getConnection();
		List<Validation> validationList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_ALL_VALIDATION_FIELDS);
			
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				Validation validation = new Validation();
				validation.setFieldId(rs.getInt(QueryConstants.COL_FIELD_ID));
				validation.setFieldName(rs.getString(QueryConstants.COL_FIELD_NAME));
				validationList.add(validation);
			}
		
		}catch(SQLException ex){
			ex.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return validationList;
		
	}
	public static List<String>  getAllValidationRuleforfield(Integer fieldId){
		
		Connection con = MySQLConnection.getConnection();
		List<String> validationList = new ArrayList<>();
		
		try{
		
			PreparedStatement stmt = con.prepareStatement(QueryConstants.GET_VALIDATION_RULES_ON_ID);
			stmt.setInt(1,fieldId);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()){
				
				
				validationList.add(rs.getString(1));
			}
		
		}catch(SQLException ex){
			ex.printStackTrace();
		}
		finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return validationList;
		
	}

}
