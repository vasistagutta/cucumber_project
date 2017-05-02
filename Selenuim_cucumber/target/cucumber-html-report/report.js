$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestApplication.feature");
formatter.feature({
  "line": 2,
  "name": "Test facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Scenario Outline: Test login with valid credentials"
    },
    {
      "line": 5,
      "value": "#Given Open firefox and start application with \"\u003curl\u003e\""
    },
    {
      "line": 6,
      "value": "#When I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\""
    },
    {
      "line": 7,
      "value": "#Then user should be able to login successfully"
    },
    {
      "line": 8,
      "value": "#Then application should be closed"
    }
  ],
  "line": 10,
  "name": "Test Registeration for online access",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-registeration-for-online-access",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "Open firefox and start application with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter valid \"\u003ccardNumber\u003e\" and click on continue",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should launch on Account information page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter the  \"\u003cpin\u003e\" and last four digits of \"\u003cAccountnumber\u003e\" number",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "launch setup online Access tab and enter \"\u003cuserid\u003e\",\"\u003cpassword\u003e\",\"\u003cmailID\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "After reading terms and Conditons click accept button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Launch Security Questions answers \"\u003canswer1\u003e\",\"\u003canswer2\u003e\",\"\u003canswer3\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-registeration-for-online-access;",
  "rows": [
    {
      "cells": [
        "url",
        "cardNumber",
        "pin",
        "Accountnumber",
        "userid",
        "password",
        "mailID",
        "answer1",
        "answer2",
        "answer2"
      ],
      "line": 20,
      "id": "test-facebook-smoke-scenario;test-registeration-for-online-access;;1"
    },
    {
      "cells": [
        "https://dit41.online.citi.com/US/JSO/reg/Setup.do?JFP_TOKEN\u003dAP42IBN2",
        "5006325003062662",
        "1234",
        "1209630681",
        "dit41_2662",
        "ist123",
        "test@citi.com",
        "welcome",
        "welcome",
        "welcome"
      ],
      "line": 21,
      "id": "test-facebook-smoke-scenario;test-registeration-for-online-access;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Test Registeration for online access",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-registeration-for-online-access;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "Open firefox and start application with \"https://dit41.online.citi.com/US/JSO/reg/Setup.do?JFP_TOKEN\u003dAP42IBN2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter valid \"5006325003062662\" and click on continue",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should launch on Account information page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter the  \"1234\" and last four digits of \"1209630681\" number",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "launch setup online Access tab and enter \"dit41_2662\",\"ist123\",\"test@citi.com\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "After reading terms and Conditons click accept button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Launch Security Questions answers \"welcome\",\"welcome\",\"\u003canswer3\u003e\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://dit41.online.citi.com/US/JSO/reg/Setup.do?JFP_TOKEN\u003dAP42IBN2",
      "offset": 41
    }
  ],
  "location": "SmokeTest.open_firefox_and_start_application_with(String)"
});
formatter.result({
  "duration": 17366482420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5006325003062662",
      "offset": 15
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_click_on_continue(String)"
});
formatter.result({
  "duration": 281092947,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_launch_on_Account_information_page()"
});
formatter.result({
  "duration": 20177731279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 12
    },
    {
      "val": "1209630681",
      "offset": 43
    }
  ],
  "location": "SmokeTest.enter_the_and_last_four_digits_of_number(String,String)"
});
formatter.result({
  "duration": 10443655542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dit41_2662",
      "offset": 42
    },
    {
      "val": "ist123",
      "offset": 55
    },
    {
      "val": "test@citi.com",
      "offset": 64
    }
  ],
  "location": "SmokeTest.launch_setup_online_Access_tab_and_enter(String,String,String)"
});
