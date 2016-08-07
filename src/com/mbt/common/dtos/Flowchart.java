package com.mbt.common.dtos;

public class Flowchart {

	private String flowchartName;
	private Integer usecaseId;
	public Integer getUsecaseId() {
		return usecaseId;
	}
	public void setUsecaseId(Integer usecaseId) {
		this.usecaseId = usecaseId;
	}
	public String getFlowchartName() {
		return flowchartName;
	}
	public void setFlowchartName(String flowchartName) {
		this.flowchartName = flowchartName;
	}
	public Integer getFlowchartId() {
		return flowchartId;
	}
	public void setFlowchartId(Integer flowchartId) {
		this.flowchartId = flowchartId;
	}
	public String getFlowchartJSON() {
		return flowchartJSON;
	}
	public void setFlowchartJSON(String flowchartJSON) {
		this.flowchartJSON = flowchartJSON;
	}
	public Integer getRequirementId() {
		return requirementId;
	}
	public void setRequirementId(Integer requirementId) {
		this.requirementId = requirementId;
	}
	private Integer flowchartId;
	private String flowchartJSON;
	private Integer requirementId;
	
}
