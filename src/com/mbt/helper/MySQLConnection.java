package com.mbt.helper;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;

public class MySQLConnection {


  public static Connection getConnection(){


	Connection connection = null;
	try {
		Class.forName("com.mysql.jdbc.Driver");
	} catch (ClassNotFoundException e) {
		System.out.println("Where is your MySQL JDBC Driver?");
		e.printStackTrace();
			}


	

	try {
		connection = DriverManager
		.getConnection("jdbc:mysql://localhost:3306/testmodulate","root", "root");
	
	} catch (SQLException e) {
		System.out.println("Connection Failed! Check output console");
		e.printStackTrace();
		
	}

	return connection;
  }
}
