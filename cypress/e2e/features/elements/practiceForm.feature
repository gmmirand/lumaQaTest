Feature: Practice Form

  Scenario: Submit empty form
    Given I open the DemoQA home page
    When I navigate to the Practice Form page
    And I submit the empty form
    Then I should see required field warnings

  Scenario: Submit valid form
    Given I open the DemoQA home page
    When I navigate to the Practice Form page
    And I fill in the form with valid data
      | firstName | John       |
      | lastName  | Doe        |
      | email     | john@example.com |
      | gender    | Male       |
      | mobile    | 1234567890 |
    And I submit the form
    Then I should see a successful submission
