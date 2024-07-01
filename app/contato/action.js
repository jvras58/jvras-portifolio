"use server";

import { contactFormSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";

export const saveContactForm = async (data) => {
    try {
        // console.log('Recebido Formulario:', data);
        const validatedData = await contactFormSchema.parseAsync(data);
        const result = await prisma.contato.create({
            data: validatedData,
        });
        // console.log('Formulário salvo:', result);
    } catch (err) {
        console.error('Erro ao salvar o formulário de contato:', err);
        throw err;
    }
};
