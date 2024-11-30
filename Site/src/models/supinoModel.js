
var database = require("../database/config");


function cadastrar(intervalo1, intervalo2, intervalo3, intervalo4, intervalo5, intervalo6, intervalo7, intervalo8, intervalo9, intervalo10, cliques, 
    segundo1, segundo2, segundo3, segundo4, segundo5, segundo6, segundo7, segundo8, segundo9, segundo10
 ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
               INSERT INTO supinoGame (
            intervalo1, intervalo2, intervalo3, intervalo4, intervalo5, 
            intervalo6, intervalo7, intervalo8, intervalo9, intervalo10, 
            cliques, 
            segundo1, segundo2, segundo3, segundo4, segundo5, 
            segundo6, segundo7, segundo8, segundo9, segundo10
        
            )  VALUES (
              
            ${intervalo1}, ${intervalo2}, ${intervalo3}, ${intervalo4}, ${intervalo5}, 
            ${intervalo6}, ${intervalo7}, ${intervalo8}, ${intervalo9}, ${intervalo10}, 
            ${cliques}, 
            ${segundo1}, ${segundo2}, ${segundo3}, ${segundo4}, ${segundo5}, 
            ${segundo6}, ${segundo7}, ${segundo8}, ${segundo9}, ${segundo10}
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function primeiraKPI() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
      
          select truncate(cliques / 10, 2) as mediaCliques from supinoGame order by idGame desc limit 1; 
    `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function segundaKPI() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    select cliques as totalCliques from supinoGame order by idGame desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function terceiraKPI() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
    select max(greatest(segundo1, segundo2, segundo3, segundo4, segundo5, segundo6, segundo7, segundo8, segundo9, segundo10)) as maiorPico
    from supinoGame;

    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function gerarGrafico() {

    // Passe os valores como parâmetro e vá para o arquivo supinoModel.js
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT 
    intervalo10 AS I10,
    intervalo9 AS I9,
    intervalo8 AS I8,
    intervalo7 AS I7,
    intervalo6 AS I6,
    intervalo5 AS I5,
    intervalo4 AS I4,
    intervalo3 AS I3,
    intervalo2 AS I2,
    intervalo1 AS I1,
    segundo10 AS S10,
    segundo9 AS S9,
    segundo8 AS S8,
    segundo7 AS S7,
    segundo6 AS S6,
    segundo5 AS S5,
    segundo4 AS S4,
    segundo3 AS S3,
    segundo2 AS S2,
    segundo1 AS S1
    FROM supinoGame order by idGame desc limit 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


module.exports = {
    cadastrar,
    primeiraKPI,
    segundaKPI,
    terceiraKPI,
    gerarGrafico

}