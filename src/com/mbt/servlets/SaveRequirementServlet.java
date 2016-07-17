package com.mbt.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mbt.common.dao.RequirementsDAO;
import com.mbt.common.dtos.Requirement;

/**
 * Servlet implementation class SaveRequirementServlet
 */

public class SaveRequirementServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveRequirementServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			Requirement Req = new Requirement();
			Req.setId(new Integer(request.getParameter("story_id")));
			Req.setTitle(request.getParameter("title"));
			Req.setDescription(request.getParameter("summary"));
			
			RequirementsDAO.insertRequirement(Req);
			
		
	}

}
