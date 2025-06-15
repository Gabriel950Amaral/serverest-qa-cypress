/// <reference types="cypress" />

import CadastroElements from "../elements/CadastroElements";

const faker = require('faker-br');

const cadastroElements = new CadastroElements();

class CadastroProdutosPage {
    acessarPaginaCadastro() {
        cy.get(cadastroElements.cadastrarProdutoHeader()).click()
        cy.url().should('include', '/admin/cadastrarprodutos')
    }

    cadastroCamposVaziosProdutos() {
        cy.get(cadastroElements.inputNomeProduto()).should('be.visible')
        cy.get(cadastroElements.inputPrecoProduto()).should('be.visible')
        cy.get(cadastroElements.inputDescricaoProduto()).should('be.visible')
        cy.get(cadastroElements.inputQuantidadeProduto()).should('be.visible')
        cy.get(cadastroElements.botaoCadastrarProdutos()).click()
    }

    validarMensagemErroCamposObrigatorios() {
        cy.get(cadastroElements.alertaErroCadastro()).should('be.visible')
    }

    cadastroCamposValidosProdutoExistente() {
        cy.intercept('POST', 'https://serverest.dev/produtos').as('cadastroProduto')
        cy.get(cadastroElements.inputNomeProduto()).should('be.visible')
        cy.get(cadastroElements.inputNomeProduto()).type('Produto Teste')
        cy.get(cadastroElements.inputPrecoProduto()).type('100.00')
        cy.get(cadastroElements.inputDescricaoProduto()).type('Descrição do Produto Teste')
        cy.get(cadastroElements.inputQuantidadeProduto()).type('10')
        cy.get(cadastroElements.botaoCadastrarProdutos()).click()
    }

    validarCadastroComSucesso() {
        cy.intercept('POST', 'https://serverest.dev/produtos').as('cadastroProduto')
        cy.get(cadastroElements.inputNomeProduto()).should('be.visible')
        cy.get(cadastroElements.inputNomeProduto()).type(faker.commerce.productName())
        cy.get(cadastroElements.inputPrecoProduto()).type(faker.commerce.price())
        cy.get(cadastroElements.inputDescricaoProduto()).type(faker.commerce.productAdjective())
        cy.get(cadastroElements.inputQuantidadeProduto()).type(faker.random.number({ min: 1, max: 100 }))
        cy.get(cadastroElements.botaoCadastrarProdutos()).click()
        cy.wait('@cadastroProduto').its('response.statusCode').should('eq', 201)
    }

    validarMensagemErroProdutoExistente() {
        cy.get(cadastroElements.alertaErroCadastro()).should('be.visible')
    }
}

export default CadastroProdutosPage;