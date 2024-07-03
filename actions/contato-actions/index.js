"use server";

import { prisma } from "@/lib/prisma";

export const getContactForms = async () => {
    try {
        const contacts = await prisma.contato.findMany();
        return contacts;
    } catch (err) {
        console.error('Erro ao recuperar os formulários de contato:', err);
        throw err;
    }
};