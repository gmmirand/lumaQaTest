Feature: Nested Frames

  Scenario: Validate parent frame content
    Given I open the DemoQA home page
    When I navigate to the Nested Frames section
    Then I should validate that the parent frame contains "Parent frame"

  Scenario: Validate child frame content
    Given I open the DemoQA home page
    When I navigate to the Nested Frames section
    Then I should validate that the child frame contains "Child Iframe"
