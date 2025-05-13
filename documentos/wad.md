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

### 2.2. User Stories (Semana 01)


> US01 | Como turista, quero descobrir eventos únicos enquanto viajo, para que eu possa viver cada destino profundamente e inesquecível.

> US02 | Como uma usuária que valoriza praticidade, quero me inscrever em eventos de forma rápida e segura, para garantir minha participação sem complicações e evitar filas ou processos demorados.

> US03 | Como uma amante de viagens culturais, quero receber recomendações de eventos, festas e atividades locais baseadas no meu perfil e destino, para otimizar minha experiência e tornar cada viagem inesquecível.

> US04 | | Sendo uma viajante conectada, quero acessar a aplicação diretamente pelo celular, para ter todas as funcionalidades disponíveis na palma da mão, sempre que eu estiver conectada à internet.
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
**Usuários (user)**: Representa as pessoas que utilizam a aplicação web.
- `id`: Identificador único do usuário (PK).
- `name`: Nome do usuário.
- `email`: Endereço de e-mail.
- `password`: Senha de acesso.
- `photo`: Foto de perfil.
- `preferences`: Interesses do usuário.

**Inscrições (subscriptions)**: Representa as inscrições dos usuários nos eventos.
- `id`: Identificador da inscrição (PK).
- `user_id`, `event_id`: Relacionam inscriçoes ao usuário e evento (FK).
- `status`: Situação da inscrição(confirmada, pendente, etc.).

**Feedback (feedback)**: Representa os feedbacks dos eventos.
- `id`: Identificador do Feedback (PK).
- `user_id`, `event_id`: Relacionam feedback ao usuário e evento (FK).
- `comments`: Comentário textual.
- `grade`: Nota ou avaliação numérica.
- `when`: Momento do feedback.

**Evento (event)**: Representa eventos cadastrados na aplicação web.
- `id`: Identificador do evento (PK).
- `title`,`type`, `description`, `photo`: Detalhes do evento.
- `when`: Data e hora do evento.
- `location_id`: Localidade do evento (FK).

**Localidade (location)**: Representa onde os evetntos acontecem.
- `id`: Identificador da localidade (PK)
- `country``language`, `coin`: Dados culturais do país.
- `customs`, `curiosities`: Costumes e curiosidades.

```SQL
CREATE TABLE "user" (
  "id" INT PRIMARY KEY,
  "name" VARCHAR(100),
  "email" VARCHAR(100),
  "password" VARCHAR(255),
  "photo" VARCHAR(255),
  "preferences" VARCHAR(255)
);

CREATE TABLE "event" (
  "id" INT PRIMARY KEY,
  "title" VARCHAR(100),
  "type" VARCHAR(50),
  "description" VARCHAR(500),
  "photo" VARCHAR(255),
  "location_id" INT
);

CREATE TABLE "location" (
  "id" INT PRIMARY KEY,
  "country" VARCHAR(100),
  "language" VARCHAR(100),
  "coin" VARCHAR(50),
  "customs" VARCHAR(500),
  "curiosities" VARCHAR(500)
);

CREATE TABLE "subscriptions" (
  "id" INT PRIMARY KEY,
  "user_id" INT,
  "event_id" INT,
  "date" DATE,
  "hour" TIME,
  "status" VARCHAR(50)
);

CREATE TABLE "feedback" (
  "id" INT PRIMARY KEY,
  "user_id" INT,
  "event_id" INT,
  "comments" varchar(500),
  "grade" DECIMAL,
  "date" DATE,
  "hour" TIME
);

CREATE TABLE "playlist" (
  "id" INT PRIMARY KEY,
  "location_id" INT,
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
ALTER TABLE "subscriptions" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "subscriptions" ADD FOREIGN KEY ("event_id") REFERENCES "event" ("id");

ALTER TABLE "event" ADD FOREIGN KEY ("location_id") REFERENCES "location" ("id");

ALTER TABLE "feedback" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "feedback" ADD FOREIGN KEY ("event_id") REFERENCES "event" ("id");

ALTER TABLE "playlist" ADD FOREIGN KEY ("location_id") REFERENCES "location" ("id");
```

A modelagem do banco de dados da aplicação Vibra organiza as entidades principais, como eventos, inscrições, playlists e feedbacks, proporcionando uma experiência fluida para os usuários. A estrutura também facilita futuras expansões, como integração com redes sociais e novos conteúdos.


### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

Os wireframes são representações visuais simples e estruturadas das telas da aplicação. Eles têm como objetivo demonstrar, de forma clara e organizada, a disposição dos elementos e a arquitetura da interface antes do design final ser aplicado, com isso, **auxiliam o UX Designer na diagramação e aplicação da identidade visual;** e **alinham a expectativa do cliente quanto ao que o usuário quer e ao projeto criado**. 

#### Wireframes de baixa fidelidade

<div align="center">
<sub>Figura 3 - Wireframe - Vibra </sub>
<img src="../assets/wad/wireframe1.jpg">
<sup>Fonte: Autoria Própia, Faculdade Inteli 2025</sup>
</div>

<div align="center">
<sub>Figura 4 - Wireframe - Vibra </sub>
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

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---