# language: pt

Funcionalidade: Consultar produtos via API

  Cenário: Consultar produtos com sucesso via API
    Dado que o usuário envia uma requisição de consulta para a API de produtos
    Então a busca por produtos deve ser realizada com sucesso
    E a lista de produtos deve ser retornada