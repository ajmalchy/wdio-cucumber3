const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const homePage = require("../Pages/homePage");
const listYourPropertyPage = require("../Pages/listYourPropertyPage");
const privateResidencePage = require("../Pages/privateResidencePage");
const csPage = require("../Pages/csPage");
const siteFeedback = require("../Pages/siteFeedback");
const moment = require("moment");
const signupPage = require("../Pages/signupPage");
const oneKeyPage = require("../Pages/oneKeyPage");
const privacyPage = require("../Pages/privacyPage");
const destinationPage = require("../Pages/destinationPage");
const appPage = require("../Pages/appPage");
let checkInDate;
Given(/^User launches the Hotels website$/, async () => {
    await browser.url('https://www.hotels.com/')
});

When(/^User clicks on the Sign in link$/, async () => {
    await homePage.clickSigninLinkLocator();
});

When(/^User clicks on the Sign in button$/, async () => {
    await homePage.clickSigninButtonLocator();
});

When(/^User enters an invalid email address "([^"]*)"$/, async (invalidEmail) => {
    await signinPage.setValueOnSigninEmailField(invalidEmail);
});

When(/^User clicks on the Continue button$/, async () => {
    await signinPage.clickContinueButton();
});

Then(/^User verifies that the error message "([^"]*)" is displayed$/, async (errorMessage) => {
    await signinPage.invalidEmailErrorIsDisplayed();
});


When(/^User clicks on the Travelers button$/, async () => {
    await homePage.clickTravelersButton();
})


// problem below
// When(/^User selects Children as (\d+)$/, async (childrenCount) => {
//     // Code to select the specified number of children
//     for (let i = 0; i < childrenCount; i++) {
//         await homePage.clickChildrenBtnPlus()
//     }
// });

// When(/^User selects Children as 2$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 2; i++) {
//         await homePage.clickChildrenBtnPlus()
//     }
// });

// When(/^User selects Children as 6$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 4; i++) {
//         await homePage.clickChildrenBtnPlus()
//     }
// });

// When(/^User selects Children as 5$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 1; i++) {
//         await homePage.clickChildrenBtnMinus()
//     }
// });

// When(/^User selects Children as 0$/, async () => {
//     // Code to select the specified number of children
//     for (let i = 0; i < 4; i++) {
//         await homePage.clickChildrenBtnMinus()
//     }
// });

// problem below
When(/^User selects Children as (\d+)$/, async (childrenCount) => {
    // Code to select the specified number of children
    let previousChildrenCount;

    previousChildrenCount = await homePage.getChildrenNumberValue();
    console.log(previousChildrenCount);
    if (previousChildrenCount == 0) {
        for (let i = 0; i < childrenCount; i++) {
            await homePage.clickChildrenBtnPlus();
        }
    } else if
        (previousChildrenCount < childrenCount) {
        const toIncrease = childrenCount - previousChildrenCount;
        for (let i = 0; i < toIncrease; i++) {
            await homePage.clickChildrenBtnPlus();
        }
    }
    else {
        const toDecrease = previousChildrenCount - childrenCount;
        for (let i = 0; i < toDecrease; i++) {
            await homePage.clickChildrenBtnMinus();
        }

    }


});




Then(/^User verifies that Children-age dropdowns are (\d+)$/, async (expectedDropdownCount) => {
    const actualDropdownCount = await homePage.getVisibleChildrenDropdownCount();
    expect(actualDropdownCount).to.equal(expectedDropdownCount);
});

Then(/^User verifies that Children-age dropdowns are NOT displayed$/, async () => {
    const isDropdownDisplayed = await homePage.isChildrenDropdownDisplayed();
    expect(await isDropdownDisplayed).to.be.false;

});

// Then(/^User verifies that the "(Plus|Minus)" button is enabled$/, async (buttonType) => {
//     const isButtonEnabled = await homePage.isButtonEnabled(buttonType);
//     expect(isButtonEnabled).to.be.true;
// });

