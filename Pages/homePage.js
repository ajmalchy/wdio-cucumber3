class Homepage {
    // locators of elements on Homepage
    signinLinkLocator = '//button[text()="Sign in"]';
    signinButtonLocator = '//a[@data-stid="link-header-account-signin"]';
    travelersButtonLocator = '//button[@data-stid="open-room-picker"]'
    childrenBtnPlusLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    childrenBtnMinusLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';

    allChildDropdownLocators = '//select[@class="uitk-field-select"]';

    // //select[@class="uitk-field-select"]//preceding-sibling::label[text()="Child 1 age"]
    dropDownFieldLocator_starts = '//select[@class="uitk-field-select"]//preceding-sibling::label[text()="';

    dropDownFieldLocator_ends = '"]'
    travelersDoneBtnLocator = '//button[@id="traveler_selector_done_button"]';

    totalTravelersLocator = '//button[@data-stid="open-room-picker"]';

    // //select[@class="uitk-field-select"]//option[text()="1"]
    dropDownOptions_start = '//select[@class="uitk-field-select"]//option[text()="';
    dropDownOptions_end = '"]';
    childrenNumberLocator = '//input[@id="traveler_selector_children_step_input-0"]';

    languageBtnLocator = '//button[@data-stid="button-type-picker-trigger"]';

    languageDropdownLocator = '//select[@id="language-selector"]';

    optionEnglishLocator = '//select[@id="language-selector"]//option[text()="English (United States)"]'
    optionEspanolLocator = '//select[@id="language-selector"]//option[text()="Español (Estados Unidos)"]';

    saveEnglishLocator = '//button[text()="Save"]';
    saveGuardarLocator = '//button[text()="Guardar"]';
    homeEspanolLocator = '//button[text()="Español"]';
    homeEnglishLocator = '//button[text()="English"]';

    listYourPropertyLocator = '//a[@data-stid="listYourProperty-link"]';
    supportBtnLocator = '//a[@data-stid="support-cs-link"]';

    // date container locators
    datesBtnLocator = '//button[@data-stid="uitk-date-selector-input1-default"]';
    dateBackBtnLocator = '//button[@data-stid="uitk-calendar-navigation-controls-previous-button"]';
    dateNextBtnLocator = '//button[@data-stid="uitk-calendar-navigation-controls-next-button"]';

    leftDisplayedMonthLocator = '//span[text()="January 2024"]';

    leftDatesLocator = '//table[@aria-label="January 2024"]//div[starts-with(@class,"uitk-date-number")]';

    rightDatesLocator = '//table[@aria-label="February 2024"]//div[starts-with(@class,"uitk-date-number")]'

    dateOptions_Start = '//table[@aria-label="';
    dateOptions_End = '"]//div[starts-with(@class,"uitk-date-number")]';

    adultBtnPlsLocator = '//input[@aria-label="Adults"]/following-sibling::button';

    adultNumberLocator = '//input[@aria-label="Adults"]';

    adultBtnMinusLocator = '//input[@aria-label="Adults"]/preceding-sibling::button';

    searchLocationLocator = '//button[@data-stid="destination_form_field-menu-trigger"]';
    locationInputLocator = '//input[@data-stid="destination_form_field-menu-input"]';

    autoSuggestionOption1Locator = '(//ul[@data-stid="destination_form_field-results"]//button)[1]';

    allAutoSuggestionOptions = '//ul[@data-stid="destination_form_field-results"]//button';

    calendarDoneBtnLocator = '//button[@data-stid="apply-date-selector"]';

    searchBtnLocator = '//button[@id="search_button"]';

    // get the app locator
    getTheAppLinkLocator = '//a[@data-context="global_navigation"]//div[text()="Get the app"]';
    // functions to interact with the elements on homepage
    async clickGetTheAppLink() {
        await $(this.getTheAppLinkLocator).waitForClickable();
        await $(this.getTheAppLinkLocator).click()
    }

    async clickSigninLinkLocator() {
        await $(this.signinLinkLocator).waitForClickable();
        await $(this.signinLinkLocator).click()
    }

    async clickSigninButtonLocator() {
        await $(this.signinButtonLocator).waitForDisplayed();
        await $(this.signinButtonLocator).waitForClickable();
        await $(this.signinButtonLocator).click();
    }

    async clickTravelersButton() {
        await $(this.travelersButtonLocator).waitForClickable();
        await $(this.travelersButtonLocator).click();
    }

    async clickCalendarDoneButton() {
        await $(this.calendarDoneBtnLocator).waitForClickable();
        await $(this.calendarDoneBtnLocator).click();
    }

    async clickSearchButton() {
        await $(this.searchBtnLocator).waitForClickable();
        await $(this.searchBtnLocator).click();
    }


    async getChildrenNumberValue() {
        await browser.pause(5000);

        await $(this.childrenNumberLocator).waitForDisplayed;
        const childrenNumberInput = await $(this.childrenNumberLocator);
        const numberOfChildrenText = await childrenNumberInput.getAttribute("value");
        console.log(`\n\n\nnumberOfChildrenText = ${numberOfChildrenText}`);
        await browser.pause(10000);
        const actualChildrenNumber = parseInt(numberOfChildrenText);
        return actualChildrenNumber;
    }

    async clickChildrenBtnPlus() {
        await $(this.childrenBtnPlusLocator).waitForClickable;
        await $(this.childrenBtnPlusLocator).click();
        await browser.pause(2000);
    }
    async clickChildrenBtnMinus() {
        await $(this.childrenBtnMinusLocator).waitForClickable;
        await $(this.childrenBtnMinusLocator).click();
        await browser.pause(2000);
    }


    async getVisibleChildrenDropdownCount() {
        // await browser.pause(10000);

        const dropdownElements = await $$(this.allChildDropdownLocators);
        return dropdownElements.filter((element) => element.isDisplayed()).length;
    }

    //  problem below isChildrenDropdownDisplayed()
    async isChildrenDropdownDisplayed() {
        const dropdownElements = await $$(this.allChildDropdownLocators);
        console.log(dropdownElements.length);
        if (dropdownElements.length > 0) {
            const dropdownElement = dropdownElements.find(async (element) => await element.isDisplayed());
            return dropdownElement;
        } else {
            return false;
        }
    }
    async isButtonEnabled(buttonType) {
        let buttonSelector;
        if (buttonType == 'Plus') {
            buttonSelector = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
        } else if (buttonType == 'Minus') {
            buttonSelector = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
        }
        const buttonElement = await $(buttonSelector)
        return await buttonElement.isEnabled();

    }
    async clickLanguageBtn() {

        await $(this.languageBtnLocator).click();
        await browser.pause(2000);
    }

    async clickLanguageDropdown() {
        await $(this.languageDropdownLocator).waitForClickable;
        await $(this.languageDropdownLocator).click();
        await browser.pause(2000);
    }
    async selectLanguage(language) {
        if (language == 'Español (Estados Unidos)') {
            await $(this.optionEspanolLocator).click()
        } else if (language == 'English (United States)') {
            await $(this.optionEnglishLocator).click();
        }
        else return;
    }

    async clickSaveLanguage(saveLanguage) {
        if (saveLanguage == 'Save') {
            await $(this.saveEnglishLocator).click();
        } else if (saveLanguage == 'Guardar') {
            await $(this.saveGuardarLocator).click();
            await browser.pause(2000);
        }
        else return;

    }
    async isLanguageDisplayed(language) {
        if (language == "Español") {
            const displayedLanguage = await $(this.homeEspanolLocator).getText();
            console.log('displayedLanguage', displayedLanguage);
            return displayedLanguage === language;
        } else if (language == "English") {
            const displayedLanguage = await $(this.homeEnglishLocator).getText();
            console.log('displayedLanguage', displayedLanguage);
            return displayedLanguage === language;
        }
        else return;



        // expect(displayedLanguage).to.equal(language);
    }

    async clickListYourProperty() {
        await $(this.listYourPropertyLocator).click();
    }

    async clickSupportBtn() {
        await $(this.supportBtnLocator).waitForClickable();
        await $(this.supportBtnLocator).click()
    }

    async clickDatesButton() {
        await $(this.datesBtnLocator).waitForClickable();
        await $(this.datesBtnLocator).click();
    }

    async clickBackDateButton() {
        await $(this.dateBackBtnLocator).waitForClickable();
        await $(this.dateBackBtnLocator).click();
    }

    async clickNextDateButton() {
        await $(this.dateNextBtnLocator).waitForClickable();
        await $(this.dateNextBtnLocator).click();
    }

    async getLeftDisplayedMonth() {
        const textLeftMonth = await $(this.leftDisplayedMonthLocator);
        return await textLeftMonth.getText();
    }

    async navigateToCurrentMonth() {
        const currentMonth = moment().format('MMMM YYYY');
        let displayedMonth;

        // Maximum number of attempts to find the current month
        const maxAttempts = 12;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            displayedMonth = await this.getCurrentMonth();

            if (currentMonth === displayedMonth) {
                console.log('Current month found:', currentMonth);
                return;
            }

            // If the current month is not found, navigate to the next or previous month
            const currentMonthDate = moment(displayedMonth, 'MMMM YYYY');
            const isCurrentMonthAfter = currentMonthDate.isAfter(moment(), 'month');

            // Use the appropriate button based on whether the current month is after or before
            const buttonLocator = isCurrentMonthAfter ? this.dateBackBtnLocator : this.dateNextBtnLocator;

            await $(buttonLocator).click();
            await browser.pause(1000);

        }
    }

    // async selectLeftDate(targetDate) {
    //     const allLeftDates = await $$(this.leftDatesLocator);

    //     for (const leftDate of allLeftDates) {
    //         const dateValue = await leftDate.getText();
    //         if( dateValue == targetDate) {
    //             await leftDate.click();
    //             break;
    //         }
    //     }
    // }

    // async selectRightDate(targetDate) {
    //     const allRightDates = await $$(this.rightDatesLocator);

    //     for (const rightDate of allRightDates) {
    //         const dateValue = await rightDate.getText();
    //         if( dateValue == targetDate) {
    //             await rightDate.click();
    //             break;
    //         }
    //     }
    // }



    async selectDate(dateToSelect) {
        const date = dateToSelect.split(' ')[0];
        const monthYear = dateToSelect.split(' ')[1] + ' ' + dateToSelect.split(' ')[2];
        //   new technique -  joining string
        const dateOptions = await $$(this.dateOptions_Start + monthYear + this.dateOptions_End);
        for (const dateElement of dateOptions) {
            const dateText = await dateElement.getText();
            if (dateText == date) {
                await dateElement.click();
                break;
            }
        }
    }

    async isPastDatesEnabled() {
        const dateCells = await $$(this.leftDatesLocator);

        const currentDate = moment();
        // Iterate through date cells and check if each past date is disabled
        for (const dateCell of dateCells) {
            const dateText = await dateCell.getText();
            const date = moment(dateText, 'DD');

            if (date.isBefore(currentDate, 'day')) {
                const isDisabled = !(await dateCell.isEnabled());
                expect(isDisabled).to.be.true;
            }
        }
    }

    async isBackButtonDisabled() {
        const backButton = await $(this.dateBackBtnLocator);
        const isDisabled = !(await backButton.isEnabled());
        expect(isDisabled).to.be.true;
    }


    async getAdultNumberValue() {
        await browser.pause(5000);

        await $(this.adultNumberLocator).waitForDisplayed;
        const adultNumberInput = await $(this.adultNumberLocator);
        const numberOfAdultText = await adultNumberInput.getAttribute("value");
        console.log(`\n\n\nnumberOfChildrenText = ${numberOfAdultText}`);
        await browser.pause(10000);
        const actualadultNumber = parseInt(numberOfAdultText);
        return actualadultNumber;
    }

    async clickAdultBtnPlus() {
        await $(this.adultBtnPlsLocator).waitForClickable;
        await $(this.adultBtnPlsLocator).click();
        await browser.pause(2000);
    }
    async clickAdultBtnMinus() {
        await $(this.adultBtnMinusLocator).waitForClickable;
        await $(this.adultBtnMinusLocator).click();
        await browser.pause(2000);
    }

    async selectChildAgeDropdown(childNumber, age) {
        const dropDownOptions = await $$(this.dropDownFieldLocator_starts + childNumber + this.dropDownFieldLocator_ends);
        for (const dropDownElement of dropDownOptions) {
            const dropDownText = await dropDownElement.getText();
            if (dropDownText == childNumber) {
                await dropDownElement.click();
                const optionFromDropdown =
                    await $(this.dropDownOptions_start + age + this.dropDownOptions_end);
                const optionSelected = await await optionFromDropdown.selectByVisibleText(age);
                break;
            }
        }
    }

    async clickTravelersDoneButton() {
        await $(this.travelersButtonLocator).waitForClickable();
        await $(this.travelersButtonLocator).click();
    }

    async getTotalNumberOfTravelers() {
        const totalNumberOfTravelers = await $(totalTravelersLocator).getText();
        return totalNumberOfTravelers;
    }

    async clickSearchLocation() {
        await $(this.searchLocationLocator).waitForDisplayed();
        await $(this.searchLocationLocator).waitForClickable();
        await $(this.searchLocationLocator).click();
    }

    async enterLocation(destinationString) {
        await $(this.searchLocationLocator).click();
        await $(this.locationInputLocator).setValue(destinationString);
    }

    async selectFromAutoSuggestion(searchLocation) {
        await browser.waitUntil(
            async () => await browser.$(this.autoSuggestionOption1Locator).isDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: "Autosuggestion list did not appear"
            }
        );
        const autoSuggestionOptions = await browser.$$(this.allAutoSuggestionOptions);

        for (const option of autoSuggestionOptions) {
            const attributeValue = await option.getAttribute('aria-label');

            if (attributeValue === searchLocation) {
                await option.click();
                return;
            }
        }
    }
    

}



module.exports = new Homepage;