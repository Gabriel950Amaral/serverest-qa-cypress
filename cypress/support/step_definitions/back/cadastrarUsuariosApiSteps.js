
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const url = Cypress.config('baseUrlApi');

let novoUsuario;
let response;


Then('uma mensagem de erro de campo obrigatório deve ser exibida', () => {
  expect(response.status).to.be.oneOf([400, 422]);
  expect(response.body).to.have.property('nome');
  expect(response.body.nome).to.eq('nome não pode ficar em branco');
});

Given('que possuo dados válidos para cadastro de usuário', () => {
  novoUsuario = {
    nome: 'Usuário Teste',
    email: `usuario${Date.now()}@email.com`,
    password: '123456',
    administrador: 'true'
  };
});

When('envio uma requisição de cadastro para a API', () => {
  cy.request({
    method: 'POST',
    url: `${url}/usuarios`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: novoUsuario,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

When('o ID do usuário deve ser retornado', () => {
  expect(response.body).to.have.property('_id');
  expect(response.body._id).to.not.be.empty;
})

Then('o cadastro deve ser realizado com sucesso', () => {
  expect(response.status).to.eq(201);
  expect(response.body).to.have.property('message').and.to.match(/sucesso/i);
  expect(response.body).to.have.property('_id');
  expect(response.body).to.not.have.property('erro');
});

Then('que possuo dados inválidos para cadastro de usuário', () => {
  novoUsuario = {
    nome: '',
    email: 'emailInvalido',
    password: '123',
    administrador: 'false'
  };
});

When('envio uma requisição de cadastro com dados inválidos para a API', () => {
  cy.request({
    method: 'POST',
    url: `${url}/usuarios`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: novoUsuario,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then('o cadastro deve falhar', () => {
  expect(response.status).to.not.eq(201);
  expect([400, 422]).to.include(response.status);
});