// Then(/^User verifies that the "(Plus|Minus)" button is disabled$/, async (buttonType) => {
//     const isButtonEnabled = await homePage.isButtonEnabled(buttonType);
//     expect(isButtonEnabled).to.be.false;
// });

// advance code for btn state
Then(/^User verifies that the "(Plus|Minus)" button is "(enabled|disabled)"$/, async (buttonType, btnState) => {
    const isButtonEnabled = await homePage.isButtonEnabled(buttonType);
    let expectedState;
    if (expectedState = btnState == "enabled") {
        expect(isButtonEnabled).to.be.true;
    } else
        if (expectedState = btnState == "disabled") {
            expect(isButtonEnabled).to.be.false;
        }

});

When(/^User clicks on the English language$/, async () => {
    await homePage.clickLanguageBtn();
})

When(/^User selects "([^"]*)" in the language dropdown$/, async (language) => {
    await homePage.clickLanguageDropdown();
    await homePage.selectLanguage(language);
})

When(/^User clicks on the "([^"]*)" button$/, async (saveLanguage) => {
    await browser.pause(5000);
    await homePage.clickSaveLanguage(saveLanguage);

})

Then(/^User verifies that the selected language "([^"]*)" is displayed on the Homepage$/, async (language) => {
    await browser.pause(5000);
    const isLanguageDisplayed = await homePage.isLanguageDisplayed(language);
    expect(isLanguageDisplayed).to.be.true;

});

When(/^User clicks on the Español language$/, async () => {
    await homePage.clickLanguageBtn();
})

When(/^User clicks on List your property$/, async () => {
    await homePage.clickListYourProperty();
})

Then(/^User verifies What would you like to list is displayed$/, async () => {
    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

        const title = await browser.getTitle();
        if (title.includes('List Your Property')) {
            const isListDisplayed = await listYourPropertyPage.isWhatWouldYouLikeToListDisplayed();
            expect(isListDisplayed).to.be.true();
            return;
        }
        await browser.pause(5000);

    }

})

Then(/^User verifies Lodging and Private residence options are displayed$/, async () => {
    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

        const title = await browser.getTitle();
        if (title.includes('List Your Property')) {

            const isLodgingDisplayed = await listYourPropertyPage.isLodgingDisplayed();
            const isPrivateResidenceDisplayed = await listYourPropertyPage.isPrivateResidenceDisplayed();
            expect(isLodgingDisplayed).to.be.true();
            expect(isPrivateResidenceDisplayed).to.be.true();
            return;

        }
        await browser.pause(5000);

    }
})

Then(/^User verifies Step (\d+) of 3 is displayed$/, async () => {
    const isStepsDisplayed = await privateResidencePage.isStepsDisplayed();
    expect(isStepsDisplayed).to.be.true();
    return;
}
)

When(/^When User enters (.*) as bedroom$/, async (bedroomCount) => {
    let previousRoomCount;
    previousRoomCount = await privateResidencePage.getBedroomNumberValue();

    if (previousRoomCount == 0) {
        for (let i = 0; i < bedroomCount; i++) {
            await privateResidencePage.clickBedroomBtnPlus();
        }
    } else if (previousRoomCount < bedroomCount) {
        const toIncrease = bedroomCount - previousRoomCount;
        for (let i = 0; i < toIncrease; i++) {
            await privateResidencePage.clickBedroomBtnPlus();
        }
    } else {
        const toDecrease = previousRoomCount - bedroomCount;
        for (let i = 0; i < toDecrease; i++) {
            await privateResidencePage.clickBedroomBtnMinus();
        }
    }

}
)

