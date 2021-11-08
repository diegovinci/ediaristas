![Cover](https://github.com/diegovinci/ediaristas/blob/main/.assets/project-cover.svg)

![Languages](https://img.shields.io/github/languages/count/diegovinci/ediaristas?color=%236B2AEE)
![Top Language](https://img.shields.io/github/languages/top/diegovinci/ediaristas?color=%236B2AEE)
![Repository Size](https://img.shields.io/github/repo-size/diegovinci/ediaristas?color=%236B2AEE)
![Made By](https://img.shields.io/badge/made%20by-diegovinci-%236B2AEE)
![License](https://img.shields.io/badge/license-MIT-%236B2AEE)


## Sobre

E-Diaristas é um projeto fictício que tem por objetivo facilitar a localização de profissionais que atuam no segmento de limpeza doméstica. O projeto possui um sistema administrativo para controle do cadastro de diaristas, bem como uma API web para a exposição dos dados que são consumidos por uma aplicação web front-end e por um aplicativo móvel.

### Tecnologias
Principais tecnologias utilizadas na construção do projeto:
- Front-end
    - [ReactJS](https://reactjs.org)
    - [Next.js](https://nextjs.org)
    - [TypeScript](https://www.typescriptlang.org)
- Back-end (Java)
    - [Java](https://www.oracle.com/java/technologies/downloads/#java17)
    - [Spring Boot](https://spring.io/projects/spring-boot)
    - [MySQL](https://dev.mysql.com)
- Back-end (Python)
    - [Python](https://www.python.org/about/)
    - [Django](https://www.djangoproject.com)
    - [SQLite](https://www.sqlite.org/index.html)
- Mobile
    - [React Native](https://reactnative.dev)
    - [Expo](https://expo.dev)
    - [TypeScript](https://www.typescriptlang.org)

## Começando
As instruções a seguir pretendem ser um guia de início rápido para executar as aplicações na sua máquina local.

### Pré-requisitos
- Front-end
    - [Node.js >=14](https://nodejs.org/en/)
    - [NPM >=8](https://www.npmjs.com)
- Back-end (Java)
    - [Java >=17](https://www.oracle.com/java/technologies/downloads/#java17)
    - [Maven >=3](https://dev.mysql.com)
    - [Docker >=20](https://www.docker.com)
- Back-end (Python)
    - [Python >=3](https://www.python.org/about/)
    - [PIP >=21](https://pypi.org/project/pip/)
- Mobile
    - [Node.js >=14](https://nodejs.org/en/)
    - [NPM >=8](https://www.npmjs.com)
    - [Expo >=4](https://expo.dev)

### Instruções

Siga as etapas abaixo para configurar e executar o projeto localmente.

#### 1. Clonar o repositório
```bash
git clone https://github.com/diegovinci/ediaristas.git
```

#### 2. Executar o servidor back-end
O back-end da aplicação possui duas versões alternativas com as mesmas funcionalidades, porém desenvovidas com diferentes tecnologias. Para executar uma das duas opções, siga os passos abaixo.

**Opção A - Back-end Java**

```bash
# Acessar diretório da aplicação
$ cd backend/java-ediaristas

# Iniciar banco de dados
$ docker run -p 3306:3306 --name mysql8 -e MYSQL_ROOT_PASSWORD=root -d mysql:8 mysqld --default-authentication-plugin=mysql_native_password

# Migrar banco de dados
$ mvn -Dflyway.configFiles=src/main/resources/flyway.properties flyway:migrate

# Iniciar o servidor
$ mvn clean spring-boot:run
```

**Opção B - Back-end Python**

```bash
# Acessar diretório da aplicação
$ cd backend/python-ediaristas/ediaristas

# Instalar as dependências
$ pip install -r requirements.txt

# Migrar banco de dados
$ python manage.py migrate

# Iniciar o servidor
$ python manage.py runserver 8080
```

#### 3. Executar a aplicação front-end
```bash
# Acessar diretório da aplicação
$ cd frontend

# Instalar as dependências
$ yarn

# Iniciar a aplicação
$ yarn dev
```

#### 4. Executar o aplicativo móvel
```bash
# Acessar diretório do aplicativo
$ cd mobile/rn-ediaristas

# Instalar as dependências
$ yarn

# Iniciar o aplicativo
$ expo start
```

## Licença
Este projeto está disponível sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/diegovinci/ediaristas/blob/main/LICENSE) para mais detalhes.

Made by Diego Vinciguerra :wave: [Get in touch!](https://www.linkedin.com/in/diegovinci)
