Feature: Upload and Download Page

  Scenario: Download the sample file
    Given I open the DemoQA home page
    When I navigate to the Upload and Download page
    And I download the sample file
    Then the file should exist in the downloads folder

  Scenario: Upload the previously downloaded file
    Given I open the DemoQA home page
    When I navigate to the Upload and Download page
    And I prepare the sample file for upload
    And I upload the sample file
    Then the upload should be successful
