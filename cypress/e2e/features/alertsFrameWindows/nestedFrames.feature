Feature: Nested Frames
  As a user
  I want to interact with nested frames
  So that I can verify content inside parent and child iframes

  Scenario: Validate parent frame content
    Given I open the DemoQA home page
    When I navigate to the Nested Frames section
    Then I should validate that the parent frame contains "Parent frame"

  Scenario: Validate child frame content
    Given I open the DemoQA home page
    When I navigate to the Nested Frames section
    Then I should validate that the child frame contains "Child Iframe"
