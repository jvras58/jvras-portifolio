import { Octokit } from "@octokit/core";
require('dotenv').config();

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
        // console.log(`Commits para ${repoName}:`, response);

        return response.data.length;
    } catch (error) {
        console.error(`Erro ao buscar commits para repositório ${repoName}:`, error);
        throw error;
    }
};

//FIXME: procurar um jeito de não sobrecarregar as requisições na api do github
export const getTotalCommits = async (username, repos) => {
    try {
        const commitCounts = await Promise.all(repos.map(async (repo) => {
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
