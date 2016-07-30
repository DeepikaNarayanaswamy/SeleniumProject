package com.mbt.common.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mbt.common.constants.QueryConstants;
import com.mbt.helper.MySQLConnection;

public class UserDAO {

	public String checkLogin(String uname, String password) {
		String role = "success";
		Connection con = MySQLConnection.getConnection();
		try {
			PreparedStatement ps = con
					.prepareStatement(QueryConstants.GET_USERID_PASSWORD);

			ps.setString(1, uname);
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();
			if (rs.next()){
				role = rs.getString(3);
				System.out.println("login!!");
			}else{
				role = "error";
			}
		} catch (Exception ex) {
			role = "error";
			ex.printStackTrace();
		}finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return role;
	}
}
