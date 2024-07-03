import { saveContactForm } from '@/app/contato/action';
import { prisma } from '@/lib/prisma';

describe('saveContactForm', () => {
    afterEach(async () => {
        await prisma.contactForm.deleteMany({});
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it('should save valid contact form data', async () => {
        const formData = {
            nome: 'John',
            sobrenome: 'Doe',
            email: 'john@example.com',
            telefone: '1234567890',
            servico: 'web',
            mensagem: 'Hello, I need a website.'
        };
        await saveContactForm(formData);
        const savedForm = await prisma.contactForm.findFirst();
        expect(savedForm).toMatchObject(formData);
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
        await expect(saveContactForm(invalidData)).rejects.toThrow();
    });
});
