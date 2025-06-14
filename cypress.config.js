import { defineConfig } from 'Cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

export default defineConfig({
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
