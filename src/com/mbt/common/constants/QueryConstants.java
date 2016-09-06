package com.mbt.common.constants;

public class QueryConstants {

	public static final String INSERT_UPDATE_REQUIREMENT = "INSERT INTO REQUIREMENT (ID,TITLE,DESCRIPTION,PRIORITY,SPRINT_ID) VALUES (?,?,?,?,?)";
	public static final String GET_ALL_REQUIREMENTS = "SELECT ID,TITLE,DESCRIPTION,SPRINT_ID FROM REQUIREMENT;";
	public static final String COL_TITLE = "TITLE";
	public static final String COL_ID = "ID";
	
	public static final String INSERT_TEST_STEP = "INSERT INTO TEST_STEP (DESCRIPTION,IS_REQUIREMENT,MAIN_REQUIREMENT_ID,REQUIREMENT_ID) VALUES (?,?,?,?)";
	public static final String GET_TEST_STEPS_FOR_REQUIREMENT = "SELECT ID,DESCRIPTION,VALIDATION_ID,IS_REQUIREMENT,REQUIREMENT_ID FROM TEST_STEP WHERE MAIN_REQUIREMENT_ID = ?";
	public static final String GET_ALL_VALIDATION_FIELDS = "SELECT FIELD_ID,FIELD_NAME FROM VALIDATION_FIELD;";
	public static final String COL_FIELD_ID = "FIELD_ID";
	public static final String COL_FIELD_NAME = "FIELD_NAME";
	public static final String GET_TEST_STEP_ON_REQ_ID = "SELECT DESCRIPTION FROM TEST_STEP WHERE REQUIREMENT_ID = ?";
	public static final String GET_VALIDATION_RULES_ON_ID = "SELECT RULE_DESCRIPTION FROM VALIDATION_RULE WHERE FIELD_ID = ?";
	public static final String FILE_LOCATION = "C:/Users/user/Desktop/";
	public static final String GET_USERID_PASSWORD = "SELECT USER_ID,PASSWORD,ROLE,LAST_LOGIN FROM USER WHERE USER_ID = ? AND PASSWORD = ?";
	public static final String GET_NEXT_REQ_ID = "SELECT max(id)+1 FROM testmodulate.requirement;";
	public static final String GET_XL_LOCATION = "SELECT parameter_value FROM testmodulate.config where parameter_name = 'XL_LOCATION';";
	public static final String GET_SPRINT = "SELECT sprint_id,sprint_name from testmodulate.SPRINT;";
	public static final String GET_SPRINT_NAME = "SELECT sprint_name from testmodulate.SPRINT where sprint_id = ?";
	public static final String COL_SPRINT_ID = "SPRINT_ID";
	public static final String GET_REQUIRMENT_BY_NAME = "SELECT ID,TITLE FROM testmodulate.REQUIREMENT WHERE TITLE LIKE ?";
	public static final String INSERT_FLOWCHART = "INSERT INTO testmodulate.FLOWCHART (FLOWCHART_NAME,FLOWCHART_JSON,REQ_ID) VALUES (?,?,?);";
	public static final String GET_FLOWCHART = "SELECT FLOWCHART_NAME,FLOWCHART_JSON,FU.usecase_id FROM testmodulate.FLOWCHART  F "+
							" inner join testmodulate.flowchart_usecase_mapping FU "+ 
							" on (F.id = FU.flowchart_id) where F.id = ? ";
	public static final String UPDATE_FLOWCHART = "UPDATE testmodulate.FLOWCHART set FLOWCHART_JSON = ? WHERE id = ?";
	public static final String GET_USECASES = "SELECT id,name from  testmodulate.USECASE";
	public static final String INSERT_FLOWCHART_USECASE = "INSERT INTO testmodulate.flowchart_usecase_mapping (flowchart_id,usecase_id) VALUES (?,?)";
	public static final String INSERT_REQ_USECASE = "INSERT INTO testmodulate.req_usecase_mapping (req_id,usecase_id) VALUES (?,?)";
	public static final String GET_FLOWCHART_BY_USECASE_ID = "SELECT id,flowchart_name,flowchart_json FROM testmodulate.flowchart F "+
							" inner join testmodulate.flowchart_usecase_mapping FU "+ 
							" on (F.id = FU.flowchart_id) where FU.usecase_id = ? ";
	
}
