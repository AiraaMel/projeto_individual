# Web Application Document - Projeto Individual - Módulo 2 - Inteli


## Vibra

#### Aira Mel 

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

&emsp;A aplicação web **Vibra** nasce da necessidade de oferecer uma experiência moderna, prática e escalável para viajantes e amantes da música. Utilizando apenas uma conexão com a internet, os usuários poderão acessar e gerenciar serviços de qualquer lugar do mundo, promovendo uma verdadeira imersão cultural.

&emsp;O **Vibra** é uma plataforma de eventos com gerenciamento de inscrições, criada para facilitar a conexão entre pessoas e experiências únicas ao redor do mundo. Desenvolvido especialmente para quem ama viajar e viver intensamente cada destino, o aplicativo recomenda eventos exclusivos baseados na localidade da viagem, como tours gastronômicos na Itália, aulas de samba no Rio de Janeiro e corridas emblemáticas em Mônaco.

&emsp;Além disso, a plataforma oferece uma área dedicada a informações culturais rápidas, dicas práticas, idiomas locais e costumes, para preparar o viajante antes de cada experiência. Com o **Vibra**, viajar vai além de conhecer lugares: é viver momentos inesquecíveis, com tudo o que importa na palma da mão.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

<div align="center">
<sub>Figura 1 - Persona - Vibra </sub>
<img src="../assets/wad/persona.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

Clara Monteiro é uma viajante conectada de 27 anos, moradora de Barcelona, que busca vivências culturais autênticas em suas viagens. Extrovertida e curiosa, ela evita experiências genéricas e sente frustração ao perder eventos por falta de informação. Suas principais dores envolvem a dificuldade de organizar viagens com foco local e a sensação de não acessar a essência real dos destinos.

Com hábitos digitais ativos em plataformas como Instagram, TikTok e Spotify, Clara espera descobrir eventos únicos de forma rápida, segura e sem burocracia. Suas necessidades principais incluem: inscrições facilitadas e acesso a dicas culturais que enriqueçam sua experiência de viagem.

A aplicação Vibra foi desenhada para atender exatamente a esse perfil: conectando usuários como Clara a eventos, promovendo imersão cultural e experiências inesquecíveis.

### 2.2. User Stories (Semana 01)

Abaixo estão as histórias de usuário que guiam o desenvolvimento da aplicação Vibra, baseadas nas principais dores, comportamentos e objetivos da persona definida.

> US01 | Como uma viajante conectada, quero descobrir eventos únicos enquanto viajo, para que eu possa viver experiências culturais autênticas em cada destino.

> US02 | Como uma viajante conectada, quero me inscrever em eventos de forma rápida e segura, para garantir minha participação sem complicações e evitar filas ou processos demorados.

> US03 | Como uma amante de viagens culturais, quero receber recomendações de eventos, festas e atividades locais baseadas no meu perfil e destino, para otimizar minha experiência e tornar cada viagem inesquecível.

> US04 | Como uma viajante conectada, quero acessar todas as funcionalidades da plataforma diretamente pelo celular, para planejar e interagir com eventos a qualquer momento durante minhas viagens.
<br>

INVEST US02 <br>
**I - Independente**: O sistema de inscrição pode ser desenvolvido separado da descoberta de eventos.

**N - Negociável**: O fluxo de inscrição pode ser ajustado (por exemplo: via app, QR code, confirmação por email).

**V - Valiosa**: Inscrição fácil aumenta a adesão aos eventos.

**E - Estimável**: Consegue-se estimar fluxo de inscrição.

**S - Small**: É um pedaço pequeno e objetivo.

**T - Testável**: Pode-se testar simulando inscrições em eventos.

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

### **Introdução**
A modelagem de banco de dados da aplicação Vibra foi desenvolvida com o objetivo de estruturar e organizar as informações de forma lógica, funcional e segura. Considerando as principais funcionalidades da plataforma, como gerenciamento de eventos, inscrições, preferências culturais e interação dos usuários, o modelo busca garantir a eficiência no armazenamento, a consistência dos dados e o suporte à escalabilidade da aplicação.

Nesta seção, são apresentados o modelo relacional, que ilustra as entidades, seus atributos e os relacionamentos entre elas. Além disso, o modelo físico, com a estrutura em SQL (schema.sql) pronta para ser implementada em um sistema gerenciador de banco de dados relacional.

### **Modelo Relacional**
O modelo relacional é uma etapa fundamental no processo de modelagem de banco de dados, pois representa de forma clara e organizada as entidades, seus atributos e os relacionamentos entre elas. Ele conecta a análise conceitual e a implementação física do banco de dados, facilitando a visualização da estrutura da informação e permitindo identificar com precisão como os dados interagem dentro do sistema. No contexto da aplicação Vibra, o modelo relacional foi essencial para estruturar os dados de usuários, eventos, localidades, playlists e inscrições, assegurando a integridade das informações e otimizando a experiência do usuário com base em conexões reais e únicas entre cultura, música e viagem.

<div align="center">
<sub>Figura 2 - Modelo Banco de dados - Vibra </sub>
<img src="../assets/wad/modelo-banco.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>
<br>

### **Modelo FÍsico**
O modelo físico representa a implementação concreta da estrutura do banco de dados, baseada no que foi definido no modelo relacional. Por meio da linguagem SQL, são criadas as tabelas, os campos e os relacionamentos que tornam possível o armazenamento e a manipulação dos dados dentro da aplicação. No caso da Vibra, o modelo físico foi projetado para garantir desempenho, organização e integridade, permitindo que informações como usuários, eventos, localidades e playlists sejam gerenciadas de forma eficiente.

### **Tabela** 
**Usuários (users)**: Representa as pessoas que utilizam a aplicação web.
- `id`: Identificador único do usuário (PK).
- `name`: Nome do usuário.
- `email`: Endereço de e-mail.
- `password`: Senha de acesso.
- `photo`: Foto de perfil.
- `preferences`: Interesses do usuário.

**Inscrições (subscriptions)**: Representa as inscrições dos usuários nos eventos.
- `id`: Identificador da inscrição (PK).
- `users_id`, `events_id`: Relacionam inscriçoes ao usuário e evento (FK).
- `status`: Situação da inscrição(confirmada, pendente, etc.).

**Feedback (feedbacks)**: Representa os feedbacks dos eventos.
- `id`: Identificador do Feedback (PK).
- `users_id`, `events_id`: Relacionam feedback ao usuário e evento (FK).
- `comments`: Comentário textual.
- `grade`: Nota ou avaliação numérica.
- `when`: Momento do feedback.

**Evento (events)**: Representa eventos cadastrados na aplicação web.
- `id`: Identificador do evento (PK).
- `title`,`type`, `description`, `photo`: Detalhes do evento.
- `when`: Data e hora do evento.
- `locations_id`: Localidade do evento (FK).

**Data e Hora dos Eventos (datetime_events)**: Representa as datas e horas dos eventos.
- `id`: Identificador da data e hora (PK).
- `day_time`: Data e hora do evento.
- `event_id`: Evento relacionado (FK).

**Localidade (locations)**: Representa onde os evetntos acontecem.
- `id`: Identificador da localidade (PK)
- `country``language`, `coin`: Dados culturais do país.
- `customs`, `curiosities`: Costumes e curiosidades.

**Playlist (playlists)**: Representa playlists de músicas de cada localidade.
- `id`: Identificador da playlist (PK).
- `locations_id`: Localidade da playlist (FK).
- `name`: Nome da playlist.
- `link`: Link para a playlist.

