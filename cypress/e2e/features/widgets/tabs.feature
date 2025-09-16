Feature: Tabs
  As a user
  I want to navigate between tabs
  So that I can view the content of each tab

  Scenario: Verify default active tab
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tabs section
    Then the "What" tab should be active by default

  Scenario: Switch to the "Origin" tab
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tabs section
    And I click the "Origin" tab
    Then the "Origin" tab should be active
    And the "What" tab should not be active

  Scenario: Switch to the "Use" tab
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tabs section
    And I click the "Use" tab
    Then the "Use" tab should be active

  Scenario: Verify the "More" tab is disabled
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tabs section
    Then the "More" tab should be disabled
