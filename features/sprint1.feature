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
    And User verifies that "Effective from" date format is in the correct format
    When User clicks on the "Privacy Statement" link
    Then User verifies that "Privacy Statement" heading is displayed
    And User verifies that "Last Updated" date format is in the correct format


@TC-23
Scenario Outline: Verify filter-by and sort-by functionality works as expected

    When User enters boston and selects Boston Massachusetts, United States from autosuggestion

    And User enters Check-in date as 37 days from the current date 
    And User enters Check-out date as 7 days from the Check-in date

    And User clicks on the Search button

    And User clicks on 5 star-rating filter 
    
    And User selects "Price - Low to High" from the sort-by dropdown
    
    # Then User verifies that all hotels in the search results have a star-rating of 5
    # And User verifies that all hotels are listed in increasing order of price

@TC-30
Scenario Outline: Verify Get the app section

    When User clicks "Get the app" button
    Then User verifies that "Scan the QR code and download our app" is displayed
    Then User verifies that QR code is displayed
    

@TC-71
Scenario Outline: Verify Share Feedback button is displayed at the end of search results

    When User enters bora and selects Bora Bora, Leeward Islands, French Polynesia from autosuggestion
    And User clicks on the Search button
    Then User verifies that text Tell us how we can improve our site is displayed
    And User verifies that the Share Feedback Button is enabled


@TC-72 
Scenario Outline: Verify Reasons to download our app section

    When User clicks "Get the app" button
    And User scrolls to Reasons to download our app
    Then User verifies that Reasons to download our app is displayed
    And User verifies "Stay informed" is displayed
    And User verifies "Conveniently access your itinerary without wifi" is displayed
    And User verifies "Save even more" is displayed
    And User verifies "Receive discounts on select hotels in the app" is displayed
    And User verifies "Plan trips on the go" is displayed
    And User verifies "Book anytime, anywhere at the last minute" is displayed
    And User verifies header "Get rewarded" is displayed
    And User verifies "Find app-exclusive offers and perks for members" is displayed
    # icon locator cant be ientified
    # more efficient way to verify the headers


@TC-73
Scenario Outline: Verify Shop Travel options are enabled
    When User clicks Shop travel link
    Then User verifies that option "Deals" under Shop travel are enabled
    And User verifies that option "Vacation rentals" under Shop travel are enabled
    And User verifies that option "Groups & meetings" under Shop travel are enabled
    And User verifies that option "Gifts Cards" under Shop travel are enabled
    And User verifies that option "Hotels.com Magazine" under Shop travel are enabled

    # any better way to complete this

@TC-74
Scenario Outline: Verify the links on Support Screen

Click on “Support” link
Verify “Welcome to Help Center” heading is displayed
Verify all links under “Refunds and Charges” heading are enabled
Verify all links under “Lodging” heading are enabled
Verify all links under “Car” heading are enabled
Verify all links under “Account” heading are enabled
Verify all links under “Privacy” heading are enabled
Verify all links under “Security” heading are enabled
Verify all links under “Travel Alerts” heading are enabled
Verify all links under “Loyalty & Rewards” heading are enabled