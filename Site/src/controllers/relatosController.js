var relatosModel = require("../models/relatosModel");


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var relatos = req.body.relatosServer;
    var id_usuario = req.body.usuarioServer;
        // Passe os valores como parâmetro e vá para o arquivo relatosModel.js
        relatosModel.cadastrar(relatos, id_usuario)
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

                
function mostrarRelatos(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo supinoModel.js
    relatosModel.mostrarRelatos().then(function (resultado) {
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
    mostrarRelatos,
    cadastrar
}