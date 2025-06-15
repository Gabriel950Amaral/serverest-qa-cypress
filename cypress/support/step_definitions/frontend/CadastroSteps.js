/* global Given, Then, When */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import CadastroPage from "../../pageobjects/CadastroPage"
const cadastroPage = new CadastroPage()


When('eu acessar a página de cadastro de usuários', () => {
   cadastroPage.acessarPaginaCadastro();
});

Then('tento cadastrar um usuarios com os dados vazios', () => {
   cadastroPage.cadastroCamposVazios()
})

When('devo ver a mensagem de erro mostrando todos os campos obrigatórios', () => {
   cadastroPage.validarMensagemErroCamposObrigatorios();
});

When('eu faço o cadastro um usuario com os dados válidos', () => {
   cadastroPage.cadastroCamposValidos();
});

When('eu faço o cadastro um usuario admin com os dados válidos', () => {
   cadastroPage.cadastroCamposValidosAdmin();
});


Then('valido o cadastro com sucesso', () => {
   cadastroPage.validarCadastroComSucesso();
});

Then('eu tento cadastrar um usuario com o email já existente', () => {
   cadastroPage.cadastroComEmailExistente();
});   

Then('devo ver a mensagem de erro informando que o email já está cadastrado', () => {
   cadastroPage.validarMensagemErroEmailExistente();
});
