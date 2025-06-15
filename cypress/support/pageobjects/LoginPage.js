/// <reference types="cypress" />

import CadastroElements from "../elements/CadastroElements";

const faker = require('faker-br');

const userValido = {
  email: 'johnathangordon@example.com',
  senha: 'ZoHW)eVV*1'
};

const userInvalido = {
  email: 'invalido099@teste.com',
  senha: 'senhaInvalida'
};

const cadastroElements = new CadastroElements();
const url = cypress.config("baseUrl");

class LoginPage {
  acessarSite() {
    cy.visit(url)
  }

  preencherEmailValido() {
    cy.get(cadastroElements.inputEmail()).should('be.visible');
    cy.get(cadastroElements.inputEmail()).type(userValido.email);
  }

  validarCampoVazioSenha() {
    cy.get(cadastroElements.inputSenha()).should('be.visible');
    cy.get(cadastroElements.inputSenha()).clear();
  }

  clicarBotaoEntrar() {
    cy.get(cadastroElements.botaoEntrar()).should('be.visible');
    cy.get(cadastroElements.botaoEntrar()).click();
  }

  validarMensagemErroLogin() {
    cy.get(cadastroElements.alertaErroLogin()).should('be.visible');
  }

  validarCampoVazioEmail() {
    cy.get(cadastroElements.inputEmail()).should('be.visible');
    cy.get(cadastroElements.inputEmail()).clear();
  }

  preencherSenhaValida() {
    cy.get(cadastroElements.inputSenha()).should('be.visible');
    cy.get(cadastroElements.inputSenha()).type(userValido.senha);
  }

  preencherEmailInvalido() {
    cy.get(cadastroElements.inputEmail()).should('be.visible');
    cy.get(cadastroElements.inputEmail()).type(userInvalido.email);
  }

  preencherSenhaInvalida() {
    cy.get(cadastroElements.inputSenha()).should('be.visible');
    cy.get(cadastroElements.inputSenha()).type(userInvalido.senha);
  }

  validarRedirecionamentoTelaPrincipal() {
    cy.url().should('eq', `${url}/admin/home`);
    cy.get(cadastroElements.cadastrarUsuariosHeader()).should('be.visible');
    cy.get(cadastroElements.listarUsuariosHeader()).should('be.visible');
    cy.get(cadastroElements.cadastrarProdutoHeader()).should('be.visible');
    cy.get(cadastroElements.listarProdutosHeader()).should('be.visible');
    cy.get(cadastroElements.linkRelatoriosHeader()).should('be.visible');
    cy.get(cadastroElements.botaoLogout()).should('be.visible');
  }

  clicarBotaoLogout() {
    cy.get(cadastroElements.botaoLogout()).should('be.visible');
    cy.get(cadastroElements.botaoLogout()).click();
    cy.url().should('eq', `${url}/login`);
  }

  validarRedirecionamentoTelaLogin() {
    cy.url().should('eq', `${url}/login`);
    cy.get(cadastroElements.inputEmail()).should('be.visible');
    cy.get(cadastroElements.inputSenha()).should('be.visible');
    cy.get(cadastroElements.botaoEntrar()).should('be.visible');
  }
}

export default LoginPage;
