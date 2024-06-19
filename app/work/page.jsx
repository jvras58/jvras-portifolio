"use client";

import {motion} from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects= [
    {
        num: "1",
        category: "frontend",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: [{name: "Lorem"}, {name: "ipsum dolor"}, {name: "sit amet"}],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "2",
        category: "backend",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: [{name: "Lorem2"}, {name: "ipsum dolor2"}, {name: "sit amet2"}],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (Swiper) => {
        // obtem o índice atual do slide
        const currentIndex= Swiper.activeIndex;

        // atualiza o estado do projeto com base no índice
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        text
                    </div>
                    <div className="w-full xl:w-[50%]">slide</div>
                </div>
            </div>
        </motion.section>
    )

}
export default Work;