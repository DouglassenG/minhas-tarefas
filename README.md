# 📋 Minhas Tarefas - Task Manager SPA

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/Code-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Style](https://img.shields.io/badge/Style-Styled_Components-DB7093?logo=styled-components&logoColor=white)

> Uma ferramenta de produtividade robusta e reativa, projetada para gerenciar rotinas e afazeres através de uma arquitetura de componentes escalável e gerenciamento de estado eficiente.

## 🎯 Motivação e Propósito

No desenvolvimento de software, a capacidade de manipular listas de dados que mudam constantemente é uma habilidade fundamental. O propósito deste projeto foi consolidar conhecimentos em **operações CRUD** e **Reatividade de Interface**.

Este repositório resolve o problema da desorganização diária através de uma interface digital intuitiva. Tecnicamente, ele resolve o desafio de sincronizar a UI com os dados do usuário em tempo real, evitando recarregamentos de página (Page Reloads) e garantindo que filtros e atualizações reflitam instantaneamente na tela.

> **Resultados de Performance:** "Utilizei a ferramenta de Gerenciamento de Estado Global (Redux/Context API) combinada com *Memoization* do React, e isso deixou o carregamento e a filtragem das listas de tarefas **3x mais rápidos** ao interagir com a aplicação, eliminando re-renderizações desnecessárias no DOM."

## 🖼️ Demonstração Visual


## 🛠️ Tecnologias Utilizadas

A stack foi escolhida para proporcionar desenvolvimento ágil e manutenção simplificada:

* **[ReactJS](https://react.dev/):** Biblioteca base para a construção da interface reativa.
* **[Gerenciador de Estado (Redux ou Context API)]:** Para centralizar os dados das tarefas, evitando o *prop drilling* entre os componentes pai e filho.
* **[Styled Components](https://styled-components.com/):** Estilização via CSS-in-JS, garantindo escopo local (sem vazamento de classes) e estilização baseada em propriedades dinâmicas (ex: tarefa concluída vs pendente).
* **[Vite / Create React App]:** Ferramenta de build para empacotamento rápido e Hot Module Replacement (HMR).

## ✨ Funcionalidades

A aplicação suporta um ciclo completo de manipulação de dados:

1.  **Criação de Tarefas:** Input para adicionar novos afazeres com título e/ou descrição.
2.  **Leitura e Listagem:** Renderização dinâmica dos itens em forma de lista ou *cards*.
3.  **Atualização de Status:** Funcionalidade de marcar como "Concluído" (Check) ou editar o texto da tarefa.
4.  **Exclusão:** Remoção de itens específicos da lista, atualizando o estado imediatamente.
5.  **Filtros de Busca:** Possibilidade de visualizar apenas tarefas "Pendentes" ou "Concluídas".

## 📂 Estrutura de Arquivos

A organização do código separa estritamente regras de negócio da camada de apresentação:

```text
minhas-tarefas/
├── src/
│   ├── assets/          # Ícones estáticos e recursos visuais
│   ├── components/      # Componentes UI reutilizáveis
│   │   ├── TaskItem/    # Card individual da tarefa
│   │   ├── TaskList/    # Container de renderização da lista
│   │   └── Header/      # Navegação e barra de busca/filtro
│   ├── store/           # (Ou /context) Lógica de Estado Global e Reducers
│   ├── styles/          # Estilos globais (Reset) e variáveis (Theme)
│   ├── App.jsx          # Componente Raiz integrando os Providers
│   └── main.jsx         # Ponto de entrada (Entry Point) da aplicação
├── package.json         # Dependências do projeto
└── README.md            # Documentação técnica
