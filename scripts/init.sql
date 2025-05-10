-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabelas do banco de dados
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

ALTER TABLE "subscriptions" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "subscriptions" ADD FOREIGN KEY ("event_id") REFERENCES "event" ("id");

ALTER TABLE "event" ADD FOREIGN KEY ("location_id") REFERENCES "location" ("id");

ALTER TABLE "feedback" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "feedback" ADD FOREIGN KEY ("event_id") REFERENCES "event" ("id");

ALTER TABLE "playlist" ADD FOREIGN KEY ("location_id") REFERENCES "location" ("id");


-- Inserir 20 usuários com nomes e emails aleatórios
INSERT INTO users (name, email)
VALUES 
  ('Alice Smith', 'alice.smith@example.com'),
  ('Bob Johnson', 'bob.johnson@example.com'),
  ('Carol Williams', 'carol.williams@example.com'),
  ('David Jones', 'david.jones@example.com'),
  ('Emma Brown', 'emma.brown@example.com'),
  ('Frank Davis', 'frank.davis@example.com'),
  ('Grace Wilson', 'grace.wilson@example.com'),
  ('Henry Moore', 'henry.moore@example.com'),
  ('Isabella Taylor', 'isabella.taylor@example.com'),
  ('Jack Lee', 'jack.lee@example.com'),
  ('Kate Clark', 'kate.clark@example.com'),
  ('Liam Martinez', 'liam.martinez@example.com'),
  ('Mia Rodriguez', 'mia.rodriguez@example.com'),
  ('Noah Garcia', 'noah.garcia@example.com'),
  ('Olivia Hernandez', 'olivia.hernandez@example.com'),
  ('Patrick Martinez', 'patrick.martinez@example.com'),
  ('Quinn Lopez', 'quinn.lopez@example.com'),
  ('Rose Thompson', 'rose.thompson@example.com'),
  ('Samuel Perez', 'samuel.perez@example.com'),
  ('Tara Scott', 'tara.scott@example.com');
