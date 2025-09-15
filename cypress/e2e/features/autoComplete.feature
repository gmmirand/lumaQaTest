Feature: Auto Complete Widget

  Scenario: Select multiple colors
    Given I open the DemoQA home page
    When I navigate to the Widgets section
    And I open the Auto Complete widget
    Then I can select multiple colors

  Scenario: Select a single color
    Given I open the DemoQA home page
    When I navigate to the Widgets section
    And I open the Auto Complete widget
    Then I can select a single color