When(/^When User enters (.*) as bathroom$/, async (bathroomCount) => {
    let previousRoomCount;
    previousRoomCount = await privateResidencePage.getBathroomNumberValue();

    if (previousRoomCount == 0) {
        for (let i = 0; i < bathroomCount; i++) {
            await privateResidencePage.clickBathroomBtnPlus();
        }
    } else if (previousRoomCount < bathroomCount) {
        const toIncrease = bathroomCount - previousRoomCount;
        for (let i = 0; i < toIncrease; i++) {
            await privateResidencePage.clickBathroomBtnPlus();
        }
    } else {
        const toDecrease = previousRoomCount - bathroomCount;
        for (let i = 0; i < toDecrease; i++) {
            await privateResidencePage.clickBathroomBtnMinus();
        }
    }

}
)

Then(/^User verifies Where is your property located? is displayed$/, async () => {
    const isYourPlaceDisplayed = await privateResidencePage.isWheresYourPlaceDisplayed();
    expect(isYourPlaceDisplayed).to.be.true();
    return;
})

When(/^User enters "([^"]*)" in address$/, async (address) => {
    await privateResidencePage.enterAddress(address);

});

And(/^User selects "([^"]*)" from auto-suggestion$/, async (selectedOption) => {
    await privateResidencePage.selectFromAutoSuggestion(selectedOption);
});

Then(/^User verifies map is displayed$/, async () => {
    const mapDisplayed = await privateResidencePage.isMapDisplayed();
    expect(mapDisplayed).to.be.true();
    return;
})

Then(/^User verifies pin in map is displayed$/, async () => {
    const pinDisplayed = await privateResidencePage.isPinDisplayed();
    expect(pinDisplayed).to.be.true();
    return;
})

Then(/^User verifies Move the pin to adjust the location of your property is displayed below graph$/, async () => {
    const mapFooterDisplayed = await privateResidencePage.isMapFooterDisplayed();
    expect(mapFooterDisplayed).to.be.true();
    return;
})

When(/^User clicks on Support$/, async () => {
    await homePage.clickSupportBtn();
})

When(/^User clicks Site Feedback$/, async () => {
    await csPage.clickSiteFeedback();
})



When(/^User clicks Submit button$/, async () => {
    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);
        const title = await browser.getTitle();

        if(title.includes('Verint Digital Experience')) {
            await siteFeedback.clickSubmitBtn();
        }
    }
})

Then(/^User verifies error message is displayed: "([^"]*)"$/, async (errorMsg) => {
    const errorMsgDisplayed = await siteFeedback.isErrorMsgDisplayed(errorMsg);
    expect(errorMsgDisplayed).to.be.true();
    return;
})

Then(/^User verifies red-box is displayed around OVERALL-section$/, async () => {
    const redBoxDisplayed = await siteFeedback.isErrorMsgDisplayed();
    expect(redBoxDisplayed).to.be.true();
    return;
})

When(/^User selects any "([^"]*)" rating$/, async (rating) => {
   await siteFeedback.selectAnyRating(rating);
})

Then(/^User verifies THANK YOU FOR YOUR FEEDBACK is displayed$/, async () => {
    const textDisplayed = await siteFeedback.isThankYouForFeedbackDisplayed();
    expect(textDisplayed).to.be.true();
    return;
})

When(/^User clicks on CLOSE THIS WINDOW button$/, async () => {
    await siteFeedback.clickCloseWindow();
 })

 When(/^User clicks on Dates$/, async () => {
    await homePage.clickDatesButton();
})

When(/^User navigates to the current month (if not displayed)$/, async () => {
    
    // work in progress
    const currentMonth = moment().format('MMMM YYYY');
    const displayedMonth = await homePage.getLeftDisplayedMonth();

    if ( currentMonth !== displayedMonth) {
    await homePage.navigateToCurrentMonth()
    } else return;
})

Then(/^User verifies past dates (if any) are disabled)$/, async () => {
    
   await homePage.isPastDatesDisplayed();
  
})

