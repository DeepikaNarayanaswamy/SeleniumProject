package com.mbt.helper;

import java.awt.Color;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.mbt.common.constants.MBTConstants;
import com.mbt.common.dao.RequirementsDAO;
import com.mbt.common.dao.ValidationRuleDAO;
import com.mbt.common.dtos.Requirement;
import com.mbt.common.dtos.TestStep;

public class MBTHelper {

	 List<TestStep> testStepsFinal = new ArrayList<TestStep>();
	 boolean startFound = false;
	public static void writeTestCases(List<TestStep> steps, Requirement req, String fileLocation) {

		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet("Test Case Sheet");
		short color = 24;
		int rowCount = 0;
		int columnCount = 0;
		
		// autosize all the ceells
		for (int i=0;i<13;i++){
			sheet.autoSizeColumn(i);
		}
		
		
		Row headerRow = sheet.createRow(0);
		XSSFCellStyle cellStyle = workbook.createCellStyle();
		XSSFColor myColor = new XSSFColor(Color.BLUE);
		cellStyle.setFillBackgroundColor(
	      myColor );
	      cellStyle.setFillPattern(XSSFCellStyle.SOLID_FOREGROUND);
	     
	      
	        Font font = workbook.createFont();
	        font.setColor(HSSFColor.WHITE.index);
	        cellStyle.setFont(font);
		Cell testCaseIdentifier = headerRow.createCell(MBTConstants.TEST_CASE_ID_CELL_NUMBER);
		testCaseIdentifier.setCellValue(MBTConstants.TEST_CASE_ID);

		testCaseIdentifier.setCellStyle(cellStyle);

		Cell requriementId = headerRow.createCell(MBTConstants.REQUIREMENT_ID_CELL_NUMBER);
		requriementId.setCellValue(MBTConstants.REQUIREMENT_ID);

		requriementId.setCellStyle(cellStyle);

		Cell requriementName = headerRow.createCell(MBTConstants.REQUIREMENT_NAME_CELL_NUMBER);
		requriementName.setCellValue(MBTConstants.REQUIREMENT_NAME);

		requriementName.setCellStyle(cellStyle);

		Cell testCaseName = headerRow.createCell(MBTConstants.TEST_CASE_NAME_CELL_NUMBER);
		testCaseName.setCellValue(MBTConstants.TEST_CASE_NAME);

		testCaseName.setCellStyle(cellStyle);

		Cell testPhaseName = headerRow.createCell(MBTConstants.TEST_PHASE_NAME_CELL_NUMBER);
		testPhaseName.setCellValue(MBTConstants.TEST_PHASE_NAME);

		testPhaseName.setCellStyle(cellStyle);
		
		Cell testScriptName = headerRow.createCell(MBTConstants.TEST_SCRIPT_NAME_CELL_NUMBER);
		testScriptName.setCellValue(MBTConstants.TEST_SCRIPT_NAME);

		testScriptName.setCellStyle(cellStyle);

		
		Cell testScriptDesc = headerRow.createCell(MBTConstants.TEST_SCRIPT_DESCRIPTION_CELL_NUMBER);
		testScriptDesc.setCellValue(MBTConstants.TEST_SCRIPT_DESCRIPTION);

		testScriptDesc.setCellStyle(cellStyle);

		Cell testStepNo = headerRow.createCell(MBTConstants.TEST_STEP_NO_CELL_NUMBER);
		testStepNo.setCellValue(MBTConstants.TEST_STEP_NO);

		testStepNo.setCellStyle(cellStyle);
		
		Cell testStepDesc = headerRow.createCell(MBTConstants.TEST_STEP_DESCRIPTION_CELL_NUMBER);
		testStepDesc.setCellValue(MBTConstants.TEST_STEP_DESCRIPTION);

		testStepDesc.setCellStyle(cellStyle);

		Cell expectedResult = headerRow.createCell(MBTConstants.EXPECTED_RESULT_CELL_NUMBER);
		expectedResult.setCellValue(MBTConstants.EXPECTED_RESULT);

		expectedResult.setCellStyle(cellStyle);
		
		Cell baReviewComment = headerRow.createCell(MBTConstants.BA_REVIEW_COMMENTS_CELL_NUMBER);
		baReviewComment.setCellValue(MBTConstants.BA_REVIEW_COMMENTS);

		baReviewComment.setCellStyle(cellStyle);
		
		Cell status = headerRow.createCell(MBTConstants.STATUS_CELL_NUMBER);
		status.setCellValue(MBTConstants.STATUS);

		status.setCellStyle(cellStyle);


		/*
		 * Cell testData = headerRow.createCell(5);
		 * 
		 * testData.setCellValue("Test Data");
		 * 
		 * testData.setCellStyle(cellStyle);
		 * 
		 * Cell expResult = headerRow.createCell(6);
		 * 
		 * expResult.setCellValue("Expected Result");
		 * 
		 * expResult.setCellStyle(cellStyle);
		 * 
		 * 
		 * Cell locatorType = headerRow.createCell(7);
		 * 
		 * locatorType.setCellValue("Locator Type");
		 * 
		 * locatorType.setCellStyle(cellStyle);
		 * 
		 * 
		 * Cell locatorValue = headerRow.createCell(8);
		 * 
		 * locatorValue.setCellValue("Locator Value");
		 * 
		 * locatorValue.setCellStyle(cellStyle);
		 * 
		 * 
		 * Cell function = headerRow.createCell(9);
		 * 
		 * function.setCellValue("Function");
		 * 
		 * function.setCellStyle(cellStyle);
		 */int colnum = MBTConstants.TEST_STEP_NO_CELL_NUMBER;
		System.out.println("Number of steps = "+steps.size());
		for (int i = 0; i < steps.size(); i++) {
			columnCount = 0;
			colnum = MBTConstants.TEST_STEP_NO_CELL_NUMBER;
			XSSFRow row = sheet.createRow(++rowCount);
			XSSFCell cellStepNumber = row.createCell(colnum);
			// next ccol. write the step description
			colnum = MBTConstants.TEST_STEP_DESCRIPTION_CELL_NUMBER;
			TestStep step = steps.get(i);
			cellStepNumber.setCellValue(i + 1);
			cellStepNumber.setCellStyle(cellStyle);
			XSSFCell cellStepDesc = row.createCell(colnum);
			cellStepDesc.setCellValue(step.getDescription());
			if (step.getValidation_id() != 0) {
				List<String> rules = ValidationRuleDAO
						.getAllValidationRuleforfield(step.getValidation_id());
				// in the same col. as the step, write the validation rule
				for (int j = 0; j < rules.size(); j++) {
					XSSFRow validRow = sheet.createRow(++rowCount);
					
					XSSFCell cellValidationDesc = validRow
							.createCell(colnum);
					cellValidationDesc.setCellValue(rules.get(j));
				}
			}

		}
		

		try (FileOutputStream outputStream = new FileOutputStream(
				fileLocation+req.getFileName()+".xlsx")) {
			workbook.write(outputStream);
			System.out.println("writing to file");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch blocks
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public  List<TestStep> getAllStepsForRequirement(Requirement req,String fileLocation) {
		
		try {
				
			List<TestStep> steps = req.getTestSteps();
			for (TestStep step : steps) {
				if (step.getDescription().equalsIgnoreCase("Start") && !startFound){
					startFound = true;
					testStepsFinal.add(step);
					continue;
				}
				
				if (step.getIs_requirement().equals("Y")) {

					Requirement interReq = new Requirement();
					List<TestStep> intermediateSteps = RequirementsDAO
							.getStepsonMainReqId(step.getReq_id());
					interReq.setTestSteps(intermediateSteps);
					// System.out.println("intermediate step size"+req.getTestSteps().size());
					getAllStepsForRequirement(interReq,fileLocation);

				} else {
						if (!step.getDescription().equalsIgnoreCase("Start"))
							testStepsFinal.add(step);
				}
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		writeTestCases(testStepsFinal, req,fileLocation);
		return testStepsFinal;
	}
	
	public static JSONObject getFlowchart(List<TestStep> steps){
		
		int startPosx = 100;
		int startPosy = 100;
		JSONObject flowchart = new JSONObject();
		
		JSONArray nodes = new JSONArray();
		JSONArray connections = new JSONArray();
		
		for (int i=0;i<steps.size();i++){
			
			JSONObject nodeObject = new JSONObject();
			if (steps.get(i).getDescription().equalsIgnoreCase(MBTConstants.START)){
				nodeObject.put(MBTConstants.BLOCK_ID, "startpoint");
				nodeObject.put(MBTConstants.NODE_TYPE, MBTConstants.NODE_TYPE_START);
			}else if (steps.get(i).getDescription().equalsIgnoreCase(MBTConstants.END)){
				nodeObject.put(MBTConstants.BLOCK_ID, "endpoint");
				nodeObject.put(MBTConstants.NODE_TYPE, MBTConstants.NODE_TYPE_END);
			}else {
				nodeObject.put(MBTConstants.BLOCK_ID, "taskcontainer"+(i));
				nodeObject.put(MBTConstants.NODE_TYPE, MBTConstants.NODE_TYPE_TASK);
				nodeObject.put(MBTConstants.TEXT,steps.get(i).getDescription());
			}
			
			nodeObject.put(MBTConstants.POSITION_X, startPosx);
			nodeObject.put(MBTConstants.POSITION_Y, startPosy);
			startPosy+=200;
			nodes.add(nodeObject);
			
			
		}
		
		for (int i=1;i<=steps.size();i++){
			JSONObject connection = new JSONObject();
			connection.put(MBTConstants.CONNECTION_ID,"con_1"+i);
			if (i==1){
				connection.put(MBTConstants.PAGE_SOURCE_ID,"startpoint");
				connection.put(MBTConstants.PAGE_TARGET_ID,"taskcontainer"+i);
			}else if (i == steps.size() - 1){
				
				connection.put(MBTConstants.PAGE_SOURCE_ID,"taskcontainer"+(i-1));
				connection.put(MBTConstants.PAGE_TARGET_ID, "endpoint");
			}
			
			else{
				connection.put(MBTConstants.PAGE_SOURCE_ID,"taskcontainer"+(i-1));
				connection.put(MBTConstants.PAGE_TARGET_ID,"taskcontainer"+(i));
			}
			connections.add(connection);
		}
		flowchart.put(MBTConstants.NODES,nodes);
		flowchart.put(MBTConstants.CONNECTIONS,connections);
		System.out.println(flowchart.toJSONString());
		return flowchart;
		
		
	}
	
	public static void main(String[] args) {
		Requirement reqa = new Requirement();
		reqa.setTestSteps(RequirementsDAO.getStepsonMainReqId(9893));
		//List<TestStep> steps = getAllStepsForRequirement(reqa);

	}

}

