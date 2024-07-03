-- CreateTable
CREATE TABLE "contato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "sobrenome" TEXT,
    "email" TEXT,
    "telefone" TEXT,
    "servico" TEXT,
    "mensagem" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contato_pkey" PRIMARY KEY ("id")
);
