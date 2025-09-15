Feature: JavaScript Alerts
  As a user
  I want to interact with JavaScript Alerts
  So that I can validate different alert types

  Scenario: Click Button to see simple alert
    Given I open the DemoQA home page
    When I navigate to the Alerts section
    And I click the "Click me" button for simple alert
    Then I should validate the alert text is "You clicked a button"

  Scenario: Click Button to see alert after 5 seconds
    Given I open the DemoQA home page
    When I navigate to the Alerts section
    And I click the "Click me" button for timer alert
    Then I should validate the alert text is "This alert appeared after 5 seconds"

  Scenario: Click Button to see confirm box
    Given I open the DemoQA home page
    When I navigate to the Alerts section
    And I click the "Click me" button for confirm
    Then I should validate the confirm text is "Do you confirm action?"

  Scenario: Click Button to see prompt box
    Given I open the DemoQA home page
    When I navigate to the Alerts section
    And I click the "Click me" button for prompt
    And I should validate the page displays the prompt result