```SQL
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "email" VARCHAR(100),
  "password" VARCHAR(255),
  "photo" VARCHAR(255),
  "preferences" VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "events" (
  "id" INT PRIMARY KEY,
  "title" VARCHAR(100),
  "type" VARCHAR(50),
  "description" VARCHAR(500),
  "photo" VARCHAR(255),
  "locations_id" INT
);

CREATE TABLE IF NOT EXISTS "datetime_events" (
  "id" SERIAL PRIMARY KEY,
  "day_time" TIMESTAMP,
  "event_id" INT,
  CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "locations" (
  "id" INT PRIMARY KEY,
  "country" VARCHAR(100),
  "language" VARCHAR(100),
  "coin" VARCHAR(50),
  "customs" VARCHAR(500),
  "curiosities" VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS "subscriptions" (
  "id" INT PRIMARY KEY,
  "users_id" INT,
  "events_id" INT,
  "date" DATE,
  "hour" TIME,
  "status" VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS "feedbacks" (
  "id" INT PRIMARY KEY,
  "users_id" INT,
  "events_id" INT,
  "comments" VARCHAR(500),
  "grade" DECIMAL,
  "date" DATE,
  "hour" TIME
);

CREATE TABLE IF NOT EXISTS "playlists" (
  "id" INT PRIMARY KEY,
  "locations_id" INT,
  "name" VARCHAR(100),
  "link" VARCHAR(255)
);
```
#### **Relacionamentos e Cardinalidade** 

**Usuário <-> Inscrições** 
- Um usuário pode se inscrever em vários eventos. (1:N)
- Cada inscrição pertence a um usuário.

**Evento <-> Inscrições** 
- Um evento pode ter vários inscritos. (1:N)
- Cada inscrição pertence a um evento.

**Usuário <-> Feedback** 
- Um usuário pode avaliar vários eventos. (1:N)
- Cada feedback pertence a um usuário.

**Evento <-> Feedback** 
- Um evento pode receber vários feedbacks. 
- Cada feedback pertence a um evento.

**Evento <-> Localidade**
- Um local pode receber vários eventos. 
- Cada evento ocorre em uma localidade. (N:1)

**Localidade <-> Playlist**
- Um local pode receber várias playlists. 
- Cada playlist ocorre em uma localidade.

```SQL
-- FKs
ALTER TABLE "subscriptions" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");
ALTER TABLE "subscriptions" ADD FOREIGN KEY ("events_id") REFERENCES "events" ("id") ON DELETE CASCADE;

ALTER TABLE "events" ADD FOREIGN KEY ("locations_id") REFERENCES "locations" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");
ALTER TABLE "feedbacks" ADD FOREIGN KEY ("events_id") REFERENCES "events" ("id");

ALTER TABLE "playlists" ADD FOREIGN KEY ("locations_id") REFERENCES "locations" ("id");

-- Extensões
CREATE EXTENSION IF NOT EXISTS unaccent;
```

A modelagem do banco de dados da aplicação Vibra organiza as entidades principais, como eventos, inscrições, playlists e feedbacks, proporcionando uma experiência fluida para os usuários. A estrutura também facilita futuras expansões, como integração com redes sociais e novos conteúdos.


### 3.1.1 BD e Models (Semana 5)

#### BD

O arquivo `db.js` é responsável por configurar e gerenciar a conexão com o banco de dados **PostgreSQL** utilizado na aplicação Vibra. Ele utiliza a biblioteca `pg`, um cliente PostgreSQL para Node.js, amplamente adotado em projetos web.

```js
const { Pool } = require('pg');
require('dotenv').config();

const isSSL = process.env.DB_SSL === 'true';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: isSSL ? { rejectUnauthorized: false } : false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: () => pool.connect(),
};
```
Essa implementação garante que a comunicação com o banco de dados seja feita de forma eficiente, segura e centralizada, promovendo boas práticas no desenvolvimento do backend da aplicação.

#### Models

Nesta etapa do projeto, foram definidos os **models** responsáveis por realizar a comunicação entre a aplicação e o banco de dados **PostgreSQL**, utilizando queries SQL por meio da biblioteca `pg`. Cada model representa uma entidade da aplicação e encapsula as operações CRUD (Create, Read, Update, Delete).

Abaixo, está a tabela que resume os models utilizados, com seus respectivos campos e métodos:

Tabela de Models

| Arquivo               | Entidade       | Campos Principais                                  | Métodos Principais                                  |
|-----------------------|----------------|----------------------------------------------------|-----------------------------------------------------|
| `datetimeEventsModel.js`  | Datas e Horários  | `id`, `day_time`, `event_id`                                  | `findAll()`, `findByEventId()`, `create()`, `update()`, `delete()`          |
| `eventsModel.js`      | Events        | `id`, `title`, `type`, `description`, `photo`, `locations_id` | `findAll()`, `findById()`, `create()`, `update()`, `delete()` |
| `feedbacksModel.js`   | Feedbacks      | `id`, `users_id`, `events_id`, `comments`, `grade` | `findAll()`, `create()`                             |
| `locationsModel.js`   | Locations   | `id`, `country`, `language`, `coin`, `customs`, `curiosities` | `findAll()`, `findById()`                           |
| `playlistsModel.js`   | Playlists      | `id`, `name`, `locations_id`                       | `findByLocationId()`                                |
| `subscriptionsModel.js` | Subscriptions   | `id`, `users_id`, `events_id`, `date`, `hour`, `status` | `findByUserId()`, `create()`                        |
| `usersModel.js`       | Users          | `id`, `name`, `email`, `password`, `photo`, `preferences` | `findByEmail()`, `create()`, `update()`            |


Abaixo, exemplo da estrutura do model `event`, responsável por manipular os dados da tabela `events`.

Arquivo: `models/eventsModel.js`

Este model gerencia os dados dos eventos culturais disponíveis na aplicação. Ele contém métodos para criar, buscar, atualizar e deletar registros da tabela `events`.

**Atributos armazenados:**
- `id`: identificador único do evento (gerado automaticamente)
- `title`: título do evento
- `type`: tipo ou categoria (ex: música, teatro)
- `description`: descrição detalhada do evento
- `photo`: URL de imagem representando o evento
- `locations_id`: referência ao local onde o evento será realizado (chave estrangeira)

**Métodos implementados:**

```js
const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = `
      INSERT INTO events 
        (title, type, description, photo, locations_id, included, place, duration, price, capacity) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
      RETURNING *`;
    const values = [data.title, data.type, data.description, data.photo, data.locations_id, data.included, data.place, data.duration, data.price, data.capacity];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query(`
      SELECT id, title, type, description, photo, locations_id, included, place, duration, price, capacity 
      FROM events 
      ORDER BY id ASC
    `);
    return result.rows;
  },

  async update(id, data) {
    const query = `
      UPDATE events 
      SET title = $1, type = $2, description = $3, photo = $4, locations_id = $5,
          included = $6, place = $7, duration = $8, price = $9, capacity = $10
      WHERE id = $11 
      RETURNING *`;
    const values = [data.title, data.type, data.description, data.photo, data.locations_id, data.included, data.place, data.duration, data.price, data.capacity, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM events WHERE id = $1 RETURNING *';
    return db.query(query, [id]);
  },

  async findById(id) {
    const result = await db.query(`
      SELECT id, title, type, description, photo, locations_id, included, place, duration, price, capacity 
      FROM events 
      WHERE id = $1
    `, [id]);
    return result.rows[0];
  }
};
```
A estrutura de **models** implementada no projeto segue princípios sólidos de organização e desacoplamento da lógica de acesso a dados. Cada model representa uma entidade do sistema e encapsula suas operações específicas em módulos separados, garantindo responsabilidades bem definidas e maior legibilidade do código.

Todos os models utilizam o módulo centralizado `db.js`, que gerencia a conexão com o banco de dados **PostgreSQL** por meio da biblioteca `pg`. Isso permite uma comunicação consistente, segura e reutilizável com o banco, evitando duplicação de lógica e facilitando a manutenção.

Essa abordagem está alinhada ao padrão arquitetural **MVC (Model-View-Controller)**, no qual os models atuam como camada de persistência, fornecendo métodos padronizados para as operações **CRUD** da API. A organização modular também favorece a escalabilidade e facilita a implementação de testes automatizados.

