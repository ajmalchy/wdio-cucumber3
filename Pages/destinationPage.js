class DestinationPage {

    // locators of Destination page
    starLocator_start = '//input[@aria-label="';
    starLocator_end = ' stars"]';

    sortByDropdownLocator = '//select[@id="sort-filter-dropdown-sort"]';

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
  }
    
    module.exports = new DestinationPage;