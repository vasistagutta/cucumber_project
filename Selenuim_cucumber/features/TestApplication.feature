
Feature: Test facebook smoke scenario
	
		#Scenario Outline: Test login with valid credentials
			#Given Open firefox and start application with "<url>"
			#When I enter valid "<username>" and valid "<password>"
			#Then user should be able to login successfully
			#Then application should be closed
			
			Scenario Outline: Test Registeration for online access
				Given Open firefox and start application with "<url>"
				When I enter valid "<cardNumber>" and click on continue
				Then  user should launch on Account information page
				And enter the  "<pin>" and last four digits of "<Accountnumber>" number
				Then launch setup online Access tab and enter "<userid>","<password>","<mailID>"
				And After reading terms and Conditons click accept button
				Then Launch Security Questions answers "<answer1>","<answer2>","<answer3>"

		Examples:
			| url | cardNumber | pin | Accountnumber | userid | password | mailID | answer1 | answer2 | answer2 |
			| please add your url here | cin number plz | pin | accountnumber plz | userid | password | test@citi.com | welcome | welcome | welcome |
		
		