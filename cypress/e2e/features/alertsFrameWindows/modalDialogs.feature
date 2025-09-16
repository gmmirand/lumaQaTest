Feature: Validate Modal Dialogs

  Scenario: Validate small modal title
    Given I open the DemoQA home page
    When I navigate to the Modal Dialogs section
    And I open the small modal
    Then I should see the small modal title as "Small Modal"

  Scenario: Validate large modal title
    Given I open the DemoQA home page
    When I navigate to the Modal Dialogs section
    And I open the large modal
    Then I should see the large modal title as "Large Modal"
