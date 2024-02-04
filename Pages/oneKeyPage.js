class oneKeyPage {

    // locators of oneKey Page
    oneKeyHeadingLocator = '//h1[text()="One Key Terms and Conditions"]';
   
    effectiveDateLocator = '//p[text()="Effective from July 6, 2023"]';
    
    /**
     *  const allHandles = await browser.getWindowHandles();
    
        for (const handle of allHandles) {
            await browser.switchToHandle(handle);
    
     */
    async isOneKeyHeadingDisplayed() {
        const oneKeyHeading = await $(this.oneKeyHeadingLocator);
        return await oneKeyHeading.isDisplayed();
    }

    async getEffectiveDate(){
        const actualEffectiveDateText = await $(this.effectiveDateLocator);

        const textEffective = actualEffectiveDateText.split(' ')[0];

        const effectiveDateActual = actualEffectiveDateText.split(' ')[2] + ' ' + actualEffectiveDateText.split(' ')[3] + ' ' + actualEffectiveDateText.split(' ')[4];
        return effectiveDateActual;
    }
    }
    
    module.exports = new oneKeyPage;