A definição clara dos relacionamentos entre entidades, refletidos nos métodos dos models, garante a integridade dos dados e viabiliza funcionalidades como:

- Listagem de eventos com usuários inscritos
- Consulta de eventos em que um usuário está inscrito
- Validação de dados na criação de eventos e usuários


### 3.2. Arquitetura (Semana 5)

O desenvolvimento da aplicação Vibra segue o padrão arquitetural MVC (Model-View-Controller), uma abordagem que separa as responsabilidades da aplicação em três camadas principais: Model, View e Controller. Isso garante maior organização, escalabilidade e facilidade de manutenção do código.

O diagrama abaixo representa a arquitetura da aplicação, evidenciando a forma como os dados fluem entre cliente, servidor e banco de dados:

<div align="center">
<sub>Figura 4 - Diagrama arquitetura MVC - Vibra </sub>
<img src="../assets/wad/arquitetura-mvc.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

#### **View (Visualização)**
A camada de View é responsável pela interface com o usuário. No projeto Vibra, essa camada é composta por arquivos .ejs (Embedded JavaScript Templates), que renderizam dinamicamente os dados fornecidos pelos controllers.

Cada página do sistema — como a listagem de eventos (events.ejs), o detalhamento de um evento (eventPage.ejs) ou o perfil do usuário (profile.ejs) — é construída com foco em responsividade e usabilidade móvel. As views recebem variáveis e objetos do back-end e os exibem com sintaxe EJS, proporcionando uma experiência fluida e personalizada ao usuário.
> ℹ️ **Nota:** A relação entre os controllers e suas respectivas views (EJS) está detalhada na [seção 3.7 – Interface e Navegação](#37-interface-e-navegação).


#### **Controller (Controle)**
Atua como intermediária entre a **View** e o **Model**, sendo responsável por processar as requisições feitas pelos usuários (como criar conta, buscar eventos ou enviar feedback). Os controllers aplicam regras de negócio, validam entradas e, quando necessário, interagem com os models para acessar ou modificar os dados.

No projeto **Vibra**, cada entidade possui um controller específico, o que garante uma organização modular e coesa da lógica da aplicação. São eles:

- `usersController`
- `locationsController`
- `eventsController`
- `subscriptionsController`
- `feedbacksController`
- `playlistsController`
- `datetimeEventsController`

| Controller                   | Responsabilidade Principal                               | Models Relacionados                  |
|-----------------------------|----------------------------------------------------------|--------------------------------------|
| `datetimeEventsController.js` | Controla os dias e horários disponíveis para os eventos  | `datetimeEventsModel`                |
| `eventsController.js`        | Gerencia operações CRUD de eventos culturais             | `eventsModel`, `datetimeEventsModel` |
| `feedbacksController.js`     | Controla o envio e listagem de feedbacks                 | `feedbacksModel`                     |
| `locationsController.js`     | Gerencia dados de localização geográfica                 | `locationsModel`                     |
| `playlistsController.js`     | Lista playlists por localização                          | `playlistsModel`                     |
| `profileController.js`       | Exibe dados do usuário e eventos inscritos no perfil     | `usersModel`, `subscriptionsModel`   |
| `subscriptionsController.js` | Administra inscrições em eventos                         | `subscriptionsModel`                 |
| `usersController.js`         | Gerencia usuários e autenticação                         | `usersModel`                         |
                                              

#### **Model (Modelo)**

A camada responsável por lidar diretamente com a lógica de negócios e com o banco de dados. Cada **model** representa uma tabela no banco PostgreSQL (como `users`, `locations`, `events`, entre outras), incluindo seus atributos e relacionamentos. Além disso, encapsula as operações CRUD (Create, Read, Update, Delete) por meio de queries SQL estruturadas com a biblioteca `pg`.

Esse padrão permite que cada parte da aplicação seja modificada de forma independente. Assim, a arquitetura **MVC** torna o projeto **Vibra** mais modular, seguro e fácil de evoluir conforme novas funcionalidades forem implementadas.

> Para detalhes completos sobre os models e seus métodos, consulte a seção [**3.1.1 BD e Models**](#311-bd-e-models-semana-5).


### 3.3. Wireframes (Semana 03)

Os wireframes são representações visuais simples e estruturadas das telas da aplicação. Eles têm como objetivo demonstrar, de forma clara e organizada, a disposição dos elementos e a arquitetura da interface antes do design final ser aplicado, com isso, **auxiliam o UX Designer na diagramação e aplicação da identidade visual;** e **alinham a expectativa do cliente quanto ao que o usuário quer e ao projeto criado**. 

#### Wireframes de baixa fidelidade

<div align="center">
<sub>Figura 5 - Wireframe - Vibra </sub>
<img src="../assets/wad/wireframe1.jpg">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

<div align="center">
<sub>Figura 6 - Wireframe - Vibra </sub>
<img src="../assets/wad/wireframe2.jpg">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

As telas desenhadas contemplam desde a apresentação inicial da plataforma, passando por login, criação de conta, exploração de países e eventos, até o gerenciamento de perfil e preferências do usuário. A estrutura clara e direta das telas contribui para uma navegação fluida, reforçando a proposta de uma aplicação intuitiva, acessível e centrada na experiência do usuário.

O wireframe foi desenvolvido com base nas user stories, que representam as reais necessidades dos usuários da aplicação. Para atender à US04, que destaca o desejo por usabilidade e acessibilidade, a plataforma foi projetada no formato mobile, facilitando o uso durante viagens, sem depender de um desktop.

A experiência do usuário começa pela tela inicial, que apresenta a proposta da plataforma e incentiva o cadastro no Vibra. Em seguida, o usuário é direcionado para a tela de login, da qual pode acessar sua conta ou criar um novo cadastro, caso ainda não tenha um perfil. Após esse processo, há uma etapa de personalização, onde o usuário pode definir preferências relacionadas a países já visitados, idiomas e culturas de interesse, funcionalidade que atende diretamente à US03, ao tornar a plataforma mais alinhada com o perfil individual de cada pessoa.

Na tela principal da aplicação (home), o usuário tem acesso a uma barra de busca para procurar eventos específicos, recebe recomendações personalizadas e pode navegar entre as páginas de países e o seu próprio perfil. As recomendações destacam eventos variados e imperdíveis, alinhando-se à US01, que foca em despertar o interesse por experiências culturais únicas.

Ao selecionar um país, o usuário é levado a uma página com curiosidades, dicas e uma playlist local, promovendo uma imersão cultural mais rica. Se optar por utilizar a busca, encontrará eventos compatíveis com seu perfil e, ao escolher um deles, será direcionado a uma página dedicada ao evento, com informações detalhadas, avaliações de outros usuários e a opção de inscrição, atendendo à US02, com foco em garantir uma interação segura e confiável.

A página de perfil permite ao usuário visualizar e editar seus dados e preferências, acompanhar os eventos em que está inscrito e deixar feedbacks sobre os que participou, fortalecendo a relação entre o usuário e a plataforma de forma contínua e personalizada.

### 3.4. Guia de estilos (Semana 05)

O guia de estilos foi desenvolvido para garantir consistência visual e reforçar a identidade da plataforma Vibra. Ele reúne os principais elementos gráficos utilizados no projeto, como cores, tipografia, botões, ícones e componentes, orientando na criação de interfaces coesas e intuitivas.

A proposta estética reflete os valores da marca: movimento, energia e conexão cultural. A escolha das cores vibrantes, a tipografia moderna e os elementos minimalistas foram pensados para criar uma experiência envolvente, acessível e inspiradora para usuários ao redor do mundo.

#### **Paleta de cores**

A identidade visual do Vibra é marcada por tons quentes e vibrantes, que transmitem energia, acolhimento e diversidade cultural. A paleta principal é composta por:

- #FF6363 – Rosa vibrante, usado para elementos de destaque e interação.
- #CC4C5A – Vermelho escuro, que transmite profundidade e contraste.  
- #FF8282 – Rosa claro, aplicado em fundos suaves ou realces secundários.
- #FFFFFF – Branco, utilizado para equilíbrio e espaços negativos.
- #333333 – Cinza escuro, ideal para textos e legibilidade.

<div align="center">
<sub>Figura 7 - Paleta de cores - Vibra </sub>
<img src="../assets/wad/paleta.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

#### **Tipografia**
A fonte escolhida para a plataforma, Sora, é moderna, legível e amigável, garantindo uma leitura confortável em diferentes tamanhos de tela. O estilo tipográfico estabelece uma hierarquia clara entre títulos, subtítulos e textos:

- Títulos (H1, H2): Negrito, destaque e impacto visual.
- Subtítulos e sessões (H3, H4): Peso médio, orientação e clareza.
- Texto padrão e parágrafos: Leve, com foco em fluidez e legibilidade.
- Botões e menus: Caixa alta ou destaque sutil, com contraste adequado.

<div align="center">
<sub>Figura 8 - Wireframe - Vibra </sub>
<img src="../assets/wad/tipografia.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

#### **Ícones**
Os ícones são minimalistas e seguem uma linha clara, com proporções uniformes. Eles reforçam a ação visualmente e facilitam a navegação, sendo utilizados em menus, botões e seções informativas.
<div align="center">
<sub>Figura 9 - Ícones - Vibra </sub>
<img src="../assets/wad/icones.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

#### **Componentes**
Os componentes foram criados para garantir consistência visual e facilitar a manutenção da interface. Elementos como cards de evento, campos de busca, botões e seções de perfil seguem padrões de espaçamento, tipografia e cores definidos no guia, promovendo uma experiência coesa e intuitiva para o usuário.
<div align="center">
<sub>Figura 10 - Componentes - Vibra </sub>
<img src="../assets/wad/componentes.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

#### **Acesso ao Figma**

Para visualização completa do **guia de estilos** e do **design system**, acesse os arquivos no Figma pelos links abaixo:

- [Guia de Estilos no Figma](https://www.figma.com/design/8gX8vSk4MDCOcZRkOv70lw/Projeto-individual?node-id=9-311&t=qG1GqaxuU5wDfTGj-1)
- [Design System no Figma](https://www.figma.com/design/8gX8vSk4MDCOcZRkOv70lw/Projeto-individual?node-id=231-1713&t=qG1GqaxuU5wDfTGj-1)

Esses documentos reúnem as definições visuais e os principais elementos reutilizáveis da interface, servindo como referência para o desenvolvimento do produto.

### 3.5. Protótipo de alta fidelidade (Semana 05)

O protótipo de alta fidelidade representa uma versão visual próxima do produto final, integrando a identidade visual, os componentes definidos no design system e a experiência pensada a partir das necessidades dos usuários. Através dele, é possível visualizar o fluxo de navegação, testar interações e validar decisões de design antes do desenvolvimento.

<div align="center">
<sub>Figura 11 - Protótipo - Vibra </sub>
<img src="../assets/wad/prototipo.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

O protótipo de alta fidelidade do Vibra foi desenvolvido com base nas necessidades levantadas nas histórias de usuário e nos objetivos centrais da plataforma: promover experiências culturais autênticas de forma acessível e intuitiva. As telas foram desenhadas para dispositivos móveis, priorizando a usabilidade em contextos de mobilidade, como viagen

Para visualização completa acesse os arquivos no Figma pelos links abaixo:

- [Protótipo](https://www.figma.com/design/8gX8vSk4MDCOcZRkOv70lw/Projeto-individual?node-id=147-3858&t=qG1GqaxuU5wDfTGj-1)
- [Protótipo Interativo](https://www.figma.com/design/8gX8vSk4MDCOcZRkOv70lw/Projeto-individual?node-id=147-4899&t=qG1GqaxuU5wDfTGj-1)

### 3.6. WebAPI e endpoints (Semana 05)


Nesta seção, é apresentada a estrutura de WebAPI desenvolvida para o projeto Vibra, uma plataforma para gestão e divulgação de eventos. A aplicação foi construída utilizando Node.js com Express e banco de dados PostgreSQL. A WebAPI é responsável por disponibilizar os recursos do sistema para o front-end, permitindo operações como criação de usuários, autenticação, cadastro de eventos e inscrições.

Os **endpoints** são componentes essenciais de qualquer aplicação web moderna. Eles definem como a aplicação responde a solicitações HTTP (como GET, POST, PUT e DELETE), funcionando como pontos de acesso à lógica de negócios e ao banco de dados.

No contexto do projeto **Vibra**, os endpoints foram implementados utilizando o framework **Express.js**, com estrutura baseada no padrão **MVC (Model-View-Controller)** Cada endpoint é mapeado para funções específicas em um controller, o que garante modularidade, escalabilidade e manutenibilidade.

Funcionalidades expostas pela API:
- Cadastro e autenticação de usuários (JWT)
- Criação, edição, exclusão e listagem de eventos
- Inscrição em eventos e visualização de status
- Envio de feedbacks
- Consulta por playlists e localizações

> Algumas rotas estão protegidas por autenticação via JWT, garantindo acesso apenas a usuários logados.

Essa estrutura também facilita a integração com interfaces front-end e serviços externos, promovendo flexibilidade e escalabilidade à aplicação.

A seguir, uma amostra das rotas implementadas e seus respectivos controllers:

---
``` js
GET    /                      → datetimeEventsController.index
GET    /event/:eventId       → datetimeEventsController.byEvent
POST   /                      → datetimeEventsController.create
PUT    /update/:id           → datetimeEventsController.update
DELETE /delete/:id           → datetimeEventsController.delete

```

```js

// ROTAS DE EVENTO
GET    /events                  → eventsController.index // Lista todos os eventos
POST   /events                  → eventsController.create // Cria um novo evento
PUT    /events/:id              → eventsController.update // Atualiza um evento
DELETE /events/:id              → eventsController.delete // Exclui um evento
GET    /events/event/:id        → eventsController.show // Exibe detalhes de um evento

```

```js

// ROTAS DE FEEDBACK
GET    /feedbacks                  → feedbacksController.index // Lista todos os feedbacks
POST   /feedbacks                  → feedbacksController.create // Cria um novo feedback
PUT    /feedbacks/:id              → feedbacksController.update // Atualiza um feedback
DELETE /feedbacks/:id              → feedbacksController.delete // Exclui um feedback

```

```js

// ROTAS DE LOCALIZAÇÃO
GET    /locations                  → locationsController.index // Lista todos as localizações
POST   /locations                  → locationsController.create // Cria uma nova localização
PUT    /locations/:id              → locationsController.update // Atualiza uma localização
DELETE /locations/:id              → locationsController.delete // Exclui uma localização

```
``` js

// ROTAS DE PLAYLIST
GET    /playlists                  → playlistsController.index // Lista todos as playlists
POST   /playlists                  → playlistsController.create // Cria uma nova playlist
PUT    /playlists/:id              → playlistsController.update // Atualiza uma playlist
DELETE /playlists/:id              → playlistsController.delete // Exclui uma playlists

```
``` js
GET    /                    → profileController.getUserProfile     [auth]
```
``` js

// ROTAS DE INSCRIÇÃO
GET    /subscriptions                  → subscriptionsController.index // Lista todas as inscrições
POST   /subscriptions                  → subscriptionsController.create // Cria uma nova inscrição
PUT    /subscriptions/:id              → subscriptionsController.update // Atualiza uma inscrição
DELETE /subscriptions/:id              → subscriptionsController.delete // Exclui uma incrição
GET    /subscriptions/user/:id        → subscriptionsController.userSubscriptions // Lista todas as inscrições de um usuário

```
``` js

// ROTAS DE USUÁRIOS
GET    /users                  → usersController.index // Lista todos os usuários
POST   /users                  → usersController.create // Cria um novo usuário
PUT    /users/:id              → usersController.update // Atualiza um usuário
DELETE /users/:id              → usersController.delete // Exclui um usuários
POST   /users/login            → usersController.login // Autentica um usuário

```
Cada rota acima representa uma operação disponível para os usuários da aplicação.

#### Tabela de Rotas da WebAPI

| Rota                         | Método | Controller                               | Retorno                 | Middleware     |
|------------------------------|--------|------------------------------------------|-------------------------|----------------|
| `/events`                    | GET    | `eventsController.index`                 | Lista de eventos        | -              |
| `/events/:id`                | GET    | `eventsController.show`                  | Detalhes do evento      | -              |
| `/events`                    | POST   | `eventsController.create`                | Novo evento criado      | `auth`         |
| `/events/update/:id`         | PUT    | `eventsController.update`                | Evento atualizado       | `auth`         |
| `/events/delete/:id`         | DELETE | `eventsController.delete`                | Confirmação de exclusão | `auth`         |
| `/feedbacks`                 | GET    | `feedbacksController.index`              | Lista de feedbacks      | -              |
| `/feedbacks`                 | POST   | `feedbacksController.create`             | Novo feedback criado    | `auth`         |
| `/locations`                 | GET    | `locationsController.index`              | Lista de localizações   | -              |
| `/playlists`                 | GET    | `playlistsController.index`              | Lista de playlists      | -              |
| `/subscriptions`             | POST   | `subscriptionsController.create`         | Nova inscrição          | `auth`         |
| `/subscriptions/user/:id`    | GET    | `subscriptionsController.findByUserId`   | Inscrições do usuário   | `auth`         |
| `/users`                     | GET    | `usersController.index`                  | Lista de usuários       | `auth (admin)` |
| `/users`                     | POST   | `usersController.create`                 | Criação de usuário      | -              |
| `/users/login`               | POST   | `usersController.login`                  | Token JWT               | -              |
| `/`                          | GET    | `profileController.getUserProfile`       | Perfil do usuário       | `auth`         |
| `/datetime-events`           | GET    | `datetimeEventsController.index`         | Todas as datas/horários | -              |
| `/datetime-events/event/:id` | GET    | `datetimeEventsController.byEvent`       | Datas de um evento      | -              |
| `/datetime-events`           | POST   | `datetimeEventsController.create`        | Nova data criada        | `auth`         |
| `/datetime-events/update/:id`| PUT    | `datetimeEventsController.update`        | Data atualizada         | `auth`         |
| `/datetime-events/delete/:id`| DELETE | `datetimeEventsController.delete`        | Exclusão confirmada     | `auth`         |


Esses endpoints são fundamentais para o funcionamento da aplicação Vibra, pois determinam como as interações com o sistema ocorrem. Além disso, com a autenticação por token, as rotas protegidas garantem que apenas usuários autenticados possam realizar ações sensíveis, como criar eventos ou se inscrever neles.

#### **Autenticação (JWT)**

A aplicação Vibra utiliza autenticação baseada em JWT (JSON Web Token) para garantir segurança no acesso às rotas protegidas da WebAPI. Essa abordagem permite validar a identidade dos usuários e controlar permissões de acesso conforme o tipo de operação requisitada.


#### Visão Geral

- **Tipo**: Autenticação stateless via token
- **Tecnologia**: JWT (jsonwebtoken)
- **Armazenamento do Token**: `localStorage` ou `sessionStorage` no front-end
- **Formato do Token**: `Bearer <token>`, enviado no header `Authorization`
- **Controle de Acesso**: Middleware de autenticação e verificação de role (`admin`, `user`)


#### 🔄 Fluxo de Autenticação

1. **Login** (`POST /users/login`)
   - O usuário envia `email` e `senha`.
   - Se as credenciais forem válidas:
     - É gerado um token JWT com:
       - `id` do usuário
       - `role` do usuário
     - O token é retornado como resposta.
   
2. **Uso do Token**
   - O front-end salva o token e o envia no cabeçalho `Authorization`:
     ```
     Authorization: Bearer <token>
     ```

3. **Verificação nas Rotas Protegidas**
   - O middleware `authenticateToken`:
     - Verifica e decodifica o token.
     - Injeta os dados do usuário em `req.user`.



### 3.7 Interface e Navegação (Semana 07)


O frontend do sistema Vibra foi desenvolvido com foco em responsividade, experiência do usuário e aderência ao guia de estilo visual da aplicação. Utilizando a engine EJS para renderização de páginas no servidor, o sistema conta com HTML semântico, integração com CSS modularizado e scripts JavaScript responsáveis por ações dinâmicas como carrosséis, validação de formulários e consumo de API.
Todas as páginas foram testadas para exibição correta em dispositivos móveis, especialmente no formato do iPhone 16 Pro.

#### Tabela de Views, Scripts e Estilos

| Página / View       | Caminho EJS               | Script Relacionado         | CSS Relacionado           | Finalidade Principal                                      |
|---------------------|---------------------------|----------------------------|----------------------------|-----------------------------------------------------------|
| Login               | `views/login.ejs`         | `scripts/login.js`         | `css/login.css`            | Autenticar o usuário no sistema                           |
| Cadastro            | `views/createAccount.ejs` | `scripts/createAccount.js` | `css/createAccount.css`    | Cadastrar novos usuários                                  |
| Página Inicial      | `views/home.ejs`          | `scripts/home.js`          | `css/home.css`             | Exibir eventos em destaque em formato de carrossel        |
| Resultados da Busca | `views/search.ejs`        | `scripts/search.js`        | `css/search.css`           | Exibir eventos com base na busca por país                 |
| Detalhes do Evento  | `views/eventPage.ejs`     | `scripts/eventPage.js`     | `css/eventPage.css`        | Mostrar detalhes do evento e permitir escolha de horário  |
| Perfil do Usuário   | `views/profile.ejs`       | `scripts/profile.js`       | `css/profile.css`          | Exibir dados do usuário e eventos em que está inscrito    |


#### Login

<div align="center">
<sub>Figura 12 - Protótipo - Vibra </sub>
<img src="../assets/wad/login.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

A tela de login é o ponto de entrada para os usuários autenticarem seu acesso ao sistema. Com um layout minimalista e centralizado, ela apresenta:
- O logotipo do Vibra no topo esquerdo;
- Título de boas-vindas em destaque;Dois campos de entrada: e-mail e senha;
- Botão de “Entrar” com destaque em tom coral;
- Link para criação de nova conta.

O estilo segue o guia de identidade visual da aplicação, com cores suaves, inputs arredondados e contraste entre o branco do conteúdo e o rosa-claro do fundo

#### Criar Conta

<div align="center">
<sub>Figura 13 - Protótipo - Vibra </sub>
<img src="../assets/wad/criarConta.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

A tela de cadastro permite que novos usuários criem uma conta na plataforma Vibra.  
Com uma interface limpa e centralizada, a tela apresenta:

- Logotipo do Vibra no topo;
- Três campos de entrada: nome, e-mail e senha;
- Botão “Criar Conta” com destaque em coral;
- Link para redirecionar à tela de login.

#### Página Inicial

<div align="center">
<sub>Figura 14 - Protótipo - Vibra </sub>
<img src="../assets/wad/inicial.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

A tela inicial exibe os eventos disponíveis na plataforma de forma visual e interativa.  
Nela, o usuário encontra:

- Logotipo da Vibra no topo;
- Barra de busca para digitar o país de interesse;
- Cartões de eventos com imagem, título, descrição e categoria;
- Destaque visual com botão de categoria (“Esportivo”, por exemplo);
- Citação motivacional no estilo da identidade da marca;
- Menu de navegação fixo na parte inferior com ícones para acesso rápido.

A estrutura favorece a descoberta de eventos e proporciona uma navegação intuitiva.

#### Resultados da Busca

<div align="center">
<sub>Figura 15 - Protótipo - Vibra </sub>
<img src="../assets/wad/resultado.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

A tela apresenta os eventos encontrados com base no país pesquisado pelo usuário.  
Sua estrutura inclui:

- Logotipo do Vibra no topo;
- Campo de busca com o termo digitado;
- Texto com a indicação do filtro aplicado (“Resultados da busca por: [país]”);
- Cartão do evento correspondente com imagem, título, descrição e categoria;
- Elemento visual com ilustração do mapa;
- Menu de navegação fixo na parte inferior da tela.

A tela reforça o foco na descoberta de eventos culturais e facilita a navegação entre países.

#### Página do evento
<div align="center">
<sub>Figura 16 - Protótipo - Vibra </sub>
<img src="../assets/wad/evento.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

A página de detalhes do evento apresenta informações completas sobre a experiência oferecida, permitindo ao usuário realizar a inscrição com base na data e horário selecionados.  
A estrutura da tela inclui:

- Imagem destacada do evento no topo;
- Descrição textual do evento;
- Lista de itens inclusos (como cerimônias, jantar e fogos de artifício);
- Informações adicionais: localização, duração, preço e número de participantes;
- Seletor de dias da semana;
- Lista de horários disponíveis;
- Exibição do horário selecionado com formatação clara;
- Menu de navegação fixo na base da tela.

A tela é organizada em seções verticais bem espaçadas e prioriza clareza na escolha do horário para inscrição.

#### Perfil do Usuário

<div align="center">
<sub>Figura 17 - Protótipo - Vibra </sub>
<img src="../assets/wad/perfil.png">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>


A tela de perfil permite ao usuário visualizar os eventos nos quais está inscrito e conferir ou editar seus dados pessoais.  
A estrutura da tela inclui:

- Lista de eventos com imagem, título, descrição e tags de localização e categoria;
- Seção "Meus dados" com os campos nome, e-mail e senha preenchidos;
- Campos de entrada com visual arredondado, consistentes com o restante do sistema;
- Menu de navegação fixo na parte inferior da tela com destaque para o ícone do perfil.

Essa tela integra informações do usuário com seus eventos relacionados, oferecendo uma experiência personalizada.  

#### **Conclusão**

A construção das views do sistema seguiu uma abordagem centrada na clareza, consistência visual e usabilidade. Cada página foi projetada para atender a uma funcionalidade específica do sistema, integrando-se ao fluxo de navegação proposto e respeitando a identidade visual definida no guia de estilos. A estrutura modular com EJS permitiu organização e reaproveitamento de componentes, enquanto a separação entre HTML, CSS e JavaScript garantiu manutenibilidade e escalabilidade.  
A documentação apresentada serve como referência tanto para compreensão técnica quanto para futuras iterações de melhoria da interface.

As principais funcionalidades da aplicação já foram implementadas, incluindo login, cadastro, navegação por eventos, visualização de detalhes e gerenciamento de perfil. Entretanto, o sistema ainda está em fase de desenvolvimento em partes específicas, como o módulo de feedback e a página dedicada aos países, que estão sendo aprimorados. Mesmo com essas pendências, a aplicação já está funcional e utilizável, oferecendo uma experiência consistente. O projeto segue em evolução contínua com foco em proporcionar uma navegação mais fluida, intuitiva e agradável para os usuários.


## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

A fase final do projeto envolveu a consolidação e entrega das funcionalidades previstas na aplicação Vibra, integrando o back-end (Node.js + PostgreSQL) ao front-end responsivo desenvolvido com EJS e estilização personalizada. Durante esta etapa, a aplicação passou por refinamento de interface e verificação da integração entre rotas, controllers e views, com o objetivo de garantir uma experiência fluida, segura e intuitiva para o usuário final.

O desenvolvimento foi guiado pelas histórias de usuário, pelo protótipo de alta fidelidade e pelas boas práticas de arquitetura MVC. A interface foi otimizada para dispositivos móveis, especialmente para o iPhone 16 Pro, e o sistema oferece uma jornada completa: do cadastro ao login, da busca por eventos até a inscrição, com visualização de dados e histórico no perfil.

A integração entre as camadas Model, View e Controller foi implementada seguindo o padrão MVC, garantindo separação de responsabilidades e facilitando a manutenção do código. O uso de middleware de autenticação JWT assegura que apenas usuários autenticados possam acessar funcionalidades protegidas, enquanto a estrutura modular permite escalabilidade futura da aplicação.

**Middleware de Autenticação JWT:**
```javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de acesso requerido' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};
```

**Configuração do Banco de Dados:**
```javascript
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: () => pool.connect(),
};
```

### 4.1 Demonstração do Sistema Web (Semana 8)

A seguir, uma demonstração visual das principais funcionalidades do sistema Vibra em execução. As telas apresentadas validam os requisitos definidos nas etapas anteriores de projeto e design, comprovando o funcionamento das rotas, a correta comunicação com o banco de dados e a interface responsiva que permite ao usuário interagir com eventos de forma prática e envolvente.

> [Assista à demonstração completa do sistema no Google Drive](https://drive.google.com/file/d/1k8arxQxFYei8jWrZsxqSffjZk4xX3OQP/view?usp=drive_link)


#### **Tela de Login**
![Tela de Login](../assets/wad/login.png)

A tela de login é o ponto de entrada da aplicação, apresentando um design minimalista e centrado na experiência do usuário. Com campos para e-mail e senha, ela conecta diretamente ao sistema de autenticação JWT implementado no back-end. O formulário realiza validação client-side e server-side, garantindo segurança no acesso. Após autenticação bem-sucedida, o usuário é redirecionado para a página inicial com seu token armazenado localmente.

**Script JavaScript do Login:**
```javascript
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/home';
    } else {
      alert(data.error || 'Erro ao fazer login');
    }
  } catch (error) {
    alert('Erro de conexão');
  }
});
```

#### **Tela de Cadastro**
![Tela de Cadastro](../assets/wad/criarConta.png)

A interface de cadastro permite que novos usuários criem suas contas na plataforma. Com campos para nome, e-mail e senha, o formulário implementa validações de entrada e criptografia de senha usando bcrypt. A tela mantém a consistência visual com o restante da aplicação, utilizando a paleta de cores e tipografia definidas no guia de estilos.

**Validação Client-Side do Cadastro:**
```javascript
document.getElementById('createAccountForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Validações
  if (name.length < 2) {
    alert('Nome deve ter pelo menos 2 caracteres');
    return;
  }

  if (!email.includes('@')) {
    alert('E-mail inválido');
    return;
  }

  if (password.length < 6) {
    alert('Senha deve ter pelo menos 6 caracteres');
    return;
  }

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Conta criada com sucesso!');
      window.location.href = '/login';
    } else {
      alert(data.error || 'Erro ao criar conta');
    }
  } catch (error) {
    alert('Erro de conexão');
  }
});
```

#### **Página Inicial (Home)**
![Página Inicial](../assets/wad/inicial.png)

A página inicial apresenta eventos em destaque através de um carrossel interativo, implementado com JavaScript vanilla. Os usuários podem navegar pelos eventos disponíveis, utilizar a barra de busca para filtrar por países e acessar rapidamente outras seções através da navegação inferior. A integração com o banco de dados garante que os eventos exibidos estejam sempre atualizados.

**Carrossel de Eventos (JavaScript):**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.events-carousel');
  const cards = document.querySelectorAll('.event-card');
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  // Auto-play do carrossel
  setInterval(nextCard, 5000);

  // Navegação por touch (mobile)
  let startX = 0;
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextCard();
      else prevCard();
    }
  });

  showCard(0);
});
```

**CSS Responsivo para Mobile:**
```css
.events-carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) 0;
}

