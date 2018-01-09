Feature: revetinc registration

  Scenario: Go to the registration page
  Given I am on Revetinc registration page
   When I click on "Join now"
   Then I should see "or join using your Email Address"
   When I click on "or join using your Email Address"
   Then I fill the registration field
   Then The page title is "ReVet"

  @skip
  Scenario: Missed scenario
  Given I am on Revetinc registration page
   When I click on "Join now"
   Then The page title is "ReVet"