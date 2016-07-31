/*package com.mbt.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class SeleniumFunctions {
	
	public static void enterText (WebDriver dr,String locatorType,String locatorValue,String inputValue){
		
		if (locatorType.equalsIgnoreCase("XPath")) {
			dr.findElement(By.xpath(locatorValue)).clear();
			dr.findElement(By.xpath(locatorValue)).sendKeys(inputValue);
		} else if (locatorType.equalsIgnoreCase("id")) {
			dr.findElement(By.id(locatorValue)).clear();
			dr.findElement(By.id(locatorValue)).sendKeys(inputValue);
		} else if (locatorType.equalsIgnoreCase("name")) {
			dr.findElement(By.name(locatorValue)).clear();
			dr.findElement(By.name(locatorValue)).sendKeys(inputValue);
		} else if (locatorType.equalsIgnoreCase("classname")) {
			dr.findElement(By.className(locatorValue)).clear();
			dr.findElement(By.className(locatorValue)).sendKeys(inputValue);
		}
	}
	
	public static void clickAction(WebDriver dr,String locatorType,String locatorValue){
		Actions action = new Actions(dr);
		if (locatorType.equalsIgnoreCase("XPath")) {
		action.moveToElement(dr.findElement(By.xpath(locatorValue))).click().perform();
		}else if (locatorType.equalsIgnoreCase("id")) {
			action.moveToElement(dr.findElement(By.id(locatorValue))).click().perform();
		}else if (locatorType.equalsIgnoreCase("name")) {
			action.moveToElement(dr.findElement(By.name(locatorValue))).click().perform();
		}else if (locatorType.equalsIgnoreCase("classname")) {
			action.moveToElement(dr.findElement(By.className(locatorValue))).click().perform();
		}
		
	}
	
	public static void mouseHover(WebDriver dr,String locatorType,String locatorValue)
	{
		Actions action = new Actions(dr);

		if (locatorType.equalsIgnoreCase("XPath")) {
			action.moveToElement(dr.findElement(By.xpath(locatorValue)))
			.perform();
		} else if (locatorType.equalsIgnoreCase("id")) {
			action.moveToElement(dr.findElement(By.id(locatorValue)))
			.perform();
		} else if (locatorType.equalsIgnoreCase("link")) {
			action.moveToElement(dr.findElement(By.linkText(locatorValue)))
			.perform();
		} else if (locatorType.equalsIgnoreCase("partiallink")) {
			action.moveToElement(
					dr.findElement(By.partialLinkText(locatorValue)))
					.perform();
		} else if (locatorType.equalsIgnoreCase("name")) {
			action.moveToElement(dr.findElement(By.name(locatorValue)))
			.perform();
		}
	}
	
	public static void selectDropDown(WebDriver dr,String locator,String locatorValue,String inputValue) {
		Select droplist;
		if (locator.equalsIgnoreCase("XPath")) {
			droplist = new Select(dr.findElement(By.xpath

					(locatorValue)));
			droplist.selectByVisibleText(inputValue);
		} else if (locator.equalsIgnoreCase("id")) {
			droplist = new Select(dr.findElement(By.id

					(locatorValue)));
			dr.findElement(By.id(locatorValue)).click();
			droplist.selectByVisibleText(inputValue);
		} else if (locator.equalsIgnoreCase("name")) {
			droplist = new Select(dr.findElement(By.name

					(locatorValue)));
			droplist.selectByVisibleText(inputValue);
		} else if (locator.equalsIgnoreCase("classname")) {
			droplist = new Select(dr.findElement(By.className

					(locatorValue)));
			dr.findElement(By.className(locatorValue)).click();
			droplist.selectByVisibleText(inputValue);
			
		}

	}

}
*/