.event-card {
  min-width: 280px;
  scroll-snap-align: start;
  background: var(--color-surface);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-4px);
}

@media (max-width: 430px) {
  .event-card {
    min-width: 260px;
  }

  .events-carousel {
    padding: var(--spacing-md) 0;
  }
}
```

#### **Resultados de Busca**
![Resultados de Busca](../assets/wad/resultado.png)

A funcionalidade de busca permite aos usuários encontrar eventos específicos por título ou descrição. A página exibe resultados filtrados dinamicamente, com cards informativos que incluem imagem, título, descrição e categorização. Quando acessada sem termos de busca, a página carrega automaticamente os eventos mais recentes, garantindo que sempre haja conteúdo disponível.

**Busca Dinâmica com Debounce:**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchForm = document.querySelector('.search-box');
  let searchTimeout;

  // Busca com debounce para melhor performance
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        performSearch(query);
      }
    }, 500);
  });

  // Busca ao submeter formulário
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch(searchInput.value.trim());
  });

  function performSearch(query) {
    if (query) {
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
      window.location.href = '/search';
    }
  }
});
```

**Controller de Busca Otimizado:**
```javascript
async searchEvents(req, res) {
  const search = req.query.query || '';
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    let query, params;

    if (search.trim() !== '') {
      query = `
        SELECT e.*, l.country
        FROM events e
        LEFT JOIN locations l ON e.locations_id = l.id
        WHERE LOWER(unaccent(e.title)) LIKE LOWER(unaccent($1))
           OR LOWER(unaccent(e.description)) LIKE LOWER(unaccent($1))
           OR LOWER(unaccent(l.country)) LIKE LOWER(unaccent($1))
        ORDER BY e.id DESC
        LIMIT $2 OFFSET $3
      `;
      params = [`%${search}%`, limit, offset];
    } else {
      query = `
        SELECT e.*, l.country
        FROM events e
        LEFT JOIN locations l ON e.locations_id = l.id
        ORDER BY e.id DESC
        LIMIT $1 OFFSET $2
      `;
      params = [limit, offset];
    }

    const result = await db.query(query, params);

    res.render('pages/search', {
      pageTitle: 'Busca',
      search,
      events: result.rows,
      currentPage: page,
      hasMore: result.rows.length === limit
    });
  } catch (error) {
    console.error('Erro na busca:', error);
    res.render('pages/search', {
      pageTitle: 'Busca',
      search,
      events: [],
      currentPage: 1,
      hasMore: false
    });
  }
}
```

