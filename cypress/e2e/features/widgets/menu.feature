Feature: Menu

  Scenario: Validate Main Item 1
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Menu section
    Then I should see "Main Item 1" in the menu

  Scenario: Validate Main Item 2 and its sub items
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Menu section
    Then I should see "Main Item 2" in the menu
    And I should see its sub items "Sub Item, Sub Item, SUB SUB LIST »" in "Main Item 2"

  Scenario: Validate SUB SUB LIST sub items
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Menu section
    Then I should see its sub items "Sub Sub Item 1, Sub Sub Item 2" in "SUB SUB LIST »"

  Scenario: Validate Main Item 3
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Menu section
    Then I should see "Main Item 3" in the menu
