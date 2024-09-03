create database nuneSport;

create table Produtos (
	id serial primary key,
  	nome text not null,
  	descricao text not null unique,
  	preco numeric not null,
	codigo varchar(15) not null unique
);
