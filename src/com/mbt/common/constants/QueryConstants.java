package com.mbt.common.constants;

public class QueryConstants {

	public static final String INSERT_UPDATE_REQUIREMENT = "INSERT INTO REQUIREMENT (ID,TITLE,DESCRIPTION) VALUES (?,?,?)";
	public static final String GET_ALL_REQUIREMENTS = "SELECT ID,TITLE,DESCRIPTION FROM REQUIREMENT;";
	public static final String COL_TITLE = "TITLE";
	public static final String COL_ID = "ID";
	
	public static final String INSERT_TEST_STEP = "INSERT INTO TEST_STEP (DESCRIPTION,IS_REQUIREMENT,MAIN_REQUIREMENT_ID,REQUIREMENT_ID,validation_id) VALUES (?,?,?,?,?)";
	public static final String GET_TEST_STEPS_FOR_REQUIREMENT = "SELECT ID,DESCRIPTION,VALIDATION_ID,IS_REQUIREMENT,REQUIREMENT_ID FROM TEST_STEP WHERE MAIN_REQUIREMENT_ID = ?";
	public static final String GET_ALL_VALIDATION_FIELDS = "SELECT FIELD_ID,FIELD_NAME FROM VALIDATION_FIELD;";
	public static final String COL_FIELD_ID = "FIELD_ID";
	public static final String COL_FIELD_NAME = "FIELD_NAME";
	public static final String GET_TEST_STEP_ON_REQ_ID = "SELECT DESCRIPTION FROM TEST_STEP WHERE REQUIREMENT_ID = ?";
	public static final String GET_VALIDATION_RULES_ON_ID = "SELECT RULE_DESCRIPTION FROM VALIDATION_RULE WHERE FIELD_ID = ?";
	public static final String FILE_LOCATION = "C:/Users/user/Desktop/";
}
