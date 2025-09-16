Feature: Web Tables

  Scenario: Add a new user to the web table
    Given I open the DemoQA home page
    When I click on the "Elements" card
    And I click on the "Web Tables" option in the sidebar
    And I add a new user with first name "Gabriel" and last name "Test"
    Then I should see the user "Gabriel" in the table

  Scenario: Delete a row from the web table
    Given I open the DemoQA home page
    When I click on the "Elements" card
    And I click on the "Web Tables" option in the sidebar
    And I delete the user "Cierra"
    Then I should not see the user "Cierra" in the table

  Scenario: Add enough users to create a second page
    Given I open the DemoQA home page
    When I click on the "Elements" card
    And I click on the "Web Tables" option in the sidebar
    And I add multiple users until there are more than 10 rows
    Then I should be able to navigate to the next page of the table
