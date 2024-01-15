
class ListYourPropertyPage {
// locators of elements on ListYourHomePage

whatWouldYouLikeToListLocator = '//p[text()="What would you like to list?"]';

textLodgingLocator = '//p[text()="Lodging"]';
textPrivateResidenceLocator = '//p[text()="Private residence"]';
privateResidenceBtnLocator = '//div[@id="classification_privateResidence"]';

// functions to interact with the elements on ListYourHomePage

async isWhatWouldYouLikeToListDisplayed(){
   const textListDisplayed = await $(this.whatWouldYouLikeToListLocator).getText();

   if (textListDisplayed == "What would you like to list?" && await whatWouldYouLikeToListLocator.isDisplayed()) {
       return textListDisplayed;
   }
}

async isLodgingDisplayed(){
    const textLodgingDisplayed = await $(this.textLodgingLocator).getText();

    if (textLodgingDisplayed == "Lodging" && await this.textLodgingLocator.isDisplayed()) {
        return textLodgingDisplayed;
    }
 }

 async isPrivateResidenceDisplayed(){
    const textPrivateResidenceDisplayed = await $(this.textPrivateResidenceLocator).getText();

    if (textPrivateResidenceDisplayed == "Private residence" && await this.textPrivateResidenceLocator.isDisplayed()) {
    return textPrivateResidenceDisplayed;
    }
 }

 async clickPrivateResidence(){
    await $(this.privateResidenceBtnLocator).waitForClickable;
    await $(this.privateResidenceBtnLocator).click();
    
 }

 
}

module.exports = new ListYourPropertyPage;