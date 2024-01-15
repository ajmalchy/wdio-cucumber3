const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const homePage = require("../Pages/homePage");
const listYourPropertyPage = require("../Pages/listYourPropertyPage");
const privateResidencePage = require("../Pages/privateResidencePage");
const csPage = require("../Pages/csPage");
const siteFeedback = require("../Pages/siteFeedback");

Given(/^User launches the Hotels website$/, async () => {
    await browser.url('https://www.hotels.com/')
});

When(/^User clicks on the "Sign in" link$/, async () => {
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

When(/^clicks on CLOSE THIS WINDOW button$/, async () => {
    await siteFeedback.clickCloseWindow();
 })