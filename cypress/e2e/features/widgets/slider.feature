Feature: Slider

  Scenario: Verify initial slider value
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Slider page
    Then the slider input should display "25"

  Scenario: Set slider to a new value
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Slider page
    When I set the slider to "50"
    Then the slider input should display "50"
