# language: pt

@cadastroProdutos
Funcionalidade: Validar funcionalidades de Cadastro de Produtos no Sistema

@cadastroProdutosCamposVazios @smoke
Cenário: Validar cadastros com campos obrigatórios vazios
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de produtos
    E tento cadastrar um produto com os dados vazios
    Então devo ver a mensagem de erro mostrando todos os campos obrigatórios nos produtos

@cadastroProdutoExistente @smoke
Cenário: Validar cadastros de produtos que já existe
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de produtos
    E eu faço o cadastro um produto que já existe
    Então a mensagem de erro informando que o produto já existe deve ser exibida

@cadastroProdutoValido @smoke
 Cenário: Validar cadastros de produtos válidos
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de produtos
    Então eu faço o cadastro um produto com os dados válidos

