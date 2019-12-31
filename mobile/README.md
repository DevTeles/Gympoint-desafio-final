<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/gympoint-mobile/master/.github/logo.png">
</h1>
<h3 align="center">
Mobile React Native - GoStack Bootcamp  <a href="https://rocketseat.com.br" target="__blank">Rocketseat</a>
</h3>

<p align = "center">
<img alt = "Última confirmação do Github" src="https://img.shields.io/github/last-commit/davidfaria/gympoint-mobile">
<img alt = "Idioma principal do GitHub" src="https://img.shields.io/github/languages/top/davidfaria/gympoint-mobile">
<img alt = "GitHub" src = "https://img.shields.io/github/license/davidfaria/gympoint-mobile.svg">
</p>

## :iphone: Mobile

## Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16](https://nodejs.org/)
- Yarn [Yarn v1.13](https://yarnpkg.com/)
- Emulador Android [emulador](https://developer.android.com/)
- React Native CLI [react-native-cli](https://github.com/react-native-community/cli)
- Back-end Gympoint [Back-end-gympoint](https://github.com/davidfaria/gympoint-backend)

## Instruções

```bash
# download / Clone o repositório:

git clone https://github.com/davidfaria/gympoint-mobile.git

# entrar na pasta do projeto
cd gympoint-mobile

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

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Demonstração

<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/gympoint-mobile/master/.github/mobile.gif">
</h1>
