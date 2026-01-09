# ✅ Minhas Tarefas (Task Manager)

![Status](https://img.shields.io/badge/Status-Concluído-green)
![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D)
![Vuex](https://img.shields.io/badge/Vuex-State_Management-blue)
![Bootstrap](https://img.shields.io/badge/Style-Bootstrap-563D7C)

## 📋 Sobre o Projeto

O **Minhas Tarefas** é uma aplicação Single Page Application (SPA) construída com o framework **Vue.js**. O objetivo técnico deste projeto foi explorar uma abordagem diferente do React, utilizando a sintaxe de templates e a reatividade otimizada do Vue.

A aplicação resolve o problema de desorganização pessoal, permitindo que o usuário tenha uma visão clara de suas pendências, com indicadores visuais de prioridade e status.

## 🛠 Tecnologias e Ferramentas

A stack foi escolhida pela sua curva de aprendizado ágil e performance:

* **[Vue.js](https://vuejs.org/):** Framework progressivo para construção da interface. Utilizado com **Options API** (ou Composition API) para estruturação lógica.
* **[Vuex](https://vuex.vuejs.org/):** Biblioteca de gerenciamento de estado (padrão Flux) para centralizar os dados das tarefas, permitindo que diferentes componentes (barra lateral, lista, formulário) acessem a mesma fonte de verdade.
* **[TypeScript](https://www.typescriptlang.org/):** Para tipagem estática, garantindo que os objetos de "Tarefa" tenham a estrutura correta (id, título, descrição, status).
* **[Bootstrap](https://getbootstrap.com/):** Framework CSS para estilização rápida, responsividade e componentes de UI consistentes.

## ⚙️ Funcionalidades Principais

1.  **CRUD de Tarefas:** Criação, Edição e Remoção de itens.
2.  **Gerenciamento de Estado (Vuex):**
    * As tarefas não são perdidas ao navegar entre filtros.
    * Ações centralizadas (`actions` e `mutations`) para modificar a lista.
3.  **Sistema de Filtros:**
    * Visualizar todas as tarefas.
    * Filtrar apenas pendentes.
    * Filtrar apenas concluídas.
4.  **Categorização:** Classificação de tarefas por prioridade ou tipo (ex: Importante, Urgente, Normal).

## 📂 Estrutura do Código (Padrão Vue)

O projeto segue a estrutura clássica de *Single File Components* (.vue):

```text
src/
├── components/      # Blocos de UI (TaskItem, FilterBar)
├── views/           # Páginas da aplicação (Home, Cadastro)
├── store/           # Gerenciamento de estado (Vuex Store)
│   └── index.ts     # Definição de State, Mutations e Actions
├── models/          # Interfaces TypeScript (ITarefa, IEnum)
├── router/          # Configuração de rotas (Vue Router)
└── App.vue          # Componente Raiz
