class CustomerServicePage {

// locators of Customer service page
siteFeedbackLinkLocator = '//a[text()="Site Feedback"]';
submitBtnLocator = '//input[@data-value="  Submit  "]';

errorMsgLocator = '//p[text()="The following fields are required:"]';

redBoxLocator = '//span[@id="error-1"]';

welcomeHeadingLocator = '//h1[text()="Welcome to Help Center"]';

refundMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][1]';

lodgingMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][2]';

carMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][3]';

accountMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][4]';

privacyMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][5]';

securityMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][6]';

loyaltyMoreOptionsLocator = '//h3[text()="Refunds and Charges"]/following::button[text()="More"][7]';

linkLocator_Start = '//button[text()="';

linkLocator_End = '"]';
// functions of the page

/**
 *  const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
        await browser.switchToHandle(handle);

 */

async isWelcomeHeadingDisplayed() {
    const welcomeHeading = await $(this.welcomeHeadingLocator);
    return await welcomeHeading.isDisplayed();
          }
async clickSiteFeedback() {
    await $(this.siteFeedbackLinkLocator).waitForClickable();
    await $(this.siteFeedbackLinkLocator).click();
}

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
async clickMoreOptions(headingName) {
    
    switch (headingName) {
        case 'Refund and Charges':
            await $(this.refundMoreOptionsLocator);
            await $(this.refundMoreOptionsLocator).click();
            await browser.pause(5000);
            break;
        
        case 'Lodging':
            await $(this.lodgingMoreOptionsLocator);
            await $(this.lodgingMoreOptionsLocator).click();
            await browser.pause(5000);
            break;

        case 'Car':
            await $(this.carMoreOptionsLocator);
            await $(this.carMoreOptionsLocator).click();
            await browser.pause(5000);
            break;

        case 'Account':
            await $(this.accountMoreOptionsLocator);
            await $(this.accountMoreOptionsLocator).click();
            await browser.pause(5000);
            break;

        case 'Privacy':
            await $(this.privacyMoreOptionsLocator);
            await $(this.privacyMoreOptionsLocator).click();
            await browser.pause(5000);
            break;
 
        case 'Loyalty & Rewards':
            await $(this.loyaltyMoreOptionsLocator);
            await $(this.loyaltyMoreOptionsLocator).click();
            await browser.pause(5000);
            break;
    }
    
}

async isLinkEnabled(linkName) {
    // Locate the specified option
    const linkElement = await $(this.linkLocator_Start + linkName + this.linkLocator_End);

    // Check if the option is enabled
    const isLinkElementEnabled = await textElement.isEnabled();

    return isLinkElementEnabled;
}
}

module.exports = new CustomerServicePage;