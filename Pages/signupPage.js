class signupPage {

    // locators of signup page
    oneKeyRewardsLinkLocator = '//a[text()="One Key Rewards Terms & Conditions"]';
    privacyLinkLocator = '//a[text()="Privacy Statement"]';
    
    /**
     *  const allHandles = await browser.getWindowHandles();
    
        for (const handle of allHandles) {
            await browser.switchToHandle(handle);
    
     */
    async clickOneKeyRewardsLink(){
        await $(this.oneKeyRewardsLinkLocator).click();
    }
    async clickPrivacyLink(){
        await $(this.privacyLinkLocator).click();
    }
    
    }
    
    module.exports = new signupPage;