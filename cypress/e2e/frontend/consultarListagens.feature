# language: pt

@consultarListagens
Funcionalidade: Validar funcionalidade de Consultar Listagens usuarios e produtos no sistema

@consultarListagemUsuarios @smoke
Cenário: Validar Listagem de Usuarios
    Dado que estou logado no sistema
    Quando eu acessar a página de listagem de usuários
    Então devo ver a listagem de usuários cadastrados

@consultarListagemProdutos @smoke
Cenário: Validar Listagem de Produtos
    Dado que estou logado no sistema
    Quando eu acessar a página de listagem de produtos
    Então devo ver a listagem de produtos cadastrados