#### **Página do Evento**
![Página do Evento](../assets/wad/evento.png)

A página de detalhes do evento oferece informações completas sobre a experiência, incluindo descrição, localização, duração, preço e capacidade. Os usuários podem selecionar datas e horários disponíveis através de uma interface intuitiva, com feedback visual para seleções. O sistema de inscrição integra-se diretamente ao banco de dados, registrando a participação do usuário autenticado.

**Seleção de Data/Hora e Inscrição:**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const datetimeBtns = document.querySelectorAll('.datetime-btn');
  const subscribeBtn = document.getElementById('subscribeBtn');
  let selectedDatetimeId = null;

  datetimeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove seleção anterior
      datetimeBtns.forEach(b => b.classList.remove('selected'));

      // Adiciona seleção atual
      btn.classList.add('selected');
      selectedDatetimeId = btn.dataset.datetimeId;

      // Habilita botão de inscrição
      subscribeBtn.disabled = false;
      subscribeBtn.textContent = 'Inscrever-se';
    });
  });

  subscribeBtn.addEventListener('click', async () => {
    if (!selectedDatetimeId) {
      alert('Selecione uma data e horário');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para se inscrever');
      window.location.href = '/login';
      return;
    }

    subscribeBtn.disabled = true;
    subscribeBtn.textContent = 'Inscrevendo...';

    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          datetime_event_id: selectedDatetimeId
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inscrição realizada com sucesso!');
        subscribeBtn.textContent = 'Inscrito ✓';
        subscribeBtn.style.backgroundColor = '#28a745';
      } else {
        alert(data.error || 'Erro ao realizar inscrição');
        subscribeBtn.disabled = false;
        subscribeBtn.textContent = 'Inscrever-se';
      }
    } catch (error) {
      alert('Erro de conexão');
      subscribeBtn.disabled = false;
      subscribeBtn.textContent = 'Inscrever-se';
    }
  });
});
```

**CSS para Seleção Visual:**
```css
.datetime-btn {
  padding: var(--spacing-md);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  margin: var(--spacing-sm);
}

