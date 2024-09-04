# Bem-vindo à documentação do CRUD de Produtos da Nunes Sports!

Esta aplicação foi desenvolvida utilizando Node.js, React e o banco de dados PostgresSQL, permitindo listar, adicionar, editar e deletar produtos.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Rotas da API](#rotas-da-api)
- [Funcionalidades](#funcionalidades)
- [Scripts](#scripts)

---

## Visão Geral

Esta aplicação consiste em um CRUD simples para gerenciar produtos, onde o usuário pode criar, ler, atualizar e deletar produtos. A aplicação é composta por um **backend** em Node.js que se comunica com um banco de dados PostgreSQL e um **frontend** feito em React.

---

## Tecnologias Utilizadas

- **Node.js**: Utilizado para o servidor backend e manipulação das operações CRUD.
- **Express.js**: Framework para criar o servidor HTTP e gerenciar as rotas da API.
- **React**: Framework de frontend para a interface do usuário.
- **PostgreSQL**: Banco de dados relacional para armazenar os produtos.
- **Axios**: Biblioteca usada para fazer requisições HTTP do frontend para o backend.

---

## Instalação e Configuração

### Pré-requisitos

- **Node.js** e **npm** ou **yarn**
- **PostgreSQL** instalado e rodando

### Passos de Instalação

1. Clone o repositório:

   ```bash
   git clone git@github.com:eduardo-felix/NunesSports.git
   cd NunesSports

   ```

2. Instale as dependências no diretório Api e frontend:

```javascript
   # No backend
   cd Api
   npm install

   # No frontend
   cd ../frontend
   npm install
```

3. Configure o banco de dados PostgreSQL:

   Crie um banco de dados PostgresSQL e uma tabela de Produtos usando os seguintes comandos:

```javascript
   create database nuneSport;

    create table Produtos (
	id serial primary key,
  	nome text not null,
  	descricao text not null unique,
  	preco numeric not null,
	codigo varchar(15) not null unique
);
```

Crie um arquivo .env na pasta Api com a configuração do banco de dados:

```bash
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nuneSport
   DB_PORT=5432

```

4. Inicie o servidor backend:

```bash
   cd api
   npm run dev
```

5. Inicie a aplicação frontend:

```bash
   cd ../frontend
   npm start
```

A aplicação estará rodando em:

Frontend: http://localhost:3000
Backend: http://localhost:8800

---

### Estrutura de Pastas

```bash
   .
├── Api
│   ├── controllers       # Funções para lidar com a lógica da API│
│   ├── routes            # Definição das rotas da API
│   ├── server.js         # Arquivo principal do servidor Node.js
│   └── ...
├── frontend
│   ├── public            # Arquivo html
│   ├── src
│   │   ├── components    # Componentes React
│   │   ├── styles        # Arquivo de estilização global
│   │   ├── App.js        # Arquivo principal do React
│   │   └── ...
└── README.md
```

---

### Rotas da API

1. Listar Produtos

Endpoint

```javascript
GET '/'
```

Descrição
Esta rota retorna todos os produtos cadastrados.

Parâmetros
Nenhum.

Resposta de Sucesso

Código: 200

Conteúdo:

```javascript
[
  {
    "id": 1,
    "nome": "Produto 1",
    "descricao": "Descrição do Produto 1",
    "preco": 19.99,
    "codigo": 909090
  },
  {
    "id": 2,
    "nome": "Produto 2",
    "descricao": "Descrição do Produto 2",
    "preco": 29.99
    "codigo": 5050
  },
  ...
]
```

2. Adicionar Produto

Endpoint

```javascript
POST / produtos;
```

Descrição

Esta rota permite adicionar um novo produto.

Parâmetros
Corpo da Requisição:

```javascript
{
  "nome": "Novo Produto",
  "descricao": "Descrição do Novo Produto",
  "preco": 39.99,
  "codigo": 7778888
}
```

Resposta de Sucesso

Código: 200

Conteúdo:

```javascript
{
  "id": 3,
  "nome": "Novo Produto",
  "descricao": "Descrição do Novo Produto",
  "preco": 39.99,
  "codigo": 7778888
}
```

3. Editar Produto

Endpoint

```javascript
PUT /:id
```

Descrição
Esta rota permite editar um produto existente com base no ID fornecido.

Corpo da Requisição:

```javascript
{
  "nome": "Produto Atualizado",
  "descricao": "Descrição Atualizada",
  "preco": 49.99,
  "codigo": 445511
}
```

Resposta de Sucesso

Código: 200

Conteúdo:

```javascript
{
  "id": 3,
  "nome": "Produto Atualizado",
  "descricao": "Descrição Atualizada",
  "preco": 49.99,
  "codigo": 445511
}
```

4. Deletar Produto

Endpoint

```javascript
DELETE /:id
```

Descrição

Esta rota permite deletar um produto existente com base no ID fornecido.

Resposta de Sucesso

Código: 204

Conteúdo: Nenhum conteúdo retornado.

---

## Funcionalidades

- **Listar Produtos**: Exibe todos os produtos cadastrados.
- **Adicionar Produto**: Cria um novo produto com nome, descrição, preço e código.
- **Editar Produto**: Atualiza um produto existente.
- **Deletar Produto**: Remove um produto da base de dados.

---

## Scripts

### Backend

- `npm run dev`: Inicia o servidor backend com `nodemon` para auto-reload.

### Frontend

- `npm start`: Inicia o servidor frontend.

---