Then(/^User verifies the back button on the current month is disabled)$/, async () => {
    
    await homePage.isBackButtonDisabled();
   
 })

 When(/^User selects Adults as (\d+)$/, async (adultCount) => {
    // Code to select the specified number of adults
    let previousAdultsCount;

    previousAdultsCount = await homePage.getAdultNumberValue();
    console.log(previousAdultsCount);
    if (previousAdultsCount == 0) {
        for (let i = 0; i < adultCount; i++) {
            await homePage.clickAdultBtnPlus();
        }
    } else if
        (previousAdultsCount < adultCount) {
        const toIncrease = adultCount - previousAdultsCount;
        for (let i = 0; i < toIncrease; i++) {
            await homePage.clickAdultBtnPlus();
        }
    }
    else {
        const toDecrease = previousAdultsCount - adultCount;
        for (let i = 0; i < toDecrease; i++) {
            await homePage.clickAdultBtnMinus();
        }

    }


});

When(/^User selects "Child (\d+) age" (\d+|Under 1)$/, async (childNumber, age) => {
    await homePage.selectChildAgeDropdown(childNumber, age);

})

When(/^User clicks Done$/, async () => {
    await homePage.clickTravelersButton();
})

Then(/^Verify total number of Travelers is sum of Adults and children as same as selected$/, async () => {
    // work in progress
    
    const adultsCount = await homePage.getAdultNumberValue();
    const childrenCount = await homePage.getChildrenNumberValue();

    const totalNumberOfTravelers = await homePage.getTotalNumberOfTravelers();

    // Use a regular expression to extract the numeric value
    const match = totalTravelersAttribute.match(/(\d+)\s+travelers/);
    // Use a regular expression to extract the numeric value
    
    // Ensure the match is found and extract the numeric value
    const actualTotal = match ? parseInt(match[1]) : NaN;
    const expectedTotal = adultsCount + childrenCount;

    // Compare the actual and expected total
    expect(actualTotal).to.equal(expectedTotal);
})

When(/^User clicks on the "([^"]*)" link$/, async () => {
    
    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

        const title = await browser.getTitle();
        if (title.includes('One Key Terms')) {
            await signupPage.clickOneKeyRewardsLink();

        }
        else if (title.includes('Deals & Discounts')) {
            await signupPage.clickPrivacyLink();
        }
        else return;
      
    }
    
    
});

Then(/^User verifies that "([^"]*)" heading is displayed)$/, async () => {
    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

        const title = await browser.getTitle();
        if (title.includes('One Key Terms')) {

            const isOneKeyHeadingDisplayed = await oneKeyPage.isOneKeyHeadingDisplayed();
            
            expect(isOneKeyHeadingDisplayed).to.be.true();
            return;

        }
        else if (title.includes('Deals & Discounts')) {
            const isPrivacyHeadingDisplayed = await 
            privacyPage.isPrivacyHeadingDisplayed();
            
            expect(isPrivacyHeadingDisplayed).to.be.true();
            return; 
        }
        else if (title.includes('Rewards')) {
            const isScanQrCodeDisplayed = await 
            appPage.isScanQrCodeHeadingDisplayed();
            
            expect(isScanQrCodeDisplayed).to.be.true();
            return; 
        }
      await browser.pause(5000);
    }
 })

 Then(/^User verifies that "([^"]*)" date format is in the correct format$/, async () => {
    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

        const title = await browser.getTitle();
        if (title.includes('One Key Terms')) {

           const actualEffectiveDate = await oneKeyPage.getEffectiveDate();

           const expectedFormat = 'MMMM D, YYYY';
        // Use Moment.js to parse and validate the date format
        const parsedDate = moment(actualEffectiveDate, expectedFormat, true);

        // Verify if the date is in the correct format
        expect(parsedDate.isValid(), `Date "${actualEffectiveDate}" is not in the expected format: ${expectedFormat}`).to.be.true;
        return;
        }
        else if (title.includes('Deals & Discounts')) {
            const actualUpdatedDate = await privacyPage.getLastUpdatedDate();

            const expectedFormat = 'MMMM D, YYYY';
         // Use Moment.js to parse and validate the date format
         const parsedDate = moment(actualUpdatedDate, expectedFormat, true);
 
         // Verify if the date is in the correct format
         expect(parsedDate.isValid(), `Date "${actualUpdatedDate}" is not in the expected format: ${expectedFormat}`).to.be.true;
            return; 
        }
        
     
    }
 })

 When(/^User enters (.+) and selects (.+) from autosuggestion$/, async (destinationString, searchLocation) => {
    
   
    await homePage.enterLocation(destinationString);
    

    // select from auto suggestion

    await homePage.selectFromAutoSuggestion(searchLocation);
});

