package com.mbt.common.dtos;

public class TestStep {

	Integer id;
	String description;
	String is_requirement;
	Integer main_Req_id;
	Integer req_id;
	Integer validation_id;
	public Integer getValidation_id() {
		return validation_id;
	}
	public void setValidation_id(Integer validation_id) {
		this.validation_id = validation_id;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIs_requirement() {
		return is_requirement;
	}
	public void setIs_requirement(String is_requirement) {
		this.is_requirement = is_requirement;
	}
	public Integer getMain_Req_id() {
		return main_Req_id;
	}
	public void setMain_Req_id(Integer main_Req_id) {
		this.main_Req_id = main_Req_id;
	}
	public Integer getReq_id() {
		return req_id;
	}
	public void setReq_id(Integer req_id) {
		this.req_id = req_id;
	}
}
