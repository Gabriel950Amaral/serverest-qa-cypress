// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands';
import '@badeball/cypress-cucumber-preprocessor';
import '@shelex/cypress-allure-plugin';
import svg4everybody from 'svg4everybody';
svg4everybody();

// Ignora absolutamente todos os erros de script durante os testes do Cypress
Cypress.on('uncaught:exception', () => {
  return false; // impede que qualquer erro falhe o teste
});

// Alternatively you can use CommonJS syntax:
// require('./commands')