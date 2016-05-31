package com.mbt.helper;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class MBTHelper {

	 
	  public static void writeTestCases(JSONArray steps) {
				
	    XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet("Test Case Sheet");
        short color = 24;
        int rowCount = 0;
        int columnCount = 0;
        Row headerRow = sheet.createRow(0);
        CellStyle cellStyle = sheet.getWorkbook().createCellStyle();
        Font font = sheet.getWorkbook().createFont();
        cellStyle.setFillBackgroundColor(color);
        font.setFontHeightInPoints((short) 10);
        cellStyle.setFont(font);
        
        
        Cell testCaseIdentifier = headerRow.createCell(1);
        testCaseIdentifier.setCellValue("Test Case Identifier");
        
        testCaseIdentifier.setCellStyle(cellStyle);
        
        Cell testCaseDesc = headerRow.createCell(2);
        testCaseIdentifier.setCellValue("Test Case Description");
        
        testCaseIdentifier.setCellStyle(cellStyle);
        
        Cell cellStepNo = headerRow.createCell(3);
        
        
        cellStepNo.setCellValue("Step No");
        cellStepNo.setCellStyle(cellStyle);
        Cell testStepDesc = headerRow.createCell(4);
        
        testStepDesc.setCellValue("Test Step Description");
        
        testStepDesc.setCellStyle(cellStyle);
        
        Cell testData = headerRow.createCell(5);
        
        testData.setCellValue("Test Data");
        
        testData.setCellStyle(cellStyle);
        
        Cell expResult = headerRow.createCell(6);
        
        expResult.setCellValue("Expected Result");
        
        expResult.setCellStyle(cellStyle);
        

        Cell locatorType = headerRow.createCell(7);
        
        locatorType.setCellValue("Locator Type");
        
        locatorType.setCellStyle(cellStyle);
        

        Cell locatorValue = headerRow.createCell(8);
        
        locatorValue.setCellValue("Locator Value");
        
        locatorValue.setCellStyle(cellStyle);
        

        Cell function = headerRow.createCell(9);
        
        function.setCellValue("Function");
        
        function.setCellStyle(cellStyle);

        int colnum = 3; 
        System.out.println(steps.size());
        for (int i=0;i<steps.size();i++){
	          columnCount = 0;
	          colnum = 3;
	          XSSFRow row =  sheet.createRow(++rowCount);
	          XSSFCell cellStepNumber = row.createCell(colnum);
	          ++colnum;
	          JSONObject step = (JSONObject)steps.get(i);
				cellStepNumber.setCellValue(i+1);
				cellStepNumber.setCellStyle(cellStyle);
				XSSFCell cellDescription = row.createCell(colnum);
				cellDescription.setCellValue((String)step.get("description"));
				JSONArray attributes = (JSONArray)step.get("attributes");
				String description = (String)step.get("description");
				 if (description.toLowerCase().contains("url")){
						XSSFCell cellFunction = row.createCell(9);
						cellFunction.setCellValue("GetURL");

					}

				 else if (description.toLowerCase().contains("click")){
					XSSFCell cellFunction = row.createCell(9);
					cellFunction.setCellValue("Click");
				}else if (description.toLowerCase().contains("enter")){
					XSSFCell cellFunction = row.createCell(9);
					cellFunction.setCellValue("EnterValue");
				}else if (description.toLowerCase().contains("hover")){
					XSSFCell cellFunction = row.createCell(9);
					cellFunction.setCellValue("MouseHover");
				}
				else if (description.toLowerCase().contains("select")){
					XSSFCell cellFunction = row.createCell(9);
					cellFunction.setCellValue("Select");
				}
				
				for (int j=0;j<attributes.size();j++){
					JSONObject attribute =(JSONObject) attributes.get(j);
					String text = (String)attribute.get("text");
					if (text != null && text != ""){
						System.out.println(text);
						if (text.toLowerCase().contains("locator")){
							String[] locatorArray = text.split(":");
							XSSFCell locatorTYPE = row.createCell(7);
							locatorTYPE.setCellValue(locatorArray[1]);
							
						}else if (text.toLowerCase().contains("value")){
							String[] valueArray = text.split(":");
							XSSFCell valueCell = row.createCell(8);
							valueCell.setCellValue(valueArray[1]);
						}else if (text.toLowerCase().contains("data")){
							String[] dataArray = text.split(":");
							XSSFCell dataCell = row.createCell(5);
							if (!dataArray[1].contains("N/A"))
								dataCell.setCellValue(dataArray[1]);
						}
					}
					
					
				}
				
				
        }
        
             
	  try (FileOutputStream outputStream = new FileOutputStream("TestCase.xlsx")) {
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
}
