class privacyPage {

    // locators of oneKey Page
    privacyHeadingLocator = '//div[@class="policy-content"]/preceding::h2[text()="Privacy Statement"]';

    lastUpdatedDateLocator = '//p[text()="Last Updated: September 11, 2023"]';
   
    
    /**
     *  const allHandles = await browser.getWindowHandles();
    
        for (const handle of allHandles) {
            await browser.switchToHandle(handle);
    
     */
    async isPrivacyHeadingDisplayed() {
        const privacyHeading = await $(this.privacyHeadingLocator);
        return await privacyHeading.isDisplayed();
    }

    async getLastUpdatedDate(){
        const actualUpdateDateText = await $(this.lastUpdatedDateLocator);

        const textEffective = actualUpdateDateText.split(' ')[0];

        const updatedDateActual = actualUpdateDateText.split(' ')[2] + ' ' + actualUpdateDateText.split(' ')[3] + ' ' + actualUpdateDateText.split(' ')[4];
        return updatedDateActual;
    }
    }
    
    module.exports = new privacyPage;