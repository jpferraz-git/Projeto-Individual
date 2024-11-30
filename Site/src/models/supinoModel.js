
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
      
          select case when resultado like 'A' then 'Abacaxi'
        when resultado like 'B' then 'Batata'
        when resultado like 'C' then 'Cenoura' 
        when resultado like 'D' then 'Damasco'
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
        
    select greatest(segundo1, segundo2, segundo3, segundo4, segundo5, segundo6, segundo7, segundo8, segundo9, segundo10) as maior_valor
    from supinoGame;

    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function gerarGrafico(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo supinoModel.js
    supinoModel.gerarGrafico().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    cadastrar,
    primeiraKPI,
    segundaKPI,
    terceiraKPI,
    gerarGrafico

}