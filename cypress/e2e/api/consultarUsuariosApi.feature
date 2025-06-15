# language: pt

Funcionalidade: Consultar usuários via API

  Cenário: Consultar usuários com sucesso via API
    Dado que o usuário envia uma requisição de consulta para a API de usuarios
    Então a consulta deve ser realizada com sucesso
    E a lista de usuários deve ser retornada

    Cenário: Consultar usuário pelo ID
      Dado eu obtenho o id de um usuário existente
      Quando que o usuário envia uma requisição de consulta usuarios com um ID válido
      Então a consulta deve ser realizada com sucesso