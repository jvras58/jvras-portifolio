# Portfólio Pessoal com Next.js e Shadcn/UI

Este é um projeto de portfólio pessoal desenvolvido usando o framework [Next.js](https://nextjs.org/), uma extensão do React, e [Shadcn/UI](https://shadcn.github.io/ui/) para os componentes da interface do usuário. Além disso, o projeto inclui um mini servidor para gerenciar a parte de contatos, permitindo uma interação direta com os visitantes do portfólio.

## Começando

Para iniciar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1. Clone o repositório do projeto para sua máquina local.
2. Instale as dependências do projeto utilizando o comando `npm install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.

Após iniciar o servidor, abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado. Você pode começar a editar as páginas modificando os arquivos dentro de `pages/`. O site é atualizado automaticamente conforme você edita os arquivos.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para produção que oferece várias funcionalidades como renderização do lado do servidor e geração de sites estáticos.
- **Shadcn/UI**: Uma biblioteca de componentes React que facilita a construção de interfaces de usuário elegantes e responsivas.

## Ações do Servidor

Este projeto inclui um mini servidor para gerenciar a parte de contatos, permitindo uma interação direta com os visitantes do portfólio. As ações do servidor são implementadas usando [server-actions].

### Configurando o Prisma

O [Prisma](https://www.prisma.io/) é utilizado neste projeto como ORM para facilitar o acesso e a gestão da base de dados. Para configurar o Prisma e iniciar sua base de dados, siga os passos abaixo:

1. Instale o Prisma CLI globalmente em sua máquina com `npm install -g prisma`.
2. Navegue até a raiz do seu projeto e execute `prisma init` para criar os arquivos de configuração necessários.
3. Configure o arquivo `.env` na raiz do seu projeto para incluir a string de conexão com sua base de dados. Por exemplo: `DATABASE_URL="sua_string_de_conexao"`.
3. Em dev estamos usando o sqlite3
4. Execute `prisma migrate dev` para criar as tabelas em sua base de dados conforme definido no arquivo de migração do Prisma.

### Iniciando o Servidor de Desenvolvimento

Com o Prisma configurado, você pode iniciar o servidor de desenvolvimento do Next.js e as ações do servidor estarão prontas para uso:

```bash
npm run dev
```

## Aprendendo Mais

Para aprender mais sobre as tecnologias utilizadas, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Saiba mais sobre os recursos e a API do Next.js.
- [Shadcn/UI Documentation](https://shadcn.github.io/ui/docs) - Explore a documentação dos componentes disponíveis na biblioteca Shadcn/UI.

## Contribuições

Contribuições para o projeto são sempre bem-vindas. Se você tem alguma ideia para melhorar o portfólio ou encontrou um bug, sinta-se à vontade para criar uma issue ou enviar um pull request.

## Deploy

Para fazer o deploy do seu portfólio, você pode utilizar plataformas como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/), que oferecem integração direta com projetos Next.js.

---

Boa sorte com seu portfólio pessoal, e espero que você encontre este projeto útil para dar início à sua presença online!