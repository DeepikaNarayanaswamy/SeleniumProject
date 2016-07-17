package com.mbt.common.dtos;

import java.util.List;

public class Validation {

	Integer fieldId;
	String  fieldName;
	public Integer getFieldId() {
		return fieldId;
	}
	public void setFieldId(Integer fieldId) {
		this.fieldId = fieldId;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public List<String> getValidationRules() {
		return validationRules;
	}
	public void setValidationRules(List<String> validationRules) {
		this.validationRules = validationRules;
	}
	List<String> validationRules;
}
