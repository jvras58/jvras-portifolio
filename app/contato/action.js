"use server";

import { contactFormSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";

export const saveContactForm = async (data) => {
    try {
        const validatedData = await contactFormSchema.parseAsync(data);
        const result = await prisma.contato.create({
            data: validatedData,
        });
        return result;
    } catch (err) {
        console.error('Erro ao salvar o formulário de contato:', err);
        throw err;
    }
};

export const getContactForms = async () => {
    try {
        const contacts = await prisma.contato.findMany();
        return contacts;
    } catch (err) {
        console.error('Erro ao recuperar os formulários de contato:', err);
        throw err;
    }
};