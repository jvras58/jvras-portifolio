import { Octokit } from "@octokit/core";
import NodeCache from "node-cache";
require('dotenv').config();

const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const fetchUserData = async (username) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        const response = await octokit.request('GET /users/{username}', {
            username: username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("User data response:", response);

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        throw error;
    }
};

export const fetchUserRepos = async (username) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        const response = await octokit.request('GET /users/{username}/repos', {
            username: username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        // console.log("Resposta do repositório do usuário:", response);

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar repositórios de usuários:', error);
        throw error;
    }
};

export const fetchRepoCommits = async (username, repoName) => {
    const cacheKey = `commits-${username}-${repoName}`;
    const cachedData = myCache.get(cacheKey);

    if (cachedData) {
        return cachedData;
    } else {
        try {
            const octokit = new Octokit({
                auth: process.env.GITHUB_TOKEN
            });

            const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: username,
                repo: repoName,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            myCache.set(cacheKey, response.data.length);
            return response.data.length;
        } catch (error) {
            console.error(`Erro ao buscar commits para repositório ${repoName}:`, error);
            throw error;
        }
    }
};

export const getTotalCommits = async (username, repos) => {
    try {
        const commitCounts = await Promise.all(repos.map(async (repo) => {
            // Implementação de um simples delay entre as requisições
            await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundo entre as requisições
            const commitCount = await fetchRepoCommits(username, repo.name);
            return commitCount;
        }));

        const totalCommits = commitCounts.reduce((total, count) => total + count, 0);
        return totalCommits;
    } catch (error) {
        console.error('Erro ao calcular o total de commits:', error);
        throw error;
    }
};