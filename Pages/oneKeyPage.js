class oneKeyPage {

    // locators of oneKey Page
    oneKeyHeadingLocator = '//h1[text()="One Key Terms and Conditions"]';
   
    
    /**
     *  const allHandles = await browser.getWindowHandles();
    
        for (const handle of allHandles) {
            await browser.switchToHandle(handle);
    
     */
    async isOneKeyHeadingDisplayed() {
        const oneKeyHeading = await $(this.oneKeyHeadingLocator);
        return await oneKeyHeading.isDisplayed();
    }
    }
    
    module.exports = new oneKeyPage;