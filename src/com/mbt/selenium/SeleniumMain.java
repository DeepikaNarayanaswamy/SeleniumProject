/*package com.mbt.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SeleniumMain {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		System.out.println("selenium functions");
		int i;
		driver.get("https://thprdqahttp.pvh.com/shop/LogonForm?catalogId=10551&myAcctMain=1&langId=-1&storeId=10151");
        for (i=0;i<args.length;i++)
        {
		SeleniumFunctions.enterText(driver, "id", "WC_AccountDisplay_FormInput_logonId_In_Logon_1", args[i]);
		
		SeleniumFunctions.clickAction(driver, "id", "WC_AccountDisplay_links_2");
        }
	}
}
*/