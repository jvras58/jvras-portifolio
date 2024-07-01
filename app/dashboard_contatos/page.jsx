"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
Dialog,
DialogContent,
DialogDescription,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog";
// Importe a função getContactForms
import { getContactForms } from '@/app/contato/action';


const Dashboard = () => {
// Estado para armazenar os formulários de contato
const [contactForms, setContactForms] = useState([]);
const [selectedMessage, setSelectedMessage] = useState('');

// Buscar formulários de contato ao carregar a página
useEffect(() => {
const fetchContactForms = async () => {
    const forms = await getContactForms();
    setContactForms(forms);
};

fetchContactForms();
}, []);

return (
<motion.div
    initial={{ opacity: 0 }}
    animate={{ 
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
    <div className="container mx-auto p-8 bg-[#1e1e1e] rounded-xl">
    <h1 className="text-2xl font-bold text-accent text-center mb-6">Contatos</h1>
    <ScrollArea className="h-[500px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white/60 uppercase text-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th className="py-3 px-6">Nome</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Telefone</th>
            <th className="py-3 px-6">Serviço</th>
            <th className="py-3 px-6">Mensagem</th>
            <th className="py-3 px-6">Enviado em</th>
            <th className="py-3 px-6">Ações</th>
            </tr>
        </thead>
        <tbody>
            {contactForms.map((form, index) => (
            <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="py-4 px-6">{form.name}</td>
                <td className="py-4 px-6">{form.email}</td>
                <td className="py-4 px-6 whitespace-nowrap">{form.phone}</td>
                <td className="py-4 px-6">{form.service}</td>
                <td className="py-4 px-6 truncate max-w-xs">
                <Dialog>
                    <DialogTrigger asChild>
                    <span 
                        className="cursor-pointer text-blue-500 underline" 
                        onClick={() => setSelectedMessage(form.message)}
                    >
                        Ver Mensagem
                    </span>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto p-6 bg-[#2d2d2d] rounded-lg text-white">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold mb-2">Mensagem Completa</DialogTitle>
                        <DialogDescription className="text-base whitespace-pre-wrap break-words overflow-auto">
                        {selectedMessage}
                        </DialogDescription>
                    </DialogHeader>
                    </DialogContent>
                </Dialog>
                </td>
                <td className="py-4 px-6">{new Date(form.createdAt).toLocaleString()}</td>
                <td className="py-4 px-6">Encerrar/deletar</td>
            </tr>
            ))}
        </tbody>
        </table>
    </ScrollArea>
    </div>
</motion.div>
);
};

export default Dashboard;