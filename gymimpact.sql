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
