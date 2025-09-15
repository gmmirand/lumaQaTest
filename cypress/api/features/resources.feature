Feature: API tests for resources

  Scenario: GET all resources
    When I send a GET request to "/objects"
    Then the response status should be 200
    And the response should be an array
    And the array length should be greater than 0

  Scenario: GET a single resource
    When I send a GET request to "/objects/1"
    Then the response status should be 200
    And the response body should have property "id" with value "1"

  Scenario: POST a new resource
    When I send a POST request to "/objects" with body:
      | name        | Test Object |
      | description | My API Test |
    Then the response status should be 200
    And the response body should have property "id"

  Scenario: PUT update a resource
    When I create and update a resource with name "Test Update" with body:
      | name        | Updated Object |
    Then the response status should be 200
    And the response body should have property "name" with value "Updated Object"

  Scenario: DELETE a resource
    When I create and delete a resource with name "Test Delete"
    Then the response status should be 200
