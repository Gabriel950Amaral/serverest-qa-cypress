/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const url = cypress.config("baseUrlApi");

let response;
let usuarioId;

When('eu obtenho o id de um usuário existente', () => {
  cy.request({
    method: 'GET',
    url: `${url}/usuarios`,
    headers: { accept: 'application/json' },
  }).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.usuarios).to.be.an('array').that.is.not.empty;
    usuarioId = res.body.usuarios[0]._id;
  });
});

Given('que o usuário envia uma requisição de consulta usuarios com um ID válido', () => {
  cy.request({
    method: 'GET',
    url: `${url}/usuarios/${usuarioId}`,
    headers: { accept: 'application/json' },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then('os dados do usuário devem ser retornados', () => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('_id', usuarioId);
  expect(response.body).to.have.property('nome');
  expect(response.body).to.have.property('email');
  // Adicione outras propriedades conforme necessário
});

Then('uma mensagem de erro deve ser exibida', () => {
  expect(response.body).to.have.property('message');
  expect(response.body.message).to.match(/erro|não autorizado|não encontrado|inv[aá]lido/i);
})

Given('que o usuário envia uma requisição de consulta para a API de usuarios', () => {
  cy.request({
    method: 'GET',
    url: `${url}/usuarios`,
    headers: {
      accept: 'application/json'
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then('a consulta deve ser realizada com sucesso', () => {
  expect(response.status).to.eq(200)
});

Then('a lista de usuários deve ser retornada', () => {
  expect(response.body).to.have.property('usuarios');
  expect(response.body.usuarios).to.be.an('array').that.is.not.empty;
});
