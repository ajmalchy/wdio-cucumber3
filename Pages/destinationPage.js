class DestinationPage {

    // locators of Customer service page
    starLocator_start = '//input[@aria-label="';
    starLocator_end = ' stars"]';
    // functions of the page
   async clickStarRating(rating) {
    const starRating = await $(this.starLocator_start + rating + this.starLocator_end);

    await starRating.click();
  }
    
    }
    
    module.exports = new DestinationPage;