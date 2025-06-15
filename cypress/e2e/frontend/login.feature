# language: pt

@login
Funcionalidade: Validar funcionalidades de Login ao sistema 

@senhaVazia @smoke
Cenário: Validar não permissão de Login campo senha vazio 
    Dado que estou na tela de login do sistema
    Quando preencho o campo “Email” com um usuário válido   
    E não preencho o campo “Senha”
    E clico no botão “ENTRAR”       
    Então devo ver uma mensagem de erro indicando que o usuário ou senha estão incorretos

@emailVazio @smoke
Cenário: Validar não permissão de Login e-mail vazio
    Dado que estou na tela de login do sistema
    Quando não preencho o campo “Email”
    E preencho o campo “Senha” com um usuário válido
    E clico no botão “ENTRAR”
    Então devo ver uma mensagem de erro indicando que o usuário ou senha estão incorretos
   
@loginSemPreenchimento @smoke
Cenário: Validar não permissão de Login com campos vazios
    Dado que estou na tela de login do sistema
    Quando não preencho o campo “Email”
    E não preencho o campo “Senha”
    E clico no botão “ENTRAR”
    Então devo ver uma mensagem de erro indicando que o usuário ou senha estão incorretos

@loginIncorreto @smoke
Cenário: Validar não permissão de Login com usuário e senha incorretos
    Dado que estou na tela de login do sistema
    Quando preencho o campo “Email” com um usuário inválido
    E preencho o campo “Senha” com uma senha inválida
    E clico no botão “ENTRAR”
    Então devo ver uma mensagem de erro indicando que o usuário ou senha estão incorretos

@loginComSucesso @smoke
Cenário: Validar permissão de Login com usuário e senha corretos
    Dado que estou na tela de login do sistema
    Quando preencho o campo “Email” com um usuário válido
    E preencho o campo “Senha” com um usuário válido
    E clico no botão “ENTRAR”
    Então devo ser redirecionado para a tela principal do sistema

@logout @smoke
Cenário: Validar permissão de Logout do sistema
    Dado que estou logado no sistema
    Quando clico no botão “Logout”
    Então devo ser redirecionado para a tela de login do sistema
 