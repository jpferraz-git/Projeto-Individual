create database gymimpact;

use gymimpact;

create table usuario(
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
foreign key(fkUsuario) references usuario(id_usuario)
);


create table supinoGame (
    idGame int primary key auto_increment,
    horaResultado datetime default current_timestamp,
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
    foreign key(fkUsuario) references usuario(id_usuario)
);


create table relatos(
idRelato int auto_increment,
horaRelato datetime default current_timestamp,
relato text,
primary key(idRelato, fkUsuario),
fkUsuario int,
foreign key (fkUsuario) references usuario(id_usuario)
);


use gymimpact;

insert into relatos (relato, fkUsuario) values
('amo sptech', 1);

select nome, relato from relatos
join usuario on fkUsuario = id_usuario;

-- nome na grafico da leaderboard
select nome from Usuario join supinoGame on fkUsuario = id_usuario
                        where cliques = (select max(cliques) from supinoGame);
                        
			select nome as nomeUsuario
            from usuario join supinoGame on fkUsuario = id_usuario
			where id_usuario = 3
            group by nome order by max(cliques)
            desc;
            
use gymimpact;

(select max(cliques) from supinoGame);

  SELECT MAX(cliques) FROM supinoGame WHERE fkUsuario = 2;


    SELECT
    CASE
        -- Retorna o maior clique geral se não for do usuário específico
        WHEN fkUsuario is null THEN (SELECT MAX(cliques) FROM supinoGame)
        
        -- Caso contrário, retorna o maior clique do usuário específico
        ELSE (SELECT MAX(cliques) FROM supinoGame WHERE fkUsuario = 5)
    END AS maior_clique
FROM supinoGame
WHERE fkUsuario = 2
UNION ALL
SELECT
    (SELECT MAX(cliques) FROM supinoGame)
AS maior_clique
FROM DUAL limit 2;

use gymimpact;

    SELECT
    CASE
        WHEN fkUsuario is null THEN (SELECT MAX(cliques) FROM supinoGame)
        WHEN fkUsuario is null THEN (SELECT MAX(cliques) FROM supinoGame limit 1 offset 1)
        WHEN fkUsuario is null THEN (SELECT MAX(cliques) FROM supinoGame limit 1 offset 2)
        ELSE (SELECT MAX(cliques) FROM supinoGame WHERE fkUsuario = 5)
    END AS maior_clique
FROM supinoGame
WHERE fkUsuario = 5
UNION ALL
SELECT
    (SELECT MAX(cliques) FROM supinoGame)
AS maior_clique
FROM DUAL limit 2;

use gymimpact;
select * from quiz;

  select case when resultado like 'A' then 'Disciplinado'
        when resultado like 'B' then 'Esforçado'
        when resultado like 'C' then 'Comprometido' 
        when resultado like 'D' then 'Aprendiz'
        else 'none'
        end as maiorResultado 
        from quiz order by maiorResultadodesc limit 1;

        
(select resultado as ultimoResultado from quiz order by resultado desc limit 1)
;



 SELECT
    CASE 
        WHEN MAX(cliques)  THEN 'usuario_atual_maior_clique'
        WHEN (SELECT MAX(cliques) FROM supinoGame WHERE fkUsuario = 3) >= (SELECT MAX(cliques) FROM supinoGame) THEN 'maior_cliques'
        ELSE 'semresultado'
    END AS resultado from supinoGame group by cliques limit 1;
    
    (SELECT MAX(cliques) as maior_clique FROM supinoGame WHERE fkUsuario = 2) 
UNION ALL
SELECT
    (SELECT MAX(cliques) FROM supinoGame)
AS maior_clique
limit 2;

select max(cliques) from supinoGame;

select * from usuario;

   SELECT
    (SELECT MAX(cliques) FROM supinoGame) AS maior_clique,
    (SELECT MAX(cliques) FROM supinoGame WHERE fkUsuario = 4) AS usuario_atual_maior_clique
		from supinoGame limit 1;

 select nome as nomeTop1 from supinoGame join usuario on id_usuario = fkUsuario
 where cliques = (select max(cliques) from supinoGame);
 
