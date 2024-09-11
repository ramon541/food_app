# Food App

<hr>

## Sumário

- [Descrição](#descrição)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Intalação e execução](#instalação-e-execução)

<hr>

## Descrição

Food App é um aplicativo Mobile Full Stack.O aplicativo permite a interação entre o usuário e o servidor, realizando operações como autenticação de dois fatores por email, login e criação de uma nova conta.

<hr>

## Tecnologias utilizadas

### Frontend

- ![Expo](https://img.shields.io/badge/Expo-20232A?style=for-the-badge&logo=expo&logoColor=white)
- ![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Axios](https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logo=Axios&logoColor=5A29E4)
- ![Zustand](https://img.shields.io/badge/Zustand-20232A?style=for-the-badge&logo=Z&logoColor=61DAFB)

### Backend

- ![Nodejs](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js&logoColor=5FA04E)
- ![Express](https://img.shields.io/badge/express-20232A?style=for-the-badge&logo=express&logoColor=white)
- ![Bcrypt](https://img.shields.io/badge/Bcrypt-20232A?style=for-the-badge&logo=Bcrypt&logoColor=white)
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-20232A?style=for-the-badge&logo=Nodemailer&logoColor=white)

### Banco de Dados

- ![MySQL](https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=MySQL&logoColor=4479A1)

<hr>

## Instalação e execução

### Pré-requisitos

- NodeJs v20.14.0 ou superior
- MySQL

### Clonando o repositório

Clone o repositório:

```bash
git clone https://github.com/ramon541/food_app.git
```

Navegue até a pasta do aplicativo:

```bash
cd food_app/
```

### Rodando o Backend

Navegue até a pasta do backend:

```bash
cd backend/
```

Instale as dependências:

```bash
npm i
```

É necessário ter um arquivo `.env` na raiz do diretório `backend/`. Aqui está o modelo das variáveis:

```properties
PORT=
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB=
USER=
PASS=
```

Para rodar o projeto:

```bash
npm run dev
```

### Rodando o Frontend

Navegue até a pasta do frontend:

```bash
cd frontend/
```

Instale as dependências:

```bash
npm i
```

No arquivo `application/services/index.js` você deve alterar a linha 3 para o IPV4 da rede que você está.

Para rodar o projeto:

```bash
npm run start
```

Para rodar o projeto direto no Android:

```bash
npm run android
```
