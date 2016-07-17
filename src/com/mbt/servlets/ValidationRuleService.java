package com.mbt.servlets;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.mbt.common.dao.ValidationRuleDAO;
import com.mbt.common.dtos.Validation;

@Path("/validations")
public class ValidationRuleService {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Validation> getAllValidations(){
		return ValidationRuleDAO.getAllValidation();
	}
	
}
