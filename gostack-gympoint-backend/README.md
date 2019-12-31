<h3 align="center">
App Gympoint - projeto Gostack Bootcamp 09 <a href="https://rocketseat.com.br" target="__blank">Rocketseat</a>
</h3>

## :gear: Back-end (Node.js)

## Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16.3](https://nodejs.org/)
- Yarn [Yarn v1.19.1](https://yarnpkg.com/)
- Postgres [PostgreSQL](https://www.postgresql.org/)
- Redis [Redis](https://redis.io/)
- MongoDB [MongoDB](https://www.mongodb.com/)
- Docker [Docker](https://www.docker.com/)
- Docker Compose [Docker Compose](https://docs.docker.com/compose/)

## Instruções

```bash
# clonar o repositório
git clone https://github.com/DevTeles/Desafio_Final_Gostack09.git

# entrar na pasta do projeto
cd gostack-gympoint-backend

# instalar as dependências
yarn install

# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

# subir os serviços (postgres, redis)
sudo docker start postgres
sudo docker start redisgympoint

# criar estrutura do banco de dados Postgres
yarn sequelize db:migrate

# povoar o banco de dados
yarn sequelize db:seed:all

# iniciar o servidor da aplicação
yarn dev

# iniciar a fila de jobs  (outro terminal)
yarn queue

```
