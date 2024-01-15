
class SiteFeedbackPage {
    // locators of site feedback page
submitBtnLocator = '//input[@data-value="  Submit  "]';

errorMsgLocator = '//p[text()="The following fields are required:"]';

redBoxLocator = '//span[@id="error-1"]';

textOverallLocator = '//legend[text()="Overall"]';

overallRating3Locator = '//input[@id="overall-3"]';

contentRating3Locator = '//input[@id="content-3"]';

designRating3Locator = '//input[@id="design-3"]';

easeOfUseRating3Locator = '//input[@id="usability-3"]';

thankYouForFeedbackLocator = '//h1[@id="int-thankyou-heading"]';

closeWindowBtn = '//input[@value="Close this Window"]';
// functions of the page

/**
 *  const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

 */


async clickSubmitBtn() {
    await $(this.submitBtnLocator).waitForClickable();
    await $(this.submitBtnLocator).click();
}

async isErrorMsgDisplayed(errorMsg) {
    const textErrorMsgDisplayed = await $(this.errorMsgLocator).getText();

    if(textErrorMsgDisplayed == errorMsg && await this.errorMsgLocator.isDisplayed()) {
       return textErrorMsgDisplayed;
    } 
}

async isRedBoxDisplayed() {
    const redBoxDisplayed = await $(this.redBoxLocator).getText();

    if(redBoxDisplayed == '1' && this.redBoxLocator.isDisplayed() ) {
        return redBoxDisplayed;
    }
}

async selectAnyRating(rating) {
     if(rating === "OVERALL") {
        this.overallRating3Locator.click();
     } 
     else if (rating === "CONTENT") {
        this.contentRating3Locator.click();
     }
     else if (rating === "DESIGN") {
        this.designRating3Locator.click();
     }
     else if (rating === "EASE OF USE") {
        this.easeOfUseRating3Locator.click();
     }
     else return;
}


async isThankYouForFeedbackDisplayed() {
    const textDisplayed = await $(this.thankYouForFeedbackLocator).getText();

    if(textDisplayed.includes('feedback') && this.thankYouForFeedbackLocator.isDisplayed() ) {
        return textDisplayed;
    }
}

async clickCloseWindow() {
    await $(this.closeWindowBtn).click();
}
}

module.exports = new SiteFeedbackPage;