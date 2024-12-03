Feature: LoginHomePage 

    Scenario: Login with valid credentials
      Given I am on the login screen
      When I fill the login form with valid credentials
      Then I should be able to see the home screen
      Then Navigate to Cross-functional project plan, Project
      Then Verify Draft project brief is in the To do column
      Then Confirm tags: Non-Priority and On track
    
    #Scenario: Login with valid credentials
      #Given I am on the login screen
      #When I fill the login form with valid credentials
      #Then I should be able to see the home screen
      #Then Navigate to Cross-functional project plan, Project
      #Then Verify Schedule kickoff meeting is in the To do column
      #Then Confirm tags: Medium and At risk.

    #Scenario: Login with valid credentials
      #Given I am on the login screen
    #   When I fill the login form with valid credentials
    #   Then I should be able to see the home screen
    #   Then Navigate to Cross-functional project plan, Project
    #   Then Verify Share timeline with teammates is in the To do column
    #   Then Confirm tags: High and Off Track.

    # Scenario: Login with valid credentials
    #   Given I am on the login screen
    #   When I fill the login form with valid credentials
    #   Then I should be able to see the home screen
    #   Then Navigate to Work Requests
    #   Then Verify Laptop setup for new hire is in the New Requests column
    #   Then Confirm tags: Medium priority, Low effort, New hardware, and Not Started

    #  Scenario: Login with valid credentials
    #   Given I am on the login screen
    #   When I fill the login form with valid credentials
    #   Then I should be able to see the home screen
    #   Then Navigate to Work Requests
    #   Then Verify Password not working is in the New Requests column
    #   Then Confirm tags: Low priority, Low effort, Password reset, and Waiting

    #  Scenario: Login with valid credentials
    #   Given I am on the login screen
    #   When I fill the login form with valid credentials
    #   Then I should be able to see the home screen
    #   Then Navigate to Work Requests
    #   Then Verify New keycard for Daniela V is in the New Requests column
    #   Then Confirm tags: High priority, Low effort, New hardware, and Done
