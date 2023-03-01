const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");

module.exports = defineConfig({
  viewportHeight: 660,
  viewportWidth: 1000,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: "https://www.saucedemo.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        "module-resolver",
        {
          alias: {
            "@tests": "./tests",
            "@helper": "./tests/helper"
          }
        }
      ]);
      on("file:preprocessor", browserify(options));
    },
    supportFile: false,
    specPattern: "tests/scenario/**/*.test.js"
  }
});

// browserify({
//     browserifyOptions: {
//       extensions: ['.js', '.ts'],
//       plugin: [
//         ['tsify']
//       ]
//     }
//   })
