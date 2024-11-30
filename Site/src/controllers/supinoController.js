var supinoModel = require("../models/supinoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var segundo1 = req.body.valorSegundo1Server;
    var segundo2 = req.body.valorSegundo2Server;
    var segundo3 = req.body.valorSegundo3Server;
    var segundo4 = req.body.valorSegundo4Server;
    var segundo5 = req.body.valorSegundo5Server;
    var segundo6 = req.body.valorSegundo6Server;
    var segundo7 = req.body.valorSegundo7Server;
    var segundo8 = req.body.valorSegundo8Server;
    var segundo9 = req.body.valorSegundo9Server;
    var segundo10 = req.body.valorSegundo10Server;

    var cliques = req.body.qtdCliquesServer;

    var intervalo1 = req.body.intervaloSegundo1Server;
    var intervalo2 = req.body.intervaloSegundo2Server;
    var intervalo3 = req.body.intervaloSegundo3Server;
    var intervalo4 = req.body.intervaloSegundo4Server;
    var intervalo5 = req.body.intervaloSegundo5Server;
    var intervalo6 = req.body.intervaloSegundo6Server;
    var intervalo7 = req.body.intervaloSegundo7Server;
    var intervalo8 = req.body.intervaloSegundo8Server;
    var intervalo9 = req.body.intervaloSegundo9Server;
    var intervalo10 = req.body.intervaloSegundo10Server;



        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        supinoModel.cadastrar(segundo1, segundo2, segundo3, segundo4, segundo5, segundo6, segundo7, segundo8, 
            segundo9, segundo10, cliques, intervalo1, intervalo2, intervalo3, intervalo4, intervalo5, 
            intervalo6, intervalo7, intervalo8, intervalo9, intervalo10
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function primeiraKPI(req, res){
        supinoModel.primeiraKPI().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    
function segundaKPI(req, res) {

        // Passe os valores como parâmetro e vá para o arquivo supinoModel.js
        supinoModel.segundaKPI().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

        
function terceiraKPI(req, res) {

        // Passe os valores como parâmetro e vá para o arquivo supinoModel.js
        supinoModel.terceiraKPI().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
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