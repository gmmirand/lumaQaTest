Feature: Date Picker
  As a user
  I want to select dates and date & time
  So that I can see the values correctly in the input fields

  Scenario: Select a date using the "Select Date" picker
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Date Picker page
    When I click on the "Select Date" input
    And I choose the date "September 21, 2025" from the calendar
    Then the "Select Date" input should have the value "09/21/2025"

  Scenario: Select a date and time using the "Date And Time" picker
    Given I open the DemoQA home page
    And I navigate to the Widgets section
    And I go to the Date Picker page
    When I click on the "Date And Time" input
    And I choose the date "September 22, 2025" from the calendar
    And I select the time "14:30" from the time list
    Then the "Date And Time" input should have the value "September 22, 2025 02:30 PM"
