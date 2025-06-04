-- Tabelas do banco de dados
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "email" VARCHAR(100),
  "password" VARCHAR(255),
  "photo" VARCHAR(255),
  "preferences" VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "locations" (
  "id" SERIAL PRIMARY KEY,
  "country" VARCHAR(100),
  "language" VARCHAR(100),
  "coin" VARCHAR(50),
  "customs" VARCHAR(500),
  "curiosities" VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS "events" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(100),
  "type" VARCHAR(50),
  "description" VARCHAR(500),
  "photo" VARCHAR(255),
  "locations_id" INT,
  "included" VARCHAR(500),
  "place" VARCHAR(255),
  "duration" VARCHAR(100),
  "price" DECIMAL,
  "capacity" INTEGER
);

CREATE TABLE IF NOT EXISTS "datetime_events" (
  "id" SERIAL PRIMARY KEY,
  "day_time" TIMESTAMP,
  "event_id" INT,
  CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "subscriptions" (
  "id" SERIAL PRIMARY KEY,
  "users_id" INT,
  "events_id" INT,
  "datetime_event_id" INT,
  "status" VARCHAR(50),
  CONSTRAINT fk_datetime_event FOREIGN KEY (datetime_event_id) REFERENCES datetime_events(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "feedbacks" (
  "id" SERIAL PRIMARY KEY,
  "users_id" INT,
  "events_id" INT,
  "comments" VARCHAR(500),
  "grade" DECIMAL,
  "date" DATE,
  "hour" TIME
);

CREATE TABLE IF NOT EXISTS "playlists" (
  "id" SERIAL PRIMARY KEY,
  "locations_id" INT,
  "name" VARCHAR(100),
  "link" VARCHAR(255)
);

-- FKs
ALTER TABLE "subscriptions" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");
ALTER TABLE "subscriptions" ADD FOREIGN KEY ("events_id") REFERENCES "events" ("id") ON DELETE CASCADE;

ALTER TABLE "events" ADD FOREIGN KEY ("locations_id") REFERENCES "locations" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");
ALTER TABLE "feedbacks" ADD FOREIGN KEY ("events_id") REFERENCES "events" ("id");

ALTER TABLE "playlists" ADD FOREIGN KEY ("locations_id") REFERENCES "locations" ("id");

-- Extensões
CREATE EXTENSION IF NOT EXISTS unaccent;

