
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

2. Adicione as seguintes variáveis de ambiente:

```json
{
  "EMAIL": "email@valido.com",
  "PASSWORD": "senha_valida"
}
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

## Suporte

- **LinkedIn:** [Gabriel Amaral](https://www.linkedin.com/in/gabriel-a-60ba8922a/)
- **E-mail:** gabrielgta.com@gmail.com

---
