var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var valorFinal = req.body.valorFinalServer;
    var resultado = req.body.resultadoServer;
    var id_usuario = req.body.usuarioServer;

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(resultado, valorFinal, id_usuario)
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
        quizModel.primeiraKPI().then(function (resultado) {
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

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.segundaKPI().then(function (resultado) {
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

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.terceiraKPI().then(function (resultado) {
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

    // Passe os valores como parâmetro e vá para o arquivo quizModel.js
    quizModel.gerarGrafico().then(function (resultado) {
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
    primeiraKPI,
    segundaKPI,
    terceiraKPI,
    gerarGrafico,
    cadastrar
}