When(/^User enters Check-in date as (\d+) days from the current date$/, async (daysToAdd) => {
    // Get current date
    const currentDate = moment();
    // Calculate check-in date by adding days to the current date
    const checkInDate = currentDate.clone().add(daysToAdd, 'days');

    // Get the expected month from the check-in date
    const expectedMonth = checkInDate.format('MMMM');

     // Loop to navigate to the correct month
     for (let i = 0; i < 12; i++) {
        const currentMonthHeader = await getMonthHeader();
        if (currentMonthHeader.trim() === expectedMonth) {
            break; // Exit the loop if the month header matches
        } else {
            await homePage.clickNextDateButton(); // Click next month button
        }
    }

    // Once the correct month is displayed, select the date
    await selectDate(checkInDate.format('D MMMM YYYY'));
    /*
    // click date
    // await homePage.clickNextDateButton();

    // Convert daysToAdd to a number
    // const daysToAddNumber = parseInt(daysToAdd);

     // Calculate the number of months and remaining days
     const monthsToAdd = Math.floor(daysToAddNumber / 30); // Assuming each month has 30 days
     const remainingDays = daysToAdd % 30;
 
     // Click the next button on the calendar to navigate ahead by the calculated number of months
     for (let i = 0; i < monthsToAdd; i++) {
         await homePage.clickNextDateButton();
     }

    // Calculate the target date by adding the remaining days to the current date
    checkInDate = moment().add(remainingDays, 'days');

    // Format the target date
    const checkInDateFormatted = checkInDate.format('D, MMMM, YYYY'); 

    // Use your function to select the Check-in date
    await homePage.selectDate(checkInDateFormatted);

    */
});

When(/^User enters Check-out date as (\d+) days from the Check-in date$/, async (daysToAdd) => {
    
    // Calculate check-out date by adding days to the check-in date
    const checkOutDate = checkInDate.clone().add(daysToAdd, 'days');

    // Get the expected month from the check-out date
    const expectedMonth = checkOutDate.format('MMMM');

     // Loop to navigate to the correct month
     for (let i = 0; i < 12; i++) {
        const currentMonthHeader = await getMonthHeader();
        if (currentMonthHeader.trim() === expectedMonth) {
            break; // Exit the loop if the month header matches
        } else {
            await homePage.clickNextDateButton(); // Click next month button
        }
        // Once the correct month is displayed, select the date
        await selectDate(checkOutDate.format('D MMMM YYYY'));

   
        // user clicks on done btn
        await homePage.clickCalendarDoneButton();   
}
});

When(/^User clicks on the Search button$/, async () => {
    
     // user clicks on search btn
     await homePage.clickSearchButton();   
 });

When(/^User clicks on (\d+) star-rating filter$/, async (rating) => {
    
    // user clicks on star rating
    await destinationPage.clickStarRating(rating);   
}); 

When(/^User selects "([^"]*)" from the sort-by dropdown$/, async (option) => {
     // Click to open the sort-by dropdown
    await destinationPage.clickSortByBtn();
    await destinationPage.selectFromSortByDropdown(option);
    
}); 

