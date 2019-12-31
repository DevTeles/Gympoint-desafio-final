<h3 align="center">
    Mobile React Native - GoStack Bootcamp  <a href="https://rocketseat.com.br" target="__blank">Rocketseat</a>
</h3>


## :android: Mobile

## Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16.3](https://nodejs.org/)
- Yarn [Yarn v1.19.1](https://yarnpkg.com/)
- Emulador Android [emulador](https://www.genymotion.com/)
- React Native CLI [react-native-cli](https://github.com/react-native-community/cli)
- Backend do Gympoint rodando.

## Instruções

```bash
# download / Clone o repositório:

git clone https://github.com/DevTeles/Desafio_Final_Gostack09.git

# entrar na pasta do projeto
cd mobile

# instalando as dependências do package.json:
yarn install

# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

# Habilitar a comunicação do emulador com (API, reactotron)
adb reverse tcp:9090 tcp:9090

# inicializar App Mobile
react-native start

# instalar App Mobile no emulador (ANDROID)
yarn react-native run-android

```

## Login App Mobile

**_Você precisa criar um novo aluno no projeto Gympoint WEB para entrar com o ID do aluno_**

---

## Demonstração

[Mobile](https://github.com/DevTeles/Gympoint-desafio-final/blob/master/mobile/src/assets/mobile.gif)
