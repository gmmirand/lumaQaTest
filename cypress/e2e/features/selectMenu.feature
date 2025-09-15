Feature: Select Menu
  As a user
  I want to interact with the Select Menu widget
  So that I can validate all dropdowns and selects

  Scenario: Select a value from "Select Value"
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Select Menu section
    And I choose "Group 1, option 1" from the "Select Value"
    Then I should see "Group 1, option 1" selected in "Select Value"

  Scenario: Select a title from "Select One"
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Select Menu section
    And I choose "Mr." from the "Select One"
    Then I should see "Mr." selected in "Select One"

  Scenario: Select a color from Old Style Select Menu
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Select Menu section
    And I choose "Blue" from the "Old Style Select Menu"
    Then I should see "Blue" selected in "Old Style Select Menu"

  Scenario: Select multiple values from Multiselect drop down
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Select Menu section
    And I choose multiple "Red, Blue, Green" from the "Multiselect drop down"
    Then I should see multiple "Red, Blue, Green" selected in "Multiselect drop down"

  Scenario: Select multiple cars from Standard multi select
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Select Menu section
    And I choose multiple "Volvo, Opel" from the "Standard multi select"
    Then I should see multiple "Volvo, Opel" selected in "Standard multi select"