select count(resultado) as resultadoA from quiz where resultado like 'A';

						select case 
						when (select max(cliques) from supinoGame) then 'maior'
						
                        when (select nome from Usuario join supinoGame on fkUsuario = id_usuario
                        where cliques = (select max(cliques) from supinoGame)) then 'maiorUsuario'
                        
                        when (select nome as nomeTop1 from supinoGame join usuario on id_usuario = fkUsuario
						where cliques = (select max(cliques) from supinoGame)) then 'cliquesUsuarioAtual'
						
                        when (select nome as nomeUsuario
						from usuario join supinoGame on fkUsuario = id_usuario
						where id_usuario = 3
						group by nome order by max(cliques) desc) then 'nomeUsuarioAtual'
		
                        else 'semresultado'
                        end as resultado
                        from supinoGame join usuario on fkUsuario = id_usuario;
                        
                        
                        select nome as nomeUsuario
						from usuario join supinoGame on fkUsuario = id_usuario
						where id_usuario = 2
						group by nome order by max(cliques) desc;


-- Subconsulta para o maior número de cliques
WITH MaxCliques AS (
    SELECT MAX(cliques) AS max_cliques FROM supinoGame
),
UsuarioMaiorClique AS (
    SELECT nome AS maiorUsuario 
    FROM Usuario 
    JOIN supinoGame ON fkUsuario = id_usuario
    WHERE cliques = (SELECT max_cliques FROM MaxCliques)
),
UsuarioAtual AS (
    SELECT nome AS nomeUsuarioAtual
    FROM Usuario 
    WHERE id_usuario = 2
),
UsuarioAtualMaiorClique as (
	select max(cliques) as cliquesUsuarioAtual from supinoGame
    where fkUsuario = 3
)
SELECT
    (SELECT max_cliques FROM MaxCliques) AS maior_clique,
    (SELECT maiorUsuario FROM UsuarioMaiorClique) AS usuario_com_maior_clique,
    (SELECT nomeUsuarioAtual FROM UsuarioAtual) AS nome_usuario_atual,
    (select cliquesUsuarioAtual from UsuarioAtualMaiorCLique) as usuario_atual_maior_clique,
    CASE 
        WHEN (SELECT max_cliques FROM MaxCliques) THEN 'maior'
        WHEN (SELECT maiorUsuario FROM UsuarioMaiorClique) THEN 'maiorUsuario'
        WHEN (SELECT nomeUsuarioAtual FROM UsuarioAtual) THEN 'nomeUsuarioAtual'
        when (select cliquesUsuarioAtual from UsuarioAtualMaiorClique) then 'cliquesUsuarioAtual'
        ELSE 'semresultado'
    END AS resultado
FROM DUAL;

SELECT
    (SELECT MAX(cliques) FROM supinoGame) AS maior_clique,
    (SELECT MAX(cliques) FROM supinoGame WHERE fkUsuario = 4) AS usuario_atual_maior_clique
		from supinoGame limit 1;


  select case when resultado like 'A' then 'A'
        when resultado like 'B' then 'B'
        when resultado like 'C' then 'C' 
        when resultado like 'D' then 'D'
        else 'Sem resultado'
        end as resultados, count(resultado) as Quantidade
        from quiz 
        group by resultado;

 select 
            (select count(resultado) from quiz where resultado like 'A') as resultadoA,
            (select count(resultado) from quiz where resultado like 'B') as resultadoB,
            (select count(resultado) from quiz where resultado like 'C') as resultadoC,
            (select count(resultado) from quiz where resultado like 'D') as resultadoD;
	
select cliques from supinoGame join Usuario on fkUsuario = id_usuario;
    
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
            from usuario join supinoGame on fkUsuario = id_usuario
            group by nome order by max(cliques) desc limit 1 offset 1;
		
	
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
