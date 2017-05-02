package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;
	JavascriptExecutor js = (JavascriptExecutor) driver;
	@Given("^Open firefox and start application with \"([^\"]*)\"$")
	public void open_firefox_and_start_application_with(String arg1) throws Throwable {
		System.setProperty("webdriver.gecko.driver", "F:\\geckodriver.exe");
		driver = new FirefoxDriver();
	    
	    driver.manage().window().maximize();
	    driver.get(arg1);
	    Thread.sleep(10000);
	}

	/*@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_username_and_valid_password(String username , String pass) throws Throwable {
	    driver.findElement(By.id("usernameMasked")).sendKeys(username);
	    driver.findElement(By.id("password")).sendKeys(pass);
	}


	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		 driver.findElement(By.id("signInBtn")).click();
	}*/
	
	@When("^I enter valid \"([^\"]*)\" and click on continue$")
	public void i_enter_valid_and_click_on_continue(String cardnumber) throws Throwable {
		driver.findElement(By.id("cardNumberMasked")).sendKeys(cardnumber);
		driver.findElement(By.id("usereg-cardInfo-submit")).click();
	}

	@Then("^user should launch on Account information page$")
	public void user_should_launch_on_Account_information_page() throws Throwable {
		Thread.sleep(20000);
		
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.className("appNavNext")).click();
		/*js.executeScript("arguments[0].style.border='2px groove green'", continueButton);
		Thread.sleep(10000);*/
		
		/*WebDriverWait wait = new WebDriverWait(driver, 20);
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("link_lkRegSetupCont")));
		element.click();*/
	}

	@Then("^enter the  \"([^\"]*)\" and last four digits of \"([^\"]*)\" number$")
	public void enter_the_and_last_four_digits_of_number(String pin, String accountNumber) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(10000);
		driver.findElement(By.className("soInput")).sendKeys(pin);
		Select dropdown = new Select(driver.findElement(By.id("selectSecIdent")));
		dropdown.selectByVisibleText("Your Account Number");
		driver.findElement(By.id("acctNumberMasked")).sendKeys(accountNumber);
		driver.findElement(By.id("link_lkRegSetupCont")).click();
	}

	@Then("^launch setup online Access tab and enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void launch_setup_online_Access_tab_and_enter(String userId, String password, String mailID) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(20000);
		driver.findElement(By.id("usernameMasked")).sendKeys(userId);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.id("passwordConfirm")).sendKeys(password);
		String mail = driver.findElement(By.id("emailMasked")).getAttribute("value");
		System.out.println(mail);
		driver.findElement(By.id("link_lkRegSetupCont")).click();
		}
		
	@Then("^After reading terms and Conditons click accept button$")
	public void after_reading_terms_and_Conditons_click_accept_button() throws Throwable {
	    Thread.sleep(10000);
	    driver.findElement(By.id("cmlink_AgreeBtnTermsAndConditions")).click();
	}
	
	@Then("^Launch Security Questions answers \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void launch_Security_Questions_answers(String answer1, String answer2, String answer3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(10000);
		Select dropdown = new Select(driver.findElement(By.id("selectedquestion0")));
		//dropdown.s
		
	}
}
