# Karma Playwright Launcher

Karma launcher for Playwright's bundled browsers. The advantage of using playwright's bundled browser as launcher is it provide test consistency across different environment.

## 🤔 Tutorial

1. First you will need to install this plugin.

```
npm install --save-dev @endyjasmi/karma-playwright-launcher
```

2. After that, you will need to configure the plugin inside `karma.conf.js`.

```js
module.exports = function (config) {
  config.set({
    browsers: ["Chromium", "Firefox", "WebKit"],
    plugins: ["@endyjasmi/karma-playwright-launcher", "karma-*"],
    ...otherConfig,
  });
};
```

3. You are done! Your karma should launch test using Playwright's bundled browser.

## ⚖️ License

```
MIT License

Copyright (c) 2022 Endy Jasmi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
