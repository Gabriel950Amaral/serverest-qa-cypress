# language: pt

@login
Funcionalidade: Validar funcionalidades de Cadastro no sistema

@cadastroCamposVazios @smoke
Cenário: Validar cadastros com campos obrigatórios vazios
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de usuários
    E tento cadastrar um usuarios com os dados vazios
    Então devo ver a mensagem de erro mostrando todos os campos obrigatórios

@cadastroComSucesso @smoke
Cenário: Validar cadastros de usuários com sucesso
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de usuários
    E eu faço o cadastro um usuario com os dados válidos
    Então valido o cadastro com sucesso 

@cadastroAdmin @smoke
Cenário: Validar cadastros de usuários Admin com sucesso
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de usuários
    E eu faço o cadastro um usuario admin com os dados válidos
    Então valido o cadastro com sucesso

@cadastroComEmailExistente @smoke
Cenário: Validar cadastro de usuários com email já existente
    Dado que estou logado no sistema
    Quando eu acessar a página de cadastro de usuários
    E eu tento cadastrar um usuario com o email já existente
    Então devo ver a mensagem de erro informando que o email já está cadastrado

