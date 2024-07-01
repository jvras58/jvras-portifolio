import { contactFormSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";

export const saveContactForm = async (data) => {
    try {
        const validatedData = await contactFormSchema.parseAsync(data);
        await prisma.contato.create({
            data: validatedData,
        });
    } catch (err) {
        console.error('Erro ao salvar o formulário de contato:', err);
        throw err;
    }
};
