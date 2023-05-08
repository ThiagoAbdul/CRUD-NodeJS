create database db_api_carro;

use db_api_carro;

create table carro(
  id_carro int unsigned primary key auto_increment,
  marca varchar(30) not null,
  modelo varchar(30) not null,
  placa char(7) not null
) engine = innodb;