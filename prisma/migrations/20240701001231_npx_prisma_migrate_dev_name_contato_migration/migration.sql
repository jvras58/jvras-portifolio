-- CreateTable
CREATE TABLE "contato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "sobrenome" TEXT,
    "email" TEXT,
    "telefone" TEXT,
    "servico" TEXT,
    "mensagem" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
