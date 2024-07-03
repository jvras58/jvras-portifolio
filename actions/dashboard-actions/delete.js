"use server";

import { prisma } from "@/lib/prisma";

export const deleteContactForm = async (id) => {
    try {
        const result = await prisma.contato.delete({
            where: {
                id: id,
            },
        });
        return result;
    } catch (err) {
        console.error('Erro ao apagar o formulário de contato:', err);
        throw err;
    }
};