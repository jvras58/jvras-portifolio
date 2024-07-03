"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";    
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/actions/contato-actions/schemas";
import { saveContactForm } from "@/actions/contato-actions/save";
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

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data) => {
        try {
            await saveContactForm(data);
            // Reseta quando for um sucesso
            reset();
            alert('Mensagem enviada com sucesso!');
        } catch (err) {
            console.error(err);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Vamos colaborar juntos.</h3>
            <p className="text-white/60">Entre em contato Abaixo:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Nome" {...register('nome')} className={errors.nome ? 'border-red-500' : ''} />
                {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
                <Input type="text" placeholder="Sobrenome" {...register('sobrenome')} className={errors.sobrenome ? 'border-red-500' : ''} />
                {errors.sobrenome && <p className="text-red-500">{errors.sobrenome.message}</p>}
                <Input type="email" placeholder="Email" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <Input type="tel" placeholder="Telefone" {...register('telefone')} className={errors.telefone ? 'border-red-500' : ''} />
                {errors.telefone && <p className="text-red-500">{errors.telefone.message}</p>}
            </div>
            <Controller
                name="servico"
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                        name={name}
                        onValueChange={onChange}
                        value={value}
                        className={errors.servico ? 'border-red-500' : ''}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Selecione o serviço</SelectLabel>
                                <SelectItem value="web">Desenvolvimento Web</SelectItem>
                                <SelectItem value="uiux">Design UI/UX</SelectItem>
                                <SelectItem value="backend">Desenvolvimento Back-end</SelectItem>
                                <SelectItem value="data">Análise de dados (Dashboard)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            />
            {errors.servico && <p className="text-red-500">{errors.servico.message}</p>}
            <Textarea placeholder="Mensagem" {...register('mensagem')} className={errors.mensagem ? 'border-red-500' : ''}></Textarea>
            {errors.mensagem && <p className="text-red-500">{errors.mensagem.message}</p>}
            <Button size="md" className="max-w-40" type="submit">Enviar Mensagem</Button>
        </form>
    );
};

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form Section */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <ContactForm />
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
