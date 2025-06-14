/* global Given, Then, When */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from "../pageobjects/LoginPage"
const loginPage = new LoginPage()

Given('I open the site', () => {
  cy.visit('/')
})

Then('I see the title {string}', (title) => {
  cy.title().should('eq', title);
});



Given('que estou na tela de login do sistema', () => {
  loginPage.acessarSite()
})


When('preencho o campo “Email” com um usuário válido', () => {
  loginPage.preencherEmailValido();
});

When('preencho o campo “Senha” com um usuário válido', () => {
  loginPage.preencherSenhaValida()
});

When('não preencho o campo “Email”', () => {
  loginPage.validarCampoVazioEmail();
});
When('não preencho o campo “Senha”', () => {
  loginPage.validarCampoVazioSenha();
});

When('clico no botão “ENTRAR”', () => {
  loginPage.clicarBotaoEntrar();
});

Then('devo ver uma mensagem de erro indicando que o usuário ou senha estão incorretos', () => {
  loginPage.validarMensagemErroLogin()
});

When('preencho o campo “Email” com um usuário inválido', () => {
  loginPage.preencherEmailInvalido();
});

When('preencho o campo “Senha” com uma senha inválida', () => {
  loginPage.preencherSenhaInvalida();
});

Then('devo ser redirecionado para a tela principal do sistema', () => {
  loginPage.validarRedirecionamentoTelaPrincipal();
});

When('que estou logado no sistema', () => {
  loginPage.acessarSite()
  loginPage.preencherEmailValido()
  loginPage.preencherSenhaValida()
  loginPage.clicarBotaoEntrar()
  loginPage.validarRedirecionamentoTelaPrincipal()
})

When('clico no botão “Logout”', () => {
  loginPage.clicarBotaoLogout()
})

Then('devo ser redirecionado para a tela de login do sistema', () => {
  loginPage.validarRedirecionamentoTelaLogin()
})