When(/^User clicks "([^"]*)" button$/, async (btnName) => {
   
    switch (btnName) {
        case 'Get the app':
            await homePage.clickGetTheAppLink();
            await browser.pause(5000);
            break;
    }
   
}); 

Then(/^User verifies that QR code is displayed)$/, async () => {
    const isQrCodeDisplayed = await 
    appPage.isQrCodeDisplayed();
    expect(isQrCodeDisplayed).to.be.true();
    return; 
 })

Then(/^User verifies that text Tell us how we can improve our site is displayed$/, async () => {
    await browser.pause(5000);
    const istellUsHowWeCanImproveTextDisplayed = await destinationPage.isTellUsHowWeCanImproveTextDisplayed();
    expect(istellUsHowWeCanImproveTextDisplayed).to.be.true;
});

Then(/^User verifies that the Share Feedback Button is enabled)$/, async () => { 
    await destinationPage.isShareFeedBackButtonEnabled();
})

When(/^User scrolls to Reasons to download our app$/, async () => {
   await appPage.scrollToReasonsToDownloadApp();
}); 

Then(/^User verifies that Reasons to download our app is displayed$/, async () => {
    
    await browser.pause(5000);
    const isReasonsToDownloadAppTextDisplayed = await appPage.isReasonsToDownloadAppTextDisplayed();
    expect(isReasonsToDownloadAppTextDisplayed).to.be.true;
});

Then(/^User verifies "([^"]*)" is displayed$/, async (text) => {
    // Call the function to check if the specified option is enabled
    const isTextElementDisplayed = await appPage.isTextDisplayed(text);

    // Verify that the option is enabled
    expect(isTextElementDisplayed).to.be.true(`Option "${text}" under Shop travel is not enabled.`);
});

When(/^User clicks Shop travel link$/, async () => {
    await homePage.clickTravelersButton();
})

Then(/^User verifies that option "([^"]*)" under Shop travel are enabled$/, async (option) => {
    // Call the function to check if the specified option is enabled
    const isShopTravelOptionEnabled = await homePage.isShopTravelOptionEnabled(option);

    // Verify that the option is enabled
    expect(isShopTravelOptionEnabled).to.be.true(`Option "${option}" under Shop travel is not enabled.`);
});

Then(/^User verifies that Welcome to Help Center heading is displayed$/, async () => {
    
    await browser.pause(5000);
    const isWelcomeHeadingDisplayed = await csPage.isWelcomeHeadingDisplayed();
    expect(isWelcomeHeadingDisplayed).to.be.true;
});

When(/^User clicks More btn under "([^"]*)" heading$/, async (headingName) => {
   
    switch (headingName) {
        case 'Refund and Charges':
            await csPage.clickMoreOptions(headingName);
            await browser.pause(5000);
            break;
        case 'Lodging':
            await csPage.clickMoreOptions(headingName);
            await browser.pause(5000);
            break;
        case 'Car':
            await csPage.clickMoreOptions(headingName);
            await browser.pause(5000);
            break;
        case 'Account':
            await csPage.clickMoreOptions(headingName);
            await browser.pause(5000);
            break;
        case 'Privacy':
        await csPage.clickMoreOptions(headingName);
        await browser.pause(5000);
        break;

        case 'Security':
        await csPage.clickMoreOptions(headingName);
        await browser.pause(5000);
        break;

        case 'Loyalty & Rewards':
        await csPage.clickMoreOptions(headingName);
        await browser.pause(5000);
        break;
    }
   
}); 

Then(/^User verifies that link (+.) is enabled$/, async (linkName) => {
    
    // Call the function to check if the specified option is enabled
    const isLinkEnabled = await csPage.isLinkEnabled(linkName);
    
    // Verify that the option is enabled
    expect(isLinkEnabled).to.be.true(`Option "${linkName}" under Shop travel is not enabled.`);
  
});