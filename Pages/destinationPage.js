class DestinationPage {

    // locators of Destination page
    starLocator_start = '//input[@aria-label="';
    starLocator_end = ' stars"]';

    sortByDropdownLocator = '//select[@id="sort-filter-dropdown-sort"]';

    tellUsHowWeCanImproveLocator = '//span[text()="Tell us how we can improve our site"]';
    shareFeedBackBtnLocator = '//a[@data-stid="goto-voice-of-the-customer-button"]';
    // functions of the page
   async clickStarRating(rating) {
    const starRating = await $(this.starLocator_start + rating + this.starLocator_end);
    await starRating.click();
  }

  async clickSortByBtn() {
       await $(this.sortByBtnLocator).click()
  }
  async selectFromSortByDropdown(option) {
      
    // Get the dropdown element
    const dropdown = await $(this.sortByDropdownLocator);
    // Select the option by its value attribute
    await dropdown.selectByAttribute('value', option);
  }

  async isTellUsHowWeCanImproveTextDisplayed() {
    const tellUsHowWeCanImproveText = await $(this.tellUsHowWeCanImproveLocator);
    return await tellUsHowWeCanImproveText.isDisplayed();
  }

  async isShareFeedBackButtonEnabled() {
    const shareFeedBackButton = await $(this.shareFeedBackBtnLocator);
    const isEnabled = await shareFeedBackButton.isEnabled();
    expect(isEnabled).to.be.true;
}



  }
    
    module.exports = new DestinationPage;