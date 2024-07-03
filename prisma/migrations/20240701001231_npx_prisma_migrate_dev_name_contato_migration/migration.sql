-- CreateTable
CREATE TABLE "contato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "servico" TEXT,
    "mensagem" TEXT
);
