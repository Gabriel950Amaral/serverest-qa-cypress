/// <reference types="cypress" />

import CadastroElements from "../elements/CadastroElements";

const faker = require('faker-br');

const cadastroElements = new CadastroElements();

class ListagemPage {
    acessarPaginaListagemUsuarios() {
       cy.intercept('GET', 'https://serverest.dev/usuarios').as('getUsuarios')
       cy.get(cadastroElements.listarUsuarios()).click()
       cy.wait('@getUsuarios').its('response.statusCode').should('eq', 200)
    }

    validarListagemUsuarios() {
       cy.url().should('include', '/admin/listarusuarios')
    }

    acessarPaginaListagemProdutos() {
       cy.intercept('GET', 'https://serverest.dev/produtos').as('getProdutos')
       cy.get(cadastroElements.listarProdutos()).click()
       cy.wait('@getProdutos').its('response.statusCode').should('eq', 200)
    }

    validarListagemProdutos() {
       cy.url().should('include', '/admin/listarprodutos')
    }
}

export default ListagemPage;