Feature: Booking API

  Scenario: Get Booking IDs
    Given the API base URL is "https://restful-booker.herokuapp.com"
    When a user retrieves booking IDs with the following filters:
      | firstname | lastname | checkin     | checkout    |
      | John      | Smith    | 2024-01-02  | 2024-01-10  |
    Then the response status code should be 200
    And the response should contain booking IDs
