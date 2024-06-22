"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFastapi, SiFlask, SiPostgresql, SiMysql, SiPytest, SiSqlite, SiSqlalchemy } from "react-icons/si";


//Sobre mim
const about = {
    title: "Sobre mim",
    description: "Engenheiro de Software com 3 anos de experiência Back-end. Brasileiro, disponível para freelancing e voluntariado.",
    info: [
        { fieldName: "Nome", fieldValue: "Jonathas Vinicius" },
        { fieldName: "Telefone", fieldValue: "(+55) 81 9 8301-9618"},
        { fieldName: "Experiencia", fieldValue: "5 anos"},
        { fieldName: "Nacionalidade", fieldValue: "Brasileiro"},
        { fieldName: "Email", fieldValue: "jonathas.vinicius@ufpe.br"},
        { fieldName: "freelancer", fieldValue: "Disponível"},
        { fieldName: "Voluntario", fieldValue: "Hamper @SouJunior Labs"},
    ]
};

//Experiencia
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "Experiência",
    description: "Experiência profissional e acadêmica.",
    items: [
        {
            position: "Desenvolvedor Full Stack",
            company: "STI-LABS - UFPE",
            duration: "2021 - Atual",
            description: "Desenvolvimento de aplicações web."
        },
        {
            position: "Monitor de Engenharia de Software",
            company: "UFPE - CIN",
            duration: "2023 - Atual",
            description: "Ministrar aulas e auxiliar alunos na disciplina de Engenharia de Software."
        },
        {
            position: "Desenvolvedor Backend",
            company: "SouJunior Labs",
            duration: "2024 - Atual",
            description: "Desenvolvimento Back-end da API Hamper."
        },
        {
            position: "Pesquisador em Tecnologia",
            company: "ERER - UFPE",
            duration: "2021 - 2022",
            description: "Desenvolvimento de scripts, banco de dados e dashboard."
        },
    
    ]
};

//Educação
const education = {
    icon: '/assets/resume/cap.svg',
    title: "Educação",
    description: "Formação acadêmica.",
    items: [
        {
            institution: "Universidade Federal de Pernambuco",
            duration: "2019 - Atualmente",
            degree: "Graduação em Ciência Da Computação."
        },
    ]
};

//Habilidades
const skills = {
    title: "Habilidades",
    description: "Habilidades técnicas e ferramentas que utilizo.",
    skillList: [

        //back-end
        {
            Icon: <FaPython />,
            name: "Python",
        },
        {
            Icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            Icon: <SiFastapi />,
            name: "FastAPI",
        },
        {
            Icon: <SiFlask />,
            name: "Flask",
        },
        {
            Icon: <SiPostgresql />,
            name: "Postgresql",
        },
        {
            Icon: <SiMysql />,
            name: "Mysql",
        },
        {
            Icon: <SiSqlite />,
            name: "Sqlite",
        },
        {
            Icon: <SiSqlalchemy />,
            name: "Sqlalchemy",
        },

        // testing
        {
            Icon: <SiPytest />,
            name: "Pytest",
        },

        // front-end
        {
            Icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            Icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            Icon: <FaJs />,
            name: "JavaScript",
        },
        {
            Icon: <FaReact />,
            name: "React.js",
        },
        {
            Icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            Icon: <SiNextdotjs />,
            name: "Next.js",
        },

        // design
        {
            Icon: <FaFigma />,
            name: "Figma",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto">
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience"> Experiência </TabsTrigger>
                <TabsTrigger value="education"> Educação </TabsTrigger>
                <TabsTrigger value="skills"> Habilidades </TabsTrigger>
                <TabsTrigger value="about"> Sobre mim </TabsTrigger>
            </TabsList>
        
        {/* content */}
        <div className="min-h-[70vh] w-full">
        {/* experiencia */}
        <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                        return ( 
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                                {/* dot */}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                            </div>
                        </li>
                        );
                    })}
                    </ul>
                </ScrollArea>
            </div>
        </TabsContent>
        {/* educação */}
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                        return ( 
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                                {/* dot */}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.institution}</p>
                            </div>
                        </li>
                        );
                    })}
                    </ul>
                </ScrollArea>
            </div>
        </TabsContent>
        {/* habilidades */}
        <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                        return ( 
                            <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                            {skill.Icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </TabsContent>
        {/* sobre mim TODO: AJUSTAR VISUALIZAÇÃO */}
        <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] tex-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((info, index) => {
                        return (
                            <li key={index} className="flex items-center justify-center xl:justify-start gap-1">
                                <span className="text-white/60">{info.fieldName}:</span>
                                <span className="text-accent whitespace-nowrap">{info.fieldValue}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </TabsContent>
        </div>
        </Tabs>
        </div>
        </motion.div>
    );
}
export default Resume;