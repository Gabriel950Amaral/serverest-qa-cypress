const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureWriter(on, config);

      return config;
    },
    baseUrl: 'https://front.serverest.dev',
    baseUrlApi: 'https://serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    viewportWidth: 1000,
    viewportHeight: 660,
    specPattern: 'cypress/e2e/**/*.feature',
    env: {
      allure: true
    }
  },
});
