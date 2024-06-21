"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Telefone',
        description: '(+55) 81 98301-9618'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'Jonathas.vinicius@ufpe.br'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Endereço',
        description: 'Camaragibe - PE, Brasil'
    }
];

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form Section */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Vamos colaborar juntos.</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Nome" />
                                <Input type="text" placeholder="Nome" />
                                <Input type="email" placeholder="Email" />
                                <Input type="tel" placeholder="Telefone" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione o serviço</SelectLabel>
                                        <SelectItem value="web">Desenvolvimento Web</SelectItem>
                                        <SelectItem value="uiux">Design UI/UX</SelectItem>
                                        <SelectItem value="backend">Desenvolvimento Back-end</SelectItem>
                                        <SelectItem value="data">Analise de dados (Dashboard)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Mensagem"></Textarea>
                            <Button size="md" className="max-w-40">Enviar Mensagem</Button>
                        </form>
                    </div>
                    {/* Info Section */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul>
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6 mb-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;