CREATE DATABASE todoapp

CREATE TABLE "users" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "firstname"     VARCHAR(255),
    "lastname"      VARCHAR(255),
    "email"         VARCHAR(255),
    "password"      VARCHAR(255),
    "createdAt"     TIMESTAMP DEFAULT now(),
    "updatedAt"     TIMESTAMP
);

ALTER TABLE "users" RENAME COLUMN "firstname" TO "firstName";

ALTER TABLE "users" RENAME COLUMN "lastname" TO "lastName";