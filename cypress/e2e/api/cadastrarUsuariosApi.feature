#language: pt

Funcionalidade: Cadastrar usuários via API

  Cenário: Cadastro de usuário com sucesso via API
    Dado que possuo dados válidos para cadastro de usuário
    Quando envio uma requisição de cadastro para a API
    Então o cadastro deve ser realizado com sucesso
    E o ID do usuário deve ser retornado

  Cenário: Cadastro de usuário com falha via API
    Dado que possuo dados inválidos para cadastro de usuário
    Quando envio uma requisição de cadastro para a API
    Então o cadastro deve falhar
    E uma mensagem de erro de campo obrigatório deve ser exibida