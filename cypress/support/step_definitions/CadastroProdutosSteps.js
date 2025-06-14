/* global Given, Then, When */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import CadastroProdutosPage from '../pageobjects/CadastrosProdutosPage'
const cadastroProdutosPage = new CadastroProdutosPage()


Given('eu acessar a página de cadastro de produtos', () => {
  cadastroProdutosPage.acessarPaginaCadastro()
})

When('tento cadastrar um produto com os dados vazios', () => {
  cadastroProdutosPage.cadastroCamposVaziosProdutos()
})
Then('devo ver a mensagem de erro mostrando todos os campos obrigatórios nos produtos', () => {
  cadastroProdutosPage.validarMensagemErroCamposObrigatorios()
})

When('eu faço o cadastro um produto que já existe', () => {
  cadastroProdutosPage.cadastroCamposValidosProdutoExistente()
})

Then('eu faço o cadastro um produto com os dados válidos', () => {
  cadastroProdutosPage.validarCadastroComSucesso()
})

Then('a mensagem de erro informando que o produto já existe deve ser exibida', () => {
  cadastroProdutosPage.validarMensagemErroProdutoExistente()
})
