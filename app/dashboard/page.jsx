'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = () => {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    const fetchContactForms = async () => {
      try {
        const response = await axios.get('/api/contact');
        setContactForms(response.data);
      } catch (err) {
        console.error('Falha ao buscar formulários de contato:', err);
      }
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
              </tr>
            </thead>
            <tbody>
              {contactForms.map((form, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="py-4 px-6">{form.name}</td>
                  <td className="py-4 px-6">{form.email}</td>
                  <td className="py-4 px-6">{form.phone}</td>
                  <td className="py-4 px-6">{form.service}</td>
                  <td className="py-4 px-6">{form.message}</td>
                  <td className="py-4 px-6">{new Date(form.createdAt).toLocaleString()}</td>
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
