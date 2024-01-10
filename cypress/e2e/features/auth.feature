Feature: Auth Endpoint

  Scenario: Create a new auth token
    Given the API base URL is "https://restful-booker.herokuapp.com"
    When a user makes a POST request to "/auth" with the following payload:
      """
      {
        "username": "admin",
        "password": "password123"
      }
      """
    Then the response status code should be 200
    And the response should contain a valid authentication token