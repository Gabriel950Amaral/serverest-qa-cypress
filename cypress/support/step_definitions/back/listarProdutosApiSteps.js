/// <reference types="cypress" />
import { Given,  Then } from '@badeball/cypress-cucumber-preprocessor';
const url = cypress.config("baseUrlApi");

let response;

Given('que o usuário envia uma requisição de consulta para a API de produtos', () => {
  cy.request({
    method: 'GET',
    url: `${url}/produtos`,
    headers: {
      accept: 'application/json'
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then('a busca por produtos deve ser realizada com sucesso', () => {
  expect(response.status).to.eq(200);
});

Then('a lista de produtos deve ser retornada', () => {
  expect(response.body).to.have.property('produtos');
  expect(response.body.produtos).to.be.an('array').that.is.not.empty;
});
