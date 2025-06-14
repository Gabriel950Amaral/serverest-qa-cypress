const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(on, config) {
      // Ativa o plugin cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Usa ESBuild como pré-processador
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    baseUrl: 'https://front.serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    viewportWidth: 1000,
    viewportHeight: 660,
    specPattern: 'cypress/integration/**/*.feature',
  },
});
