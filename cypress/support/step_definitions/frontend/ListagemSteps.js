/* global Given, Then, When */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import ListagemPage from "../../pageobjects/ListagemPage"
const listagemPage = new ListagemPage()

When('eu acessar a página de listagem de usuários', () => {
   listagemPage.acessarPaginaListagemUsuarios();
});

Then('devo ver a listagem de usuários cadastrados', () => {
   listagemPage.validarListagemUsuarios();
});

When('devo ver a listagem de produtos cadastrados', () => {
   listagemPage.validarListagemProdutos();
});

Then('eu acessar a página de listagem de produtos', () => {
   listagemPage.acessarPaginaListagemProdutos();
});
