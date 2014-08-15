# Can I has PDF?

A tiny NPM module that determines if the browser can render PDFs, either with built-in support like Safari, Chrome and Firefox, or with Adobe Acrobat in Internet Explorer.

The module is expected to be used with [the amazing browserify](https://github.com/substack/node-browserify).

    var pdfSupport = require('browser-pdf-support');

    if (pdfSupport()) {
      console.log('we has PDF!');
    } else {
      console.log('oh dear, you'll need to download acrobat or a real browser...');
    }
