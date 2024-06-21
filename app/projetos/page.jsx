"use client";

import {motion} from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects= [
    {
        num: "1",
        category: "API - Estudos",
        title: "APi- Alocação de Espaços - Estudos",
        description: "API para alocação de espaços em um ambiente, com autenticação de usuários e controle de acesso.",
        stack: [{name: "Python"}, {name: "FastAPI"}, {name: "SQLAlchemy"}],
        image: "/assets/projetos/thumb1.png",
        live: "",
        github: "https://github.com/jvras58/FastAPi_estudos.git",
    },
    {
        num: "2",
        category: "API",
        title: "APi- FastAPI",
        description: "Back-end com FastAPI, incluindo autenticação de usuários, controle de acesso e controladores genéricos.",
        stack: [{name: "Python"}, {name: "FastAPI"}, {name: "SQLAlchemy"}],
        image: "/assets/projetos/thumb1-1.png",
        live: "",
        github: "https://github.com/jvras58/back-fastapi.git",
    },
    {
        num: "3",
        category: "Bot",
        title: "Bot - Discord",
        description: "Bot para discord com funcionalidades de leitura, salvamento de mensagens de organização de processos de trabalho e moderação.",
        stack: [{name: "Python"}, {name: "discord.py"}, {name: "sqlite3"}],
        image: "/assets/projetos/thumb2.png",
        live: "",
        github: "https://github.com/jvras58/bot-discord.git",
    },
    {
        num: "4",
        category: "Bot",
        title: "Bot - Discord",
        description: "Bot para discord com funcionalidades de leitura, gerenciamento de banco, rinhas, eventos de promoção e envio de dinheiro fictício (Moneyo).",
        stack: [{name: "Javascript"}, {name: "discord.py"}, {name: "sqlite3"}],
        image: "/assets/projetos/thumb4.png",
        live: "",
        github: "https://github.com/jvras58/banco_bot.git",
    },
    {
        num: "5",
        category: "frontend project",
        title: "Gerenciamento de Chamados",
        description: "Projeto desenvolvido para estudar node.js com express onde foi desenvolvido um sistema de gerenciamento de chamados simples.",
        stack: [{name: "Javascript"}, {name: "express"}, {name: "prisma"}, {name: "mysql"}],
        image: "/assets/projetos/thumb3.png",
        live: "",
        github: "https://gitlab.cin.ufpe.br/jvras/cinmeajuda.git",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (Swiper) => {
        // obtem o índice atual do slide { #TODO:anteriormente antes do loop: Swiper.activeIndex}
        const currentIndex= Swiper.realIndex;

        // atualiza o estado do projeto com base no índice
        setProject(projects[currentIndex]);
    }
    return (
            <motion.section
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
            >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/* descrition */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                    return( 
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the last commo*/}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                
                                );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons*/}
                            <div className="flex items-center gap-4">
                                {/* live button */}
                                <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Projects</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    // TODO: loop infinito 
                    loop={true}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overloy */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                        src={project.image}
                                        fill 
                                        className="object-cover"
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <WorkSliderBtns 
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] sm:bottom-0 z-20 w-full justify-between sm:w-max sm:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
                        />
                    </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )

}
export default Work;