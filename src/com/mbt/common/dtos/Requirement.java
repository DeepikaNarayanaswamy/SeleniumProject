package com.mbt.common.dtos;

import java.util.List;

public class Requirement {
	
	private Integer id;
	private String title;
	private String description;
	private List<TestStep> testSteps;
	private String fileName;
	private Integer sprintId;
	private String priority;
	public Integer getSprintId() {
		return sprintId;
	}
	public void setSprintId(Integer sprintId) {
		this.sprintId = sprintId;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public List<TestStep> getTestSteps() {
		return testSteps;
	}
	public void setTestSteps(List<TestStep> testSteps) {
		this.testSteps = testSteps;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}