.datetime-btn:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.datetime-btn.selected {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(255, 99, 99, 0.3);
}

.subscribe-btn:disabled {
  background-color: var(--color-border);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### **Perfil do Usuário**
![Perfil do Usuário](../assets/wad/perfil.png)

A página de perfil centraliza as informações do usuário e seus eventos inscritos. Implementa funcionalidade de popup para visualização detalhada de eventos, com opção de cancelamento de inscrições. A interface responsiva adapta-se perfeitamente a diferentes tamanhos de tela, mantendo usabilidade em dispositivos móveis. A integração com o sistema de autenticação garante que apenas dados do usuário logado sejam exibidos.

**Carregamento Dinâmico do Perfil:**
```javascript
document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/login';
    return;
  }

  try {
    const response = await fetch('/api/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao carregar perfil');
    }

    const data = await response.json();

    // Preencher dados do usuário
    document.getElementById('name').value = data.user.name;
    document.getElementById('email').value = data.user.email;

    // Preencher eventos inscritos
    const container = document.getElementById('events-container');
    container.innerHTML = '';

    data.events.forEach(event => {
      const card = createEventCard(event);
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao carregar perfil');
  }
});

function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.style.cursor = 'pointer';

  const eventDate = new Date(event.day_time);
  const formattedDate = eventDate.toLocaleDateString('pt-BR');
  const formattedTime = eventDate.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  card.innerHTML = `
    <img src="${event.photo || '/images/default-event.jpg'}"
         alt="${event.title}" class="event-image">
    <div class="event-details">
      <h3 class="event-title">${event.title}</h3>
      <p class="event-description">${event.description}</p>
      <div class="event-tags">
        <span class="event-tag">${event.location}</span>
        <span class="event-tag">${event.category}</span>
        <span class="event-tag">${formattedDate} ${formattedTime}</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openEventPopup(event));
  return card;
}
```

**Popup de Evento com Cancelamento:**
```javascript
function openEventPopup(event) {
  const overlay = document.createElement('div');
  overlay.className = 'event-popup-overlay';

  const eventDate = new Date(event.day_time);
  const formattedDate = eventDate.toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('pt-BR', {
    hour: '2-digit', minute: '2-digit'
  });

  overlay.innerHTML = `
    <div class="event-popup">
      <button class="popup-close">&times;</button>
      <img src="${event.photo}" alt="${event.title}" class="popup-event-image">
      <h2 class="popup-event-title">${event.title}</h2>
      <p class="popup-event-description">${event.description}</p>

      <div class="popup-event-info">
        <div class="popup-info-item">
          <span> ${formattedDate} às ${formattedTime}</span>
        </div>
        <div class="popup-info-item">
          <span> ${event.location}</span>
        </div>
      </div>

      <button class="popup-cancel-btn" data-subscription-id="${event.subscription_id}">
        Cancelar Inscrição
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Event listeners
  overlay.querySelector('.popup-close').addEventListener('click', () => {
    closeEventPopup(overlay);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeEventPopup(overlay);
  });

  overlay.querySelector('.popup-cancel-btn').addEventListener('click', () => {
    cancelSubscription(event.subscription_id, overlay);
  });

  // Mostrar com animação
  setTimeout(() => overlay.classList.add('active'), 10);
}

async function cancelSubscription(subscriptionId, overlay) {
  const token = localStorage.getItem('token');
  const cancelBtn = overlay.querySelector('.popup-cancel-btn');

  cancelBtn.disabled = true;
  cancelBtn.textContent = 'Cancelando...';

  try {
    const response = await fetch(`/api/subscriptions/delete/${subscriptionId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert('Inscrição cancelada com sucesso!');
      closeEventPopup(overlay);
      window.location.reload(); // Recarregar para atualizar lista
    } else {
      const error = await response.json();
      alert(error.error || 'Erro ao cancelar inscrição');
      cancelBtn.disabled = false;
      cancelBtn.textContent = 'Cancelar Inscrição';
    }
  } catch (error) {
    alert('Erro de conexão');
    cancelBtn.disabled = false;
    cancelBtn.textContent = 'Cancelar Inscrição';
  }
}
```
### 4.1.1 Fluxo de Usuário com Telas e Códigos

A implementação dos fluxos de usuário demonstra a importância de ter uma arquitetura bem integrada entre interface, back-end e persistência de dados. O padrão MVC aplicado no projeto Vibra garante que cada camada tenha responsabilidades bem definidas: as **Views** focam na experiência do usuário e apresentação de dados, os **Controllers** implementam a lógica de negócio e validações, e os **Models** gerenciam o acesso aos dados de forma consistente e segura.

Esta separação de responsabilidades facilita a manutenção do código, permite testes independentes de cada camada e possibilita a evolução da aplicação de forma modular. A integração com autenticação JWT, validações client-side e server-side, e o uso de consultas SQL otimizadas garantem que a aplicação seja robusta, segura e performática, oferecendo uma experiência fluida e confiável para os usuários finais.

**Configuração de Rotas Principais:**
```javascript
// routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Middleware de autenticação
const { authenticateToken } = require('../middleware/auth');

