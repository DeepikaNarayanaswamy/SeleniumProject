package com.mbt.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mbt.common.dao.UserDAO;

/**
 * Servlet implementation class LoginServlet
 */

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		UserDAO userDAO = new UserDAO();
		String respose = userDAO.checkLogin(request.getParameter("username"),request.getParameter("password"));
		request.getRequestDispatcher("index.jsp").include(request, response);  
		if (respose.equals("success"))
			{
			HttpSession session = request.getSession(true);
		    String username = request.getParameter("username");
		    session.setAttribute("username", username);
			
			  
	          
			
			}
		else{
			request.getRequestDispatcher("login.jsp").include(request, response);
		}
		
	}

}
