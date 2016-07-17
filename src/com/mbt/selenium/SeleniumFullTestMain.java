/*package com.mbt.selenium;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SeleniumFullTestMain {

	public static void runFullTest(){
		WebDriver driver = new FirefoxDriver();
		
		driver.get("http://thprdqahttp.pvh.com/shop/en/thb2cus");
		SeleniumFunctions.clickAction(driver, "xpath", ".//*[@class = 'thOverlayCloseX']");
        SeleniumFunctions.clickAction(driver, "xpath", ".//*[@id='headerLinks']//a[1][contains(.,'LOG IN')]");
        
        SeleniumFunctions.enterText(driver, "id", "WC_AccountDisplay_FormInput_logonId_In_Logon_1", "sathishibm999@yopmail.com");
        SeleniumFunctions.enterText(driver, "id", "WC_AccountDisplay_FormInput_logonPassword_In_Logon_1", "testing1");
        
        SeleniumFunctions.clickAction(driver,"id", "WC_AccountDisplay_links_2");
        
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
       
        SeleniumFunctions.clickAction(driver, "xpath",".//*[@id='headerLinks']//a[contains(.,'SEARCH')]");
        driver.findElement(By.id("SimpleSearchForm_SearchTerm")).sendKeys("Women Dresses");
        driver.findElement(By.id("SimpleSearchForm_SearchTerm")).sendKeys(Keys.ENTER);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        SeleniumFunctions.clickAction(driver,"xpath" , "WC_CachedHeaderDisplay_links_1_4");
        SeleniumFunctions.clickAction(driver, "xpath", ".//*[@id='catalogEntry_img1964569']/div[1]/img");
        SeleniumFunctions.clickAction(driver, "id", "size_S_4");
        SeleniumFunctions.clickAction(driver, "id", "pdpAdd2CartButton");
        SeleniumFunctions.clickAction(driver, "id", "WC_MiniShopCartDisplay_link_3");
        SeleniumFunctions.clickAction(driver, "id", "WC_MiniShopCartDisplay_link_3");
        SeleniumFunctions.clickAction(driver, "id", "registeredShopperContinue");
        SeleniumFunctions.clickAction(driver,"xpath",".//*[@id='shipBox']//a[2]");
        SeleniumFunctions.enterText(driver, "id", "account1_1","4111111111111111");
        SeleniumFunctions.enterText(driver, "id", "cc_cvc_1","123");
        SeleniumFunctions.clickAction(driver,"id","expire_month_1");
        SeleniumFunctions.clickAction(driver, "xpath",".//*[@id='expire_month_1']/option[7]");
        SeleniumFunctions.clickAction(driver, "id", "expire_year_1");
        SeleniumFunctions.clickAction(driver, "xpath", ".//*[@id = 'expire_year_1']/option[2]");
        SeleniumFunctions.clickAction(driver, "id", "shippingBillingPageNext");
        
        
        driver.close();

        
		
	}
}
*/