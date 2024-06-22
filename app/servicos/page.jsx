"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const services = [
    {
        num:1,
        title:"Desenvolvimento Back-end",
        description:"Experiencia em desenvolvimento de APIs, utilizando Python ou Node.",
        href:""
    },
    {
        num:2,
        title:"Analise de dados",
        description:"Desenvolvimento de Scripts / dashboards para analise de dados, utilizando Python, javascript, Looker Studio ou Power BI.",
        href:""
    },
    {
        num:3,
        title:"UI/UX Design",
        description:"Experiencia em design de interfaces, utilizando as melhores práticas de usabilidade e acessibilidade com o Figma.",
        href:""
    },
    {
        num:4,
        title:"Web Development",
        description:"Experiencia em desenvolvimento de sites e aplicativos web, utilizando as tecnologias mais recentes do mercado.",
        href:""
    },

]

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{
                delay:2.4, duration: 0.4, ease: "easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service, index) => (
                    <div 
                    key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group"
                    >
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">{service.num}</div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className="text-primary text-3xl"/>                            
                        </Link>
                        </div>
                        {/* titulo */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        {/* descricao */}
                        <p className="text-white/60">{service.description}</p>
                        {/* borda */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                ))}

            </motion.div>
        </div>
        </section>
    );
}
export default Services;