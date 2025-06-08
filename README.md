# Vibra | Aplicação web de gerenciamento de inscrições

Vibra é uma aplicação web, com foco inicial em dispositivos móveis, que facilita o gerenciamento de inscrições em eventos culturais. A plataforma conecta pessoas de diferentes culturas, proporcionando uma maneira fácil de descobrir e participar de eventos ao redor do mundo.

## Estrutura de pastas

```
projeto_individual/
│
├── assets/                # Assets do projeto
├── config/                # Arquivos de configuração do banco
│   └── db.js
├── controllers/           # Lógica de controle das requisições
│   └── datetimeEventsController.js
│   └── eventsController.js
│   └── feedbacksController.js
│   └── locationsController.js
│   └── playlistsController.js
│   └── profileController.js
│   └── subscriptionsController.js
│   └── usersController.js
|middleware/               # Funções intermediárias
│   └── auth.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── datetimeEventsModel.js
│   └── eventsModel.js
│   └── feedbacksModel.js
│   └── locationsModel.js
│   └── playlistsModel.js
│   └── subscriptionsModel.js
│   └── usersModel.js
├── public/                
│   ├── css/   
│   │   └── country.css        
│   │   └── createAccount.css    
│   │   └── eventPage.css        
│   │   └── home.css             
│   │   └── layout.css           
│   │   └── login.css            
│   │   └── profile.css          
│   │   └── search.css           
│   │   └── searchCountry.css    
│   │   └── style.css            
│   ├── images/            # Imagens
│   ├── icons/             # Icones
│   └── script/            # Scripts 
│       └── createAccountScript.js 
│       └── eventPageScript.js     
│       └── homeScript.js          
│       └── loginScript.js         
│       └── profileScript.js       
│       └── searchCountryScript.js 
│       └── searchScript.js        
│       └── timeSelector.js        
├── routes/                # Definição das rotas do sistema
│   └── datetimeEventsRoutes.js
│   └── eventsRoutes.js
│   └── feedbacksRoutes.js
│   └── frontRoutes.js
│   └── locationsRoutes.js
│   └── playlistsRoutes.js
│   └── profileRoutes.js
│   └── subscriptionsRoutes.js
│   └── usersRoutes.js
├── scripts/               # Arquivos de JavaScript públicos
│   └── init.sql
│   └── runSQLScript.js
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── views/                 # Arquivos de HTML públicos
│   └── layout/            # Layouts
│   └── pages/             # Páginas
│   │   └── country.ejs        
│   │   └── createAccount.ejs    
│   │   └── eventPage.ejs        
│   │   └── feedback.ejs        
│   │   └── home.ejs             
│   │   └── login.ejs            
│   │   └── preferences.ejs      
│   │   └── profile.ejs         
│   │   └── search.ejs           
│   │   └── searchCountry.ejs    
│   └── partials/         
│       └── navbar.ejs       
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env                   # Arquivo de variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints
```
Estrutura de Diretórios
-----------------------

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

## Requisitos

- Node.js (versão v22.13.1)
- PostgreSQL (versão 17.4)

## Instalação

1. **Clonar o repositório:**
Abra o terminal e digite:
```bash
   git clone https://github.com/AiraaMel/projeto_individual
   cd seu-projeto
```

2. **Instalar as dependências:**
No terminal, rode:
```bash
    npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo .env na raiz do projeto com as configurações do banco de dados, como:

```in 
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=vibra
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    PORT=3000
```

4. **Inicie o servidor**
Execute:
```bash
    node server.js
```
O servidor deve rodar em http://localhost:3000. 
    
Desenvolvedora
-------
Desenvolvido por Aira Mel, estudante de ADM TECH no Inteli.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.