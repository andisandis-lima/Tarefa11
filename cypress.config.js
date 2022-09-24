const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g38rrk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
