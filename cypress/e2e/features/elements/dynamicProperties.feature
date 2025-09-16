Feature: Dynamic Properties Page
  As a user
  I want to validate the dynamic behavior of the buttons
  So that I can confirm they change after 5 seconds

  Scenario: Enable After button should change from disabled to enabled
    Given I open the DemoQA home page
    When I navigate to the Dynamic Properties page
    Then the "Enable After 5 Seconds" button should be disabled initially
    And the "Enable After 5 Seconds" button should become enabled after 5 seconds

  Scenario: Color Change button should change its color
    Given I open the DemoQA home page
    When I navigate to the Dynamic Properties page
    Then the "Color Change" button should have its initial color
    And the "Color Change" button should change color after 5 seconds

  Scenario: Visible After button should appear
    Given I open the DemoQA home page
    When I navigate to the Dynamic Properties page
    Then the "Visible After 5 Seconds" button should not be visible initially
    And the "Visible After 5 Seconds" button should become visible after 5 seconds
