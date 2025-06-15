
# Serverest QA Automation with Cypress 🚀

Este repositório foi desenvolvido como parte de um **desafio técnico para a vaga de Analista de QA na Mouts**.

Aqui você encontrará:

✅ Testes End-to-End (E2E) automatizados para o **Frontend**  
✅ Testes automatizados para a **API REST**  
✅ Estrutura de projeto organizada com **Cypress** e **Mocha**  
✅ Geração de **relatórios Allure**  
✅ Uso de boas práticas de automação de testes  

---

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Instalação](#instalação)
- [Como executar os testes](#como-executar-os-testes)
- [Geração de relatórios](#geração-de-relatórios)
- [Suporte](#suporte)

---

## Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js e npm](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/download) ou outra IDE de sua preferência
- [Cypress](https://www.cypress.io/)

---

## Configuração

1. Após clonar o projeto, crie um arquivo chamado `cypress.env.json` na raiz do repositório.

**Atenção:** Os usuários e senhas utilizados nos testes são instáveis, podendo ser alterados ou removidos a qualquer momento. Por isso, é necessário sempre consultar a API que lista os usuários antes de executar os testes e atualizar os dados de login conforme necessário. Isso garante que os testes utilizem credenciais válidas e evitem falhas por conta de dados desatualizados.

2. Adicione o usuário para os testes frontend e backend nos seguintes steps "que o usuário possui credenciais válidas" e "em que estou logado no sistema":

```json
usuario = {
  email: 'PreenchaUmEmailValido',
  password: 'Senha'
};
```

**Importante:**  
Este arquivo está no `.gitignore`, portanto **não será versionado no GitHub**.  
Existe um arquivo de exemplo chamado `.cypress.env.example` para facilitar o preenchimento.

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Gabriel950Amaral/serverest-qa-cypress.git
cd serverest-qa-cypress
```

Instale as dependências:

```bash
npm install
```

---

## Como executar os testes

### Instalar dependências:

```bash
npm ci
```

### Executar os testes no modo interativo (Cypress UI):

```bash
npm run cypress:open
```

### Executar os testes no modo headless:

```bash
npx cypress run
```

---


### Gerar relatório Allure após execução dos testes:

1. Execute os testes normalmente:
   ```bash
   npx cypress run
   ```


---


## Arquitetura do Projeto e Orientação a Objetos

O projeto utiliza uma arquitetura baseada em **Page Objects** e **Commands**, seguindo princípios de **orientação a objetos (OO)** para garantir organização, reutilização e fácil manutenção do código.

### Como funciona a arquitetura

- **Page Objects:** Cada página ou funcionalidade relevante do sistema possui uma classe dedicada (em `cypress/support/pageobjects/`). Essas classes encapsulam os elementos da interface e as ações possíveis, promovendo reutilização e centralização das regras de negócio da interface.
- **Elements:** Os seletores de elementos ficam separados em arquivos específicos (em `cypress/support/elements/`), facilitando a manutenção caso haja mudanças na interface.
- **Commands:** Ações comuns e customizadas são implementadas em `cypress/support/commands.js`, permitindo que sejam reutilizadas em diferentes cenários de teste.
- **Step Definitions:** Os passos dos cenários BDD (Gherkin) são implementados em arquivos separados por contexto (API e Frontend), facilitando a leitura e manutenção.

### Benefícios da Orientação a Objetos

- **Reutilização:** Métodos e propriedades podem ser reutilizados em diferentes testes, evitando duplicidade de código.
- **Manutenção facilitada:** Alterações em fluxos ou elementos são feitas em um único local, reduzindo o risco de bugs.
- **Organização:** O código fica mais modular, separado por responsabilidade, facilitando o entendimento por novos colaboradores.
- **Escalabilidade:** Novas funcionalidades podem ser adicionadas de forma simples, criando novos objetos ou estendendo os existentes.

### Como trabalhar comeste projeto

1. **Crie ou edite Page Objects** para cada nova página ou fluxo, adicionando métodos que representem ações do usuário.
2. **Centralize seletores** nos arquivos de elements, evitando espalhar strings de seletores pelo código.
3. **Utilize e crie comandos customizados** para ações repetitivas.
4. **Implemente os steps** dos cenários BDD utilizando os métodos dos Page Objects e Commands, mantendo os steps enxutos e legíveis.

Seguindo essa abordagem, o projeto se mantém limpo, escalável e de fácil manutenção, aproveitando ao máximo os benefícios da orientação a objetos na automação de testes.

---

## Suporte

- **LinkedIn:** [Gabriel Amaral](https://www.linkedin.com/in/gabriel-a-60ba8922a/)
- **E-mail:** gabrielgta.com@gmail.com

---
