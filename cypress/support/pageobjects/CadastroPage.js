/// <reference types="Cypress" />

import CadastroElements from "../elements/CadastroElements";

const faker = require('faker-br');

const userValido = {
  email: 'Jerel_Willms@yahoo.com',
  senha: 'YooRQLtVzB70ETy'
};

const gerarDadosUsuario = () => {
    const nome = faker.name.findName();
    const email = faker.internet.email(nome);
    const senha = faker.internet.password();
    return { nome, email, senha };
};
 

const gerarTelefoneCelular = () => {
    const DDD = faker.address.zipCode().slice(0, 2); // Obtém dois primeiros dígitos para o código de área
    const primeiraParte = `9${faker.random.number({min: 1000, max: 9999})}`; // Sempre começa com '9' seguido de quatro dígitos
    const segundaParte = faker.random.number({min: 1000, max: 9999}); // Quatro últimos dígitos
    return `(${DDD}) ${primeiraParte}-${segundaParte}`;
};


const gerarDataNascimento = () => {
    const hoje = new Date();
    const idadeMaxima = 99;
    const idadeMinima = 18;
    const dataMaxima = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());
    const dataMinima = new Date(hoje.getFullYear() - idadeMaxima, hoje.getMonth(), hoje.getDate());
    const dataRandomica = faker.date.between(dataMinima, dataMaxima);

    // Formate a data como dd/mm/aaaa
    const dia = String(dataRandomica.getDate()).padStart(2, '0');
    const mes = String(dataRandomica.getMonth() + 1).padStart(2, '0');
    const ano = dataRandomica.getFullYear();

    return `${dia}/${mes}/${ano}`;
};


const cadastroElements = new CadastroElements();


class CadastroPage {
    acessarPaginaCadastro() {
        cy.get(cadastroElements.botaoCadastro()).click()
        cy.url().should('include', '/admin/cadastrarusuarios')
    }

    cadastroCamposVazios() {  
        cy.get(cadastroElements.inputEmail()).should('be.visible');
        cy.get(cadastroElements.inputEmail()).clear();
        cy.get(cadastroElements.inputSenhaCadastro()).clear();
        cy.get(cadastroElements.inputNome()).clear();
        cy.get(cadastroElements.botaoCadastrarUsuario()).click();
    }

    validarMensagemErroCamposObrigatorios() {
        cy.get(cadastroElements.alertaErroCadastro()).should('be.visible');
    }

    cadastroCamposValidos() {
        cy.intercept('POST', 'https://serverest.dev/usuarios').as('cadastroUsuario');
        cy.get(cadastroElements.inputEmail()).should('be.visible');
        cy.get(cadastroElements.inputNome()).type(gerarDadosUsuario().nome);
        cy.get(cadastroElements.inputEmail()).type(gerarDadosUsuario().email);
        cy.get(cadastroElements.inputSenhaCadastro()).type(gerarDadosUsuario().senha);
        cy.get(cadastroElements.botaoCadastrarUsuario()).click();
    }

    cadastroCamposValidosAdmin() {
        cy.intercept('POST', 'https://serverest.dev/usuarios').as('cadastroUsuario');
        cy.get(cadastroElements.inputEmail()).should('be.visible');
        cy.get(cadastroElements.inputNome()).type(gerarDadosUsuario().nome);
        cy.get(cadastroElements.inputEmail()).type(gerarDadosUsuario().email);
        cy.get(cadastroElements.inputSenhaCadastro()).type(gerarDadosUsuario().senha);
        cy.get(cadastroElements.checkboxCadastroAdmin()).click();
        cy.get(cadastroElements.botaoCadastrarUsuario()).click();
    }

    validarCadastroComSucesso() {
        cy.wait('@cadastroUsuario').its('response.statusCode').should('eq', 201);
    }

    cadastroComEmailExistente() { 
        cy.get(cadastroElements.inputEmail()).should('be.visible');
        cy.get(cadastroElements.inputNome()).type(gerarDadosUsuario().nome);
        cy.get(cadastroElements.inputEmail()).type(userValido.email);
        cy.get(cadastroElements.inputSenhaCadastro()).type(userValido.senha);
        cy.get(cadastroElements.botaoCadastrarUsuario()).click();
    }

    validarMensagemErroEmailExistente() {
        cy.get(cadastroElements.alertaErroCadastro()).should('be.visible');
    }
 
}

export default CadastroPage;