// Importar controllers
const usersController = require('../controllers/usersController');
const eventsController = require('../controllers/eventsController');
const subscriptionsController = require('../controllers/subscriptionsController');
const profileController = require('../controllers/profileController');

// Rotas públicas (front-end)
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/login'), {
    pageTitle: 'Login - Vibra'
  });
});

router.get('/login', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/login'), {
    pageTitle: 'Login - Vibra'
  });
});

router.get('/createAccount', (req, res) => {
  res.render(path.join(__dirname, '../views/pages/createAccount'), {
    pageTitle: 'Criar Conta - Vibra'
  });
});

// Rotas protegidas (requerem autenticação)
router.get('/home', authenticateToken, async (req, res) => {
  try {
    const events = await eventsController.getAllEvents();
    res.render(path.join(__dirname, '../views/pages/home'), {
      pageTitle: 'Home - Vibra',
      events,
      user: req.user
    });
  } catch (error) {
    res.render(path.join(__dirname, '../views/pages/home'), {
      pageTitle: 'Home - Vibra',
      events: [],
      user: req.user
    });
  }
});

router.get('/profile', authenticateToken, (req, res) => {
  res.render(path.join(__dirname, '../views/pages/profile'), {
    pageTitle: 'Perfil - Vibra',
    user: req.user
  });
});

