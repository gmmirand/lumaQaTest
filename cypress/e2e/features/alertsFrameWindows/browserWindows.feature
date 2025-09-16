Feature: Browser Windows

  Scenario: Open a new tab
    Given I open the DemoQA home page
    When I navigate to the Browser Windows section
    And I click the "New Tab" button
    Then a new window should have been opened

  Scenario: Open a new window
    Given I open the DemoQA home page
    When I navigate to the Browser Windows section
    And I click the "New Window" button
    Then a new window should have been opened

  Scenario: Open a new window message
    Given I open the DemoQA home page
    When I navigate to the Browser Windows section
    And I click the "New Window Message" button
    Then a new window should have been opened
