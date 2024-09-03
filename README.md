Bem-vindo à documentação do CRUD de Produtos da Nunes Sports!

Esta aplicação foi desenvolvida utilizando Node.js, React e o framework Express, permitindo listar, adicionar, editar e deletar produtos.

**Configuração Inicial**

Antes de iniciar a aplicação é necessário criar um banco de dados PostgresSQL e uma tabela de Produtos usando os seguintes comandos:

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

Após criar o banco de dados e a tabela, crie um arquivo .env com as seguintes variáveis inserindo os valores corretos para a conexão com o banco de dados local:

```javascript
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

Em seguida instale as dependencias:

```javascript
npm install
```

Inicie o servidor utilizando o seguinte comando:

```javascript
npm run dev
```

Logo após, abra um novo terminal e inicie a aplicação utilizando o comando:

```javascript
npm start
```

**Recursos**

1. Listar Produtos

Endpoint

```javascript
GET '/'
```

Descrição
Esta rota permite listar todos os produtos cadastrados.

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
