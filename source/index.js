const { chromium, firefox, webkit } = require("playwright");

function PlaywrightBrowserFactory(browser) {
  function PlaywrightBrowser(baseLauncherDecorator) {
    baseLauncherDecorator(this);
    this.name = browser.name();

    let instance;
    this.on("start", async (url) => {
      instance = await browser.launch({ headless: true });
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
  "launcher:Chromium": ["type", PlaywrightBrowserFactory(chromium)],
  "launcher:Firefox": ["type", PlaywrightBrowserFactory(firefox)],
  "launcher:WebKit": ["type", PlaywrightBrowserFactory(webkit)],
};
