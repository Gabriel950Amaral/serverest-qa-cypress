# language: pt

Funcionalidade: Login via API

  Cenário: Login com sucesso via API
    Dado que o usuário possui credenciais válidas
    Quando o usuário envia uma requisição de login para a API
    Então o login deve ser realizado com sucesso
    E o token de autenticação deve ser retornado

    Cenário: Login com falha via API
      Dado que o usuário possui credenciais inválidas
      Quando o usuário envia uma requisição de login para a API
      Então o login deve falhar
      E uma mensagem de erro deve ser retornada