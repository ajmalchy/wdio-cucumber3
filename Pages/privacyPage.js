class privacyPage {

    // locators of oneKey Page
    privacyHeadingLocator = '//div[@class="policy-content"]/preceding::h2[text()="Privacy Statement"]';
   
    
    /**
     *  const allHandles = await browser.getWindowHandles();
    
        for (const handle of allHandles) {
            await browser.switchToHandle(handle);
    
     */
    async isPrivacyHeadingDisplayed() {
        const privacyHeading = await $(this.privacyHeadingLocator);
        return await privacyHeading.isDisplayed();
    }
    }
    
    module.exports = new privacyPage;