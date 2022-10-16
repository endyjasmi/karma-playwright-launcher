const { chromium, firefox, webkit } = require("playwright");

function PlaywrightBrowserFactory(browser, options) {
  function PlaywrightBrowser(baseLauncherDecorator) {
    baseLauncherDecorator(this);
    this.name = browser.name();

    let instance;
    this.on("start", async (url) => {
      instance = await browser.launch(options);
      instance.once("disconnected", () => this.emit("done"));

      const page = await instance.newPage();
      await page.goto(url);
      this.markCaptured();
    });
    this.on("kill", (done) => {
      if (browser) return done();
      browser.close().then(() => done());
    });
  }
  PlaywrightBrowser.$inject = ["baseLauncherDecorator"];
  return PlaywrightBrowser;
}

module.exports = {
  "launcher:Chromium": [
    "type",
    PlaywrightBrowserFactory(chromium, { headless: false }),
  ],
  "launcher:ChromiumHeadless": [
    "type",
    PlaywrightBrowserFactory(chromium, { headless: true }),
  ],
  "launcher:Firefox": [
    "type",
    PlaywrightBrowserFactory(firefox, { headless: false }),
  ],
  "launcher:FirefoxHeadless": [
    "type",
    PlaywrightBrowserFactory(firefox, { headless: true }),
  ],
  "launcher:WebKit": [
    "type",
    PlaywrightBrowserFactory(webkit, { headless: false }),
  ],
  "launcher:WebKitHeadless": [
    "type",
    PlaywrightBrowserFactory(webkit, { headless: true }),
  ],
};
