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
git clone https://github.com/davidfaria/gympoint.git

# entrar na pasta do projeto
cd gympoint/backend

# instalar as dependências
yarn install

# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

# subir os serviços (postgres, redis, mongodb)
# Obs. foi utilizado docker para subir as bases (postgres, redis e mongodb)
docker-compose up -d

# criar estrutura do banco de dados Postgres
yarn sequelize db:migrate

# povoar o banco de dados
yarn sequelize db:seed:all

# iniciar o servidor da aplicação
yarn dev

# iniciar a fila de jobs  (outro terminal)
yarn queue

```

---

## :computer: Front-end

## Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16](https://nodejs.org/)
- Yarn [Yarn v1.13](https://yarnpkg.com/)
- Google Chrome Browser [Google](https://www.google.pt/intl/pt-PT/chrome/?brand=CHBD&gclid=CjwKCAiAxMLvBRBNEiwAKhr-nMvKg5nZhwHd__xLE-Mume31jYijN5WLG991vsf4owDGK4VNHWtrEhoCNRgQAvD_BwE&gclsrc=aw.ds)
- Back-end Gympoint

## Instruções

```bash

# entrar na pasta do projeto
cd gympoint/frontend

# instalando as dependências do package.json:
yarn install

# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

# iniciar a aplicação web
yarn start
```

## Teste utilizando o browser.

http://localhost:3000

```bash

# credenciais de acesso
user: admin@gympoint.com
password: 123456
```

---

## Demonstração

<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/gympoint-frontend/master/.github/web.gif">
</h1>

## :iphone: Mobile

## Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16](https://nodejs.org/)
- Yarn [Yarn v1.13](https://yarnpkg.com/)
- Emulador Android [emulador](https://developer.android.com/)
- React Native CLI [react-native-cli](https://github.com/react-native-community/cli)
- Back-end Gympoint

## Instruções

```bash

# entrar na pasta do projeto
cd gympoint/mobile

# instalando as dependências do package.json:
yarn install

# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

# ATENÇÃO: Habilitar as comunicação do emulador com (API, reactotron)
adb reverse tcp:4444 tcp:4444
adb reverse tcp:8081 tcp:8081
adb reverse tcp:9090 tcp:9090

# instalar App Mobile no emulador (ANDROID)
react-native run-android

# inicializar App Mobile
react-native start
```

## Login App Mobile

**_Você precisa criar um novo aluno no projeto Gympoint WEB para entrar com o ID do aluno_**

---

## Demonstração

<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/gympoint-mobile/master/.github/mobile.gif">
</h1>

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
