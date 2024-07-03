import { contactFormSchema } from '@/lib/schemas';

describe('contactFormSchema', () => {
    it('should validate valid data', async () => {
        const validData = {
            nome: 'John',
            sobrenome: 'Doe',
            email: 'john@example.com',
            telefone: '1234567890',
            servico: 'web',
            mensagem: 'Hello, I need a website.'
        };
        await expect(contactFormSchema.parseAsync(validData)).resolves.toEqual(validData);
    });

    it('should throw error for invalid data', async () => {
        const invalidData = {
            nome: '',
            sobrenome: '',
            email: 'invalid-email',
            telefone: '',
            servico: '',
            mensagem: ''
        };
        await expect(contactFormSchema.parseAsync(invalidData)).rejects.toThrow();
    });
});
