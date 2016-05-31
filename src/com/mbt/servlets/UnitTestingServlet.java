package com.mbt.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.mbt.selenium.SeleniumMain;

/**
 * Servlet implementation class UnitTestingServlet
 */
@WebServlet("/UnitTestingServlet")
public class UnitTestingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UnitTestingServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String testSteps = request.getParameter("fieldValidations");
		JSONParser jsonParser = new JSONParser();
		
	
			//final WebDriver driver;
			/*JSONObject email = (JSONObject) jsonParser.parse(testSteps);
			JSONArray emailValidations = (JSONArray)email.get("email");
			System.out.println(emailValidations);*/
			
			/*System.setProperty("webdriver.chrome.driver", "C:\\Users\\P01242\\Desktop\\Drivers\\chromedriver\\chromedriver.exe");*/
			/*WebDriver driver = new FirefoxDriver();
			driver.get("https://www.google.com");
	        String baseUrl = "https://www.openair.com/index.pl";
	        String companyId = "Sirius";
	        
	        
	        String company = "input_company";
	        // launch Firefox and direct it to the Base URL
	        //driver.get(baseUrl);
	 
	 */ String [] args = null;
		SeleniumMain.main(args);
	      //SeleniumFunctions.enterText(driver, "id", company, companyId); 
	      
	   
			
			
			
		
		
		//doGet(request, response);
	}


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String testSteps = request.getParameter("fieldValidations");
		JSONParser jsonParser = new JSONParser();
		
		
			//final WebDriver driver;
			JSONObject email;
			 String [] args = new String[20];
			try {
				email = (JSONObject) jsonParser.parse(testSteps);
				JSONArray emailValidations = (JSONArray)email.get("email");
				System.out.println(emailValidations);
				for (int i=0;i<emailValidations.size();i++){
					JSONObject data = (JSONObject) emailValidations.get(i);
					args[i] = (String) data.get("validationdata");
				}
				
				
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
				
			
			SeleniumMain.main(args);
	}

}
