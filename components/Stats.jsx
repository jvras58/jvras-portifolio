"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchUserRepos, getTotalCommits } from "@/lib/github";

const Stats = () => {
    const [stats, setStats] = useState([
        { num: 3, text: "Anos de experiência" },
        { num: 10, text: "Projetos concluídos" },
        { num: 11, text: "Tecnologias" },
        // O número de commits será atualizado depois de carregar os dados
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // TODO: colocar o nome de usuario para buscar pelo env
                const username = "jvras58";
                const cacheKey = `github-commits-${username}`;
                // Para evitar sobrecarga nas requisições da Api do GitHub, vamos armazenar os dados em cache
                // TODO: Ainda esta sobrecarregando as requisições na api do github
                const cachedData = localStorage.getItem(cacheKey);
                const currentTime = new Date().getTime();
                const expiryTime = 24 * 60 * 60 * 1000;

                if (cachedData) {
                    const { totalCommits, timestamp } = JSON.parse(cachedData);
                    if (currentTime - timestamp < expiryTime) {
                        setStats(prevStats => [...prevStats, { num: totalCommits, text: "Code Commits" }]);
                        return;
                    }
                }

                const repos = await fetchUserRepos(username);
                console.log('Repositorios buscados:', repos);

                if (Array.isArray(repos)) {
                    const totalCommits = await getTotalCommits(username, repos);
                    localStorage.setItem(cacheKey, JSON.stringify({ totalCommits, timestamp: currentTime }));
                    setStats(prevStats => [...prevStats, { num: totalCommits, text: "Code Commits" }]);
                } else {
                    console.error('Repositorio não é um array:', repos);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                        >
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p
                                className={`${item.text.length < 15 ? "max-w-[100px]": "max-w-[150px]"} leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;