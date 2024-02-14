class appPage {

    // locators of appPage
  scanQrCodeHeadingLocator = '//h2[text()="Scan the QR code and download our app"]';

  qrCodeLocator = '//img[@alt="QR code"]';
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


    
    }
    
    module.exports = new appPage;