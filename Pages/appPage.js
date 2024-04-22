class appPage {

    // locators of appPage
  scanQrCodeHeadingLocator = '//h2[text()="Scan the QR code and download our app"]';

  qrCodeLocator = '//img[@alt="QR code"]';

  reasonsToDownloadAppHeadingLocator = '//b[text()="Reasons to download our app"]';

  textLocator_Start = '//span[text()="';

  textLocator_End = '"]';

    /**
     *  const allHandles = await browser.getWindowHandles();
    
        for (const handle of allHandles) {
            await browser.switchToHandle(handle);
    
     */
    async isScanQrCodeHeadingDisplayed() {
        const scanQrHeading = await $(this.scanQrCodeHeadingLocator);
        return await scanQrHeading.isDisplayed();
    }

    async isQrCodeDisplayed() {
        const qrCode = await $(this.qrCodeLocator);
        return await qrCode.isDisplayed();
    }

    async scrollToReasonsToDownloadApp() {
        const reasonsToDownload = await $(this.reasonsToDownloadAppHeadingLocator);
        await reasonsToDownload.scrollIntoView();
    }

    async isReasonsToDownloadAppTextDisplayed() {
        const reasonsToDownloadAppText = await $(this.reasonsToDownloadAppHeadingLocator);
        return await reasonsToDownloadAppText.isDisplayed();
      }
    
      async isTextDisplayed(text) {
        

        // Locate the specified option
        const textElement = await $(this.textLocator_Start + text + this.textLocator_End);

        // Check if the option is enabled
        const isTextElementDisplayed = await textElement.isDisplayed();

        return isTextElementDisplayed;
    }

    }
    
    module.exports = new appPage;