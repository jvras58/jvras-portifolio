import * as z from 'zod';

export const contactFormSchema = z.object({
    nome: z.string().min(1, 'Nome é obrigatório'),
    sobrenome: z.string().min(1, 'Sobrenome é obrigatório'),
    email: z.string().email('Email inválido'),
    telefone: z.string().min(1, 'Telefone é obrigatório'),
    servico: z.string().min(1, 'Serviço é obrigatório'),
    mensagem: z.string().min(1, 'Mensagem é obrigatória'),
});
