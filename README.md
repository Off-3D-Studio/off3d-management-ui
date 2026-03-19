# Off3D Management UI 🚀

![Angular](https://img.shields.io/badge/Angular-17+-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SASS-hotpink?style=for-the-badge&logo=sass)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

Bem-vindo(a) ao painel administrativo do **Off3D Studio**! Esta é uma Single Page Application (SPA) robusta, desenvolvida para gerenciar fluxos de manufatura aditiva (impressão 3D) em tempo real.

Este projeto é a interface oficial que consome a [Off3D Management API](https://github.com/Amandapvln/off3d-management-api).

---

## 🎯 Objetivo do Projeto
A interface foi desenhada para transformar dados complexos de engenharia e vendas em uma experiência fluida e intuitiva, focada em:
* **Dashboard de Vendas (Sales):** Gestão de pedidos e CRM de clientes.
* **Controle de Produção (Manufacturing):** Monitoramento de fila de impressão e status de hardware (FDM/SLA).
* **Segurança de Dados:** Integração completa com autenticação via **JWT**.

## 🛠️ Stack Tecnológica
* **Core:** Angular 17+ (uso de Signals e Standalone Components).
* **Roteamento:** Lazy Loading por módulos para performance otimizada.
* **Estilização:** SCSS Modularizado.
* **Comunicação:** RxJS para fluxos de dados assíncronos e interceptors para segurança.

## 💜 Iniciativa Women In Tech & Open Source
Este repositório não é apenas um código; é um **espaço seguro de aprendizado e protagonismo feminino**. 
Acreditamos que a colaboração mútua é o melhor caminho para construir portfólios de impacto. Se você é desenvolvedora (ou pessoa aliada) e quer dominar Angular em um sistema real, você está no lugar certo!

### Como contribuir?
1. Leia o nosso [CONTRIBUTING.md](./CONTRIBUTING.md) para entender os padrões de código.
2. Explore as [Issues](https://github.com/Amandapvln/off3d-management-ui/issues) com a tag `good first issue`.
3. Faça um Fork, crie sua branch e envie seu Pull Request!

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js (v18+)
* Angular CLI instalado globalmente (`npm install -g @angular/cli`)

### Passo a Passo
1. Clone o projeto:
   ```bash
   git clone [https://github.com/Amandapvln/off3d-management-ui.git](https://github.com/Amandapvln/off3d-management-ui.git)
   ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```

4. Acesse `http://localhost:4200` no seu navegador.

Dica: Para testar as funcionalidades de login e listagem, certifique-se de que a API Java esteja rodando localmente.

---

🏗️ Estrutura de Pastas
O projeto segue uma arquitetura modular por funcionalidades (Feature-first):

- `src/app/core`: Serviços globais, interceptors e guards de rotas.
- `src/app/shared`: Componentes, pipes e diretivas reutilizáveis.
- `src/app/features`: Módulos de negócio (Auth, Sales, Manufacturing).

---

## Desenvolvido com ❤️ por
Agradecemos às seguintes pessoas que contribuíram para este projeto:

|                                      Foto                                       | Colaborador           | Função             | GitHub                                         |
|:-------------------------------------------------------------------------------:|:----------------------|:-------------------|:-----------------------------------------------|
| <img src="https://avatars.githubusercontent.com/u/106124434?v=4" width="50px;"> | **Amanda Paiva Lino** | Tech Lead / Architect  | [@Amandapvln](https://github.com/Amandapvln)   |

---
*Este projeto é parte integrante das soluções Off3D Studio.*