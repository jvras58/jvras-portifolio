import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactForm from '../app/contato/page';

describe('ContactForm', () => {
    it('should render form fields', () => {
        render(<ContactForm />);
        expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('sobrenome')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Telefone')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Selecione o serviço')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Mensagem')).toBeInTheDocument();
        expect(screen.getByText('Enviar Mensagem')).toBeInTheDocument();
    });

    it('should show validation errors for empty fields', async () => {
        render(<ContactForm />);
        fireEvent.click(screen.getByText('Enviar Mensagem'));
        await waitFor(() => {
            expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('Sobrenome é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('Email é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('Telefone é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('Serviço é obrigatório')).toBeInTheDocument();
            expect(screen.getByText('Mensagem é obrigatória')).toBeInTheDocument();
        });
    });

    it('should show validation error for invalid email', async () => {
        render(<ContactForm />);
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByText('Enviar Mensagem'));
        await waitFor(() => {
            expect(screen.getByText('Email inválido')).toBeInTheDocument();
        });
    });
});
