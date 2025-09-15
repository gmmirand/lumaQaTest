Feature: Accordion Widget

  Scenario: Explore Accordian sections
    Given I open the DemoQA home page
    When I navigate to the Widgets section
    And I open the Accordian widget
    Then I should see all Accordian sections
    And I can expand and collapse each section
