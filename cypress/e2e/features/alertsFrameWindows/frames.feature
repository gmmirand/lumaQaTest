Feature: Frames
  As a user
  I want to interact with Frames
  So that I can verify content inside iframes

  Scenario: Validate first iframe content
    Given I open the DemoQA home page
    When I navigate to the Frames section
    Then I should validate that the first iframe contains "This is a sample page"

  Scenario: Validate second iframe content
    Given I open the DemoQA home page
    When I navigate to the Frames section
    Then I should validate that the second iframe contains "This is a sample page"
