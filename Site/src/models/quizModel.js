
var database = require("../database/config");

function cadastrar(resultado, valorFinal, id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", resultado, valorFinal);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (resultado, fkUsuario) VALUES ('${valorFinal}', ${id_usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function primeiraKPI() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
      
          select case when resultado like 'Disciplinado' then 'Disciplinado'
        when resultado like 'Esforçado' then 'Esforçado'
        when resultado like 'Comprometido' then 'Comprometido' 
        when resultado like 'Aprendiz' then 'Aprendiz'
        else 'none'
        end as maiorResultado, count(resultado) as qtdResult 
        from quiz group by maiorResultado order by qtdResult desc limit 1;
    `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function segundaKPI() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    select resultado as ultimoResultado from quiz order by idQuiz desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function terceiraKPI() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
    select count(resultado) as result from quiz limit 1;

    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function gerarGrafico(){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function gerarGrafico():");

    var instrucaoSql = `
     select case when resultado like 'Disciplinado' then 'Disciplinado'
        when resultado like 'Esforçado' then 'Esforçado'
        when resultado like 'Comprometido' then 'Comprometido' 
        when resultado like 'Aprendiz' then 'Aprendiz'
        else 'Sem resultado'
        end as resultados, count(resultado) as Quantidade
        from quiz 
        group by resultado;
            `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    primeiraKPI,
    segundaKPI,
    terceiraKPI,
    gerarGrafico,
    cadastrar
}