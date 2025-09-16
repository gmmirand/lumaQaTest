Feature: Progress Bar

  Scenario: Start the progress bar
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Progress Bar page
    When I click the start button
    Then the progress bar should start increasing

  Scenario: Stop the progress bar
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Progress Bar page
    When I click the start button
    And I click the stop button
    Then the progress bar should stop

  Scenario: Restart the progress bar after stopping
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Progress Bar page
    When I click the start button
    And I click the stop button
    And I click the start button again
    Then the progress bar should continue increasing

  Scenario: Reset the progress bar after reaching 100%
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Progress Bar page
    When I click the start button
    And I wait until the progress bar reaches 100%
    And I click the reset button
    Then the progress bar should be reset to 0%
