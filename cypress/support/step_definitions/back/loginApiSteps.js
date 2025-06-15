import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const url = Cypress.config("baseUrlApi");

let usuario;
let response;

Given('que o usuário possui credenciais inválidas', () => {
  usuario = {
    email: 'invalido7697@teste.com',
    password: 'senhaInvalida'
  };
});

Given('que o usuário possui credenciais válidas', () => {
  usuario = {
    email: 'porfavornaoalterar@gmail.com',
    password: 'Teste@1234'
  };
});

Then('o login deve falhar', () => {
  expect(response.status).to.not.eq(200);
  expect([400, 401]).to.include(response.status);
});

Then('uma mensagem de erro deve ser retornada', () => {
  expect(response.body).to.have.property('message');
  expect(response.body.message).to.match(/email e senha|credenciais|incorretos|inv[aá]lidos/i);
});

When('o usuário envia uma requisição de login para a API', () => {
  cy.request({
    method: 'POST',
    url: `${url}/login`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: usuario,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then('o login deve ser realizado com sucesso', () => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('message', 'Login realizado com sucesso');
});

Then('o token de autenticação deve ser retornado', () => {
  expect(response.body).to.have.property('authorization');
  expect(response.body.authorization).to.not.be.empty;
});