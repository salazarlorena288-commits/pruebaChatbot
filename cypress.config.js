const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gemini.google.com/app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
