Feature: Sprint-1
Background:
    Given User launches the Hotels website

@TC-21
Scenario Outline: Verify Verification message for invalid sign in credentials
    When User clicks on the Sign in link
    And User clicks on the Sign in button
    And User enters an invalid email address "%$%^$$@gmail.com"
    And User clicks on the Continue button
    Then User verifies that the error message "Enter an invalid email" is displayed

@TC-28
Scenario Outline: Verify Child-age dropdowns are same as number of Children selected

    When User clicks on the Travelers button
    And User selects Children as 2
    Then User verifies that Children-age dropdowns are 2
    And User verifies that the "Plus" button is "enabled"
    And User verifies that the "Minus" button is "enabled"

    When User selects Children as 6
    Then User verifies that Children-age dropdowns are 6
    And User verifies that the "Plus" button is "disabled"
    And User verifies that the "Minus" button is "enabled"

    When User selects Children as 5
    Then User verifies that Children-age dropdowns are 5
    And User verifies that the "Plus" button is "enabled"
    And User verifies that the "Minus" button is "enabled"

    When User selects Children as 0
    # problem below 1 line
    Then User verifies that Children-age dropdowns are NOT displayed
    And User verifies that the "Plus" button is "enabled"
    And User verifies that the "Minus" button is "disabled"

@TC-31
Scenario Outline: Verify language can be changed successfully


    When User clicks on the English language
    And User selects "Español (Estados Unidos)" in the language dropdown
    And User clicks on the "Save" button
    Then User verifies that the selected language "Español" is displayed on the Homepage
    When User clicks on the Español language
    And User selects "English (United States)" in the language dropdown
    And User clicks on the "Guardar" button
    Then User verifies that the selected language "English" is displayed on the Homepage

@TC-29
Scenario Outline: Verify List your Property flow

    When User clicks on List your property
    Then User verifies What would you like to list? is displayed
    And User verifies Lodging and Private residence options are displayed
    When User clicks on Private residence
    Then User verifies Step "1" of 3 is displayed
    When User enters "4" as bedroom
    And User enters "2.5" as bathroom
    And User clicks on Next button
    Then User verifies Step "2" of 3 is displayed
    And User verifies Where is your property located? is displayed
    When User enters "121" in address
    And User selects "1211 6th Avenue, New York, NY, USA" from auto-suggestion
    Then User verifies map is displayed
    And User verifies pin in map is displayed
    And User verifies Move the pin to adjust the location of your property is displayed below graph


@TC-24
Scenario Outline: Verify error is displayed when user submits the empty feedback form

    When User clicks on Support
    And User clicks Site Feedback 
    And User clicks on Submit button
    Then User verifies error message is displayed: "The following fields are required"
    And User verifies red-box is displayed around OVERALL-section
    

@TC-25
Scenario Outline: Verify user can submit feedback after completing the feedback form

    When User clicks on Support
    And User clicks Site Feedback
    And User selects any "OVERALL" rating
    And User selects any "CONTENT" rating 
    And User selects any "DESIGN" rating
    And User selects any "EASE OF USE" rating
    And User clicks on Submit button
    Then User verifies "THANK YOU FOR YOUR FEEDBACK" is displayed
    When User clicks on CLOSE THIS WINDOW button

@TC-17
Scenario Outline: Verify past dates and back button on Current month's calendar is disabled

    When User clicks on Dates 
    And User navigates to the current month (if not displayed)
    Then User verifies past dates (if any) are disabled
    And User verifies the back button on the current month is disabled


@TC-28
Scenario Outline: Verify Child-age dropdowns are same as number of Children selected

    When User clicks on the Travelers button
    And User selects Adults as 6
    And User selects Children as 3 
    And User selects "Child (\d+) age" 4
    And User selects "Child (\d+) age" age 7
    And User selects "Child (\d+) age" age "Under 1"
    And User clicks Done

      # wip
    Then Verify total number of Travelers is sum of Adults and children as same as selected


@TC-20
Scenario Outline: Verify TermsAndConditions link and PrivacyStatements link open correct page

    When User clicks on the Sign in link
    And User clicks on the Sign in button 
    And User clicks on the "One Key Rewards Terms & Conditions" link
    Then User verifies that "One Key Terms and Conditions" heading is displayed
    # wip
    And User verifies that "Effective from" date format is in the correct format (expected format: MMMM d, yyyy)

    When User clicks on the "Privacy Statement" link
    
    Then User verifies that "Privacy Statement" heading is displayed
    And User verifies that "Last Updated" date format is in the correct format (expected format: MMMM d, yyyy)