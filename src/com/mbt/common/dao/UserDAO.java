package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mbt.common.constants.QueryConstants;
import com.mbt.helper.MySQLConnection;

public class UserDAO {

	public String checkLogin(String uname, String password) {
		String status = "success";
		Connection con = MySQLConnection.getConnection();
		try {
			PreparedStatement ps = con
					.prepareStatement(QueryConstants.GET_USERID_PASSWORD);

			ps.setString(1, uname);
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();
			if (rs.first()){
				System.out.println("login!!");
			}
		} catch (Exception ex) {
			status = "error";
			ex.printStackTrace();
		}finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return status;
	}
}
