class Homepage {
    // locators of elements on Homepage
    signinLinkLocator = '//button[text()="Sign in"]';
    signinButtonLocator = '//a[@data-stid="link-header-account-signin"]';
    travelersButtonLocator = '//button[@data-stid="open-room-picker"]'
    childrenBtnPlusLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    childrenBtnMinusLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    allChildDropdownLocators = '//select[@class="uitk-field-select"]';
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

    // functions to interact with the elements on homepage
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
}

module.exports = new Homepage;