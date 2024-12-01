create database gymimpact;

use gymimpact;

create table Usuario(
id_usuario int primary key auto_increment,
nome varchar(100),
email varchar (100),
senha varchar(100)
);

create table quiz(
idQuiz int primary key auto_increment,
resultado varchar(100),
horaResultado DATETIME DEFAULT CURRENT_TIMESTAMP,
fkUsuario int,
foreign key(fkUsuario) references Usuario(id_usuario)
);


create table supinoGame (
    idGame int primary key auto_increment,
    horaResultado DATETIME DEFAULT CURRENT_TIMESTAMP,
    intervalo1 int,
    intervalo2 int,
    intervalo3 int,
    intervalo4 int,
    intervalo5 int,
    intervalo6 int,
    intervalo7 int,
    intervalo8 int,
    intervalo9 int,
    intervalo10 int,
    cliques int,
    segundo1 int,
    segundo2 int,
    segundo3 int,
    segundo4 int,
    segundo5 int,
    segundo6 int,
    segundo7 int,
    segundo8 int,
    segundo9 int,
    segundo10 int,
    fkUsuario int,
    foreign key(fkUsuario) references Usuario(id_usuario)
);


select count(resultado) as resultadoA from quiz where resultado like 'A';

 select 
            (select count(resultado) from quiz where resultado like 'A') as resultadoA,
            (select count(resultado) from quiz where resultado like 'B') as resultadoB,
            (select count(resultado) from quiz where resultado like 'C') as resultadoC,
            (select count(resultado) from quiz where resultado like 'D') as resultadoD;
	
    
select nome as totalCliquesTop1 from usuario join supinoGame o
	on fkUsuario = id_usuario where cliques = (select cliques
from supinoGame
order by cliques desc
limit 1 offset 1) ;

select * from supinoGame;


SELECT nome AS totalCliquesTop1
FROM usuario
JOIN supinoGame ON fkUsuario = id_usuario
GROUP BY nome
ORDER BY MAX(cliques)
LIMIT 1;

select max(cliques) from supinoGame;

select cliques
from supinoGame
order by cliques desc
limit 1 offset 1;

select cliques
from supinoGame
order by cliques desc
limit 1 offset 2;

select cliques from supinoGame;

    select nome as totalCliquesTop1
            from usuario join supinoGame on fkUsuario = idUsuario
            group by nome order by max(cliques) limit 1 offset 1;
		
	
	select truncate(avg(cliques) / 10, 2) as mediaCliquesTop1 from supinoGame
	where cliques = (select cliques from supinoGame order by cliques desc limit 1 offset 1);	
	
    select max(cliques) from supinoGame limit 1 offset 1;
    
select greatest(segundo1, segundo2, segundo3, segundo4, segundo5, segundo6, segundo7, segundo8, segundo9, segundo10) as maiorpico
from supinogame order by idGame desc limit 1;

    
select max(greatest(segundo1, segundo2, segundo3, segundo4, segundo5, segundo6, segundo7, segundo8, segundo9, segundo10)) as maior_valor
from supinoGame;

select * from supinoGame;

select cliques as totalCliques from supinoGame order by idGame desc limit 1;

select truncate(cliques / 10, 2) as mediaCliques from supinoGame order by idGame desc limit 1; 

     SELECT 
    intervalo10 AS S10,
    intervalo9 AS S9,
    intervalo8 AS S8,
    intervalo7 AS S7,
    intervalo6 AS S6,
    intervalo5 AS S5,
    intervalo4 AS S4,
    intervalo3 AS S3,
    intervalo2 AS S2,
    intervalo1 AS S1
    FROM supinoGame order by idGame desc limit 1;
    
    
select * from quiz;
show tables;
   select count(resultado) as maiorResultado from quiz limit 1;

truncate table usuario;
truncate table quiz;
select * from usuario;


     select case when resultado like 'A' then 'Abacaxi'
        when resultado like 'B' then 'Batata'
        when resultado like 'C' then 'Cenoura' 
        when resultado like 'D' then 'Damasco'
        else 'none'
        end as resultado, count(resultado) as qtdResult 
        from quiz group by resultado order by qtdResult desc limit 1;

select resultado from quiz order by idQuiz desc limit 1;
  select resultado as ultimoResultado from quiz order by idQuiz desc limit 1;

  select case when resultado like 'A' then 'Abacaxi'
        when resultado like 'B' then 'Batata'
        when resultado like 'C' then 'Cenoura' 
        when resultado like 'D' then 'Damasco'
        else 'Sem resultado'
        end as resultadoGrafico, count(resultado) as Quantidade
        from quiz 
        group by resultado;
use soultune;

    select case when resultado like 'A' then 'A'
        when resultado like 'B' then 'B'
        when resultado like 'C' then 'C' 
        when resultado like 'D' then 'D'
        else 'Sem resultado'
        end as resultados, count(resultado) as Quantidade
        from quiz 
        group by resultado;
