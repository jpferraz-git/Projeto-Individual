create database gymimpact;

use gymimpact;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(100),
email varchar (100),
senha varchar(100)
);

create table quiz(
idQuiz int primary key auto_increment,
resultado varchar(100)
);

use gymimpact;
select * from quiz;
show tables;

truncate table usuario;

select * from usuario;