// API Routes
router.post('/api/users/login', usersController.login);
router.post('/api/users', usersController.create);
router.get('/api/profile', authenticateToken, profileController.getUserProfile);
router.post('/api/subscriptions', authenticateToken, subscriptionsController.create);
router.delete('/api/subscriptions/delete/:id', authenticateToken, subscriptionsController.delete);

module.exports = router;
```

**Estrutura de Tratamento de Erros Global:**
```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error('Erro capturado:', err);

  // Erro de validação do JWT
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'Token inválido'
    });
  }

  // Erro de token expirado
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: 'Token expirado'
    });
  }

  // Erro de banco de dados
  if (err.code) {
    switch (err.code) {
      case '23505': // Violação de constraint única
        return res.status(409).json({
          error: 'Dados já existem no sistema'
        });
      case '23503': // Violação de foreign key
        return res.status(400).json({
          error: 'Referência inválida'
        });
      case '23502': // Violação de not null
        return res.status(400).json({
          error: 'Campos obrigatórios não preenchidos'
        });
      default:
        return res.status(500).json({
          error: 'Erro de banco de dados'
        });
    }
  }

  // Erro genérico
  res.status(500).json({
    error: 'Erro interno do servidor'
  });
};

module.exports = errorHandler;
```

**Configuração Principal da Aplicação:**
```javascript
// app.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware de segurança
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:", "http:"],
      scriptSrc: ["'self'"]
    }
  }
}));

// CORS configurado
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Middleware de parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Engine de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
const routes = require('./routes');
app.use('/', routes);

// Middleware de tratamento de erros
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).render('pages/404', {
    pageTitle: 'Página não encontrada - Vibra'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
  console.log(` Acesse: http://localhost:${PORT}`);
});

module.exports = app;
```

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

#### **Pontos Fortes do Projeto**

- **Arquitetura MVC Sólida**: A implementação rigorosa do padrão Model-View-Controller garantiu separação clara de responsabilidades, facilitando manutenção e escalabilidade do código.

- **Banco de Dados Estruturado**: O modelo relacional bem definido com PostgreSQL assegura integridade dos dados e suporte a relacionamentos complexos entre usuários, eventos e inscrições.

- **Responsividade Mobile-First**: Interface otimizada para dispositivos móveis, especialmente iPhone 16 Pro, com testes extensivos de usabilidade em diferentes resoluções.

- **Segurança com JWT**: Sistema de autenticação robusto utilizando JSON Web Tokens, protegendo rotas sensíveis e garantindo acesso seguro às funcionalidades.

- **Interface Consistente**: Aplicação rigorosa do guia de estilos em todas as telas, utilizando a fonte Sora e paleta de cores definida, criando experiência visual coesa.

- **Funcionalidades Integradas**: Sistema completo de busca, inscrição em eventos, gerenciamento de perfil e cancelamento de inscrições funcionando de forma integrada.

#### **Possíveis Melhorias**

- **Painel Administrativo**: Implementação de interface para administradores gerenciarem eventos, usuários e relatórios de inscrições.

- **Sistema de Favoritos**: Funcionalidade para usuários salvarem eventos de interesse para visualização posterior.

- **Avaliações com Estrelas**: Sistema de feedback mais visual com classificação por estrelas e comentários detalhados.

- **Notificações Push**: Alertas sobre novos eventos, lembretes de eventos inscritos e confirmações de ações.

- **Filtros Avançados**: Busca por categoria, faixa de preço, data e localização específica.

- **Sistema de Recomendações**: Algoritmo para sugerir eventos baseado no histórico e preferências do usuário.

#### **Ideias para Trabalhos Futuros**

- **Integração com Redes Sociais**: Compartilhamento de eventos no Instagram, Facebook e WhatsApp, com login social.

- **Dashboard Analytics**: Painel com métricas de engajamento, eventos mais populares e estatísticas de usuários.

- **Aplicativo Mobile Nativo**: Desenvolvimento de app iOS/Android com funcionalidades offline e geolocalização.

- **Sistema de Pagamentos**: Integração com gateways de pagamento para eventos pagos e processamento de transações.

- **Chatbot de Atendimento**: Assistente virtual para dúvidas sobre eventos e suporte ao usuário.

- **Integração com Calendários**: Sincronização automática com Google Calendar e Apple Calendar.

- **Realidade Aumentada**: Preview de locais de eventos através de AR para melhor experiência do usuário.

- **Modo escuro**: Eventos noturnos.


## <a name="c5"></a>5. Referências

Não se aplica.  
Este projeto foi desenvolvido com base em conhecimentos adquiridos ao longo do curso, sem a utilização de fontes bibliográficas ou referências externas específicas que justifiquem citação formal.
<br>

---
---