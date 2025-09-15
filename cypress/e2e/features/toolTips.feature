Feature: Tool Tips
  As a user
  I want to see tooltips when hovering over elements
  So that I can get additional information

  Scenario: Hover over button
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tool Tips section
    Then I should see a tooltip when hovering over the button

  Scenario: Hover over text input
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tool Tips section
    Then I should see a tooltip when hovering over the text input

  Scenario: Hover over text link "Contrary"
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tool Tips section
    Then I should see a tooltip when hovering over the "Contrary" link

  Scenario: Hover over text link "1.10.32"
    Given I open the DemoQA home page
    When I click on the "Widget" card
    And I navigate to the Tool Tips section
    Then I should see a tooltip when hovering over the "1.10.32" link
