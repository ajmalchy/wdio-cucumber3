
class PrivateResidencePage {
// locators of elements on ListYourHomePage
    
textStep1of3Locator = '//div[text()="Step 1 of 3"]';
increaseBedroomsLocator = '//button[@aria-label="Increase bedrooms"]';
decreaseBedroomsLocator = '//button[@aria-label="Decrease bedrooms"]';

increaseBathroomsLocator = '//button[@aria-label="Increase bathrooms"]';
decreaseBathroomsLocator = '//button[@aria-label="Decrease bathrooms"]';

bedroomNumberLocator = '//input[@name="bedroom-count"]';

bathroomNumberLocator = '//input[@name="bathroom-count"]';

nextBtnLocator = '//button[@id="propertyInfoNextBtn"]';

textStep2of3Locator = '//div[text()="Step 2 of 3"]';

textWheresYourPlaceLocator = '//h1[contains(text(), "your place located?")]'
textYourPlaceLocator = '//h1[contains(text(), "your place located")]';

enterAddressFieldLocator = '//input[@id="locationTypeAhead"]';

allAutoSuggestionsLocator = '//li[@class="typeahead-prediction-item fds-list-item"]';

mapLocator = '//div[@aria-label="Map"]';

pinLocator = '//span[contains(text(), "To navigate")]/following-sibling::div';

mapFooterLocator = '//span[contains(text(), "Move the pin")]';
// functions to interact with the elements on ListYourHomePage
async isStepsDisplayed(){
    const textSteps1Displayed = await $(this.textStep1of3Locator).getText();
    const textSteps2Displayed = await $(this.textStep2of3Locator).getText();
    // const textSteps3 = await $(this.textStep2of3Locator).getText();

    if(textSteps1Displayed.includes('1') && await this.textStep1of3Locator.isDisplayed()) {
    return textSteps1Displayed;
    }
    else if(textSteps2Displayed.includes('2') && await this.textStep2of3Locator.isDisplayed()) {
        return textSteps2Displayed;
    }
    
 }

 async getBedroomNumberValue() {
    const bedroomNumberInput = await $(this.bedroomNumberLocator);
    const numberOfBedroomText = await bedroomNumberInput.getAttribute('value');

    await browser.pause(2000);
    const actualBedroomNumber = parseInt(numberOfBedroomText);
    return actualBedroomNumber;
 }
 async clickBedroomBtnPlus() {
    await $(this.increaseBedroomsLocator).waitForClickable;
    await $(this.increaseBedroomsLocator).click();
    await browser.pause(2000);
}
async clickBedroomBtnMinus() {
    await $(this.decreaseBedroomsLocator).waitForClickable;
    await $(this.decreaseBedroomsLocator).click();
    await browser.pause(2000);
}

async getBathroomNumberValue() {
    const bathroomNumberInput = await $(this.bathroomNumberLocator);
    const numberOfBathroomText = await bathroomNumberInput.getAttribute('value');

    await browser.pause(2000);
    const actualBathroomNumber = parseInt(numberOfBathroomText);
    return actualBathroomNumber;
 }

async clickBathroomBtnPlus() {
    await $(this.increaseBathroomsLocator).waitForClickable;
    await $(this.increaseBathroomsLocator).click();
    await browser.pause(2000);
}
async clickBathroomBtnMinus() {
    await $(this.decreaseBathroomsLocator).waitForClickable;
    await $(this.decreaseBathroomsLocator).click();
    await browser.pause(2000);
}

async clickNextBtn() {
    await $(this.nextBtnLocator).waitForClickable;
    await $(this.nextBtnLocator).click();
}


async isWheresYourPlaceDisplayed(){
    const textYourPlaceDisplayed = await $(this.textWheresYourPlaceLocator).getText();

    if(textYourPlaceDisplayed.includes('your place located?') && await this.textWheresYourPlaceLocator.isDisplayed()) {
    return textYourPlaceDisplayed;
    }
 }

async enterAddress(address) {
    const addressInput = await $(this.addressInputLocator);
    await addressInput.setValue(address);
  }


async enterAddress(address) {
    const addressInput = await $(this.enterAddressFieldLocator);
    await addressInput.setValue(address);
  }

async selectFromAutoSuggestion(selectedOption) {
    const allAutoSuggestions = await $$(this.allAutoSuggestionsLocator);
    // Your logic to select the option from auto-suggestion, e.g., click or hover
    for (const suggestion of allAutoSuggestions) {
        const suggestionText = await suggestion.getText();
            if (suggestionText == selectedOption) {
                await suggestion.click();
                break;
    }
    
  }
}

async isMapDisplayed(){
    const mapDisplayed = await $(this.mapLocator).getAttribute('aria-label');

    if(mapDisplayed == 'Map' && await this.mapLocator.isDisplayed()) {
    return mapDisplayed;
    }
 }

async isPinDisplayed(){
    const pinDisplayed = await $(this.pinLocator);

    if(pinDisplayed.isDisplayed()) {
    return pinDisplayed;
    }
 }

 async isMapFooterDisplayed(){
    const mapFooterDisplayed = await $(this.mapFooterLocator).getText();

    if(mapFooterDisplayed.includes('Move the pin') && await this.mapFooterLocator.isDisplayed()) {
    return mapFooterDisplayed;
    }
 }
}
module.exports = new PrivateResidencePage;