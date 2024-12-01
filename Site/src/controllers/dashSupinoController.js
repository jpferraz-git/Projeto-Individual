var dashSupinoModel = require("../models/dashSupinoModel");

function kpiTop1(req, res){
    dashSupinoModel.kpiTop1().then(function (resultado) {
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

function kpiCliquesTop1(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo dashSupinoModel.js
    dashSupinoModel.kpiCliquesTop1().then(function (resultado) {
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

    
function kpiMediaCliquesTop1(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo dashSupinoModel.js
    dashSupinoModel.kpiMediaCliquesTop1().then(function (resultado) {
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


function kpiTop2(req, res){
    dashSupinoModel.kpiTop2().then(function (resultado) {
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

function kpiCliquesTop2(req, res) {
    dashSupinoModel.kpiCliquesTop2().then(function (resultado) {
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

function kpiMediaCliquesTop2(req, res) {
    dashSupinoModel.kpiMediaCliquesTop2().then(function (resultado) {
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

// Copiando e adaptando para Top 3

function kpiTop3(req, res){
    dashSupinoModel.kpiTop3().then(function (resultado) {
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

function kpiCliquesTop3(req, res) {
    dashSupinoModel.kpiCliquesTop3().then(function (resultado) {
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

function kpiMediaCliquesTop3(req, res) {
    dashSupinoModel.kpiMediaCliquesTop3().then(function (resultado) {
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
        
function gerarGrafico2(req, res) {

// Passe os valores como parâmetro e vá para o arquivo dashSupinoModel.js
dashSupinoModel.gerarGrafico().then(function (resultado) {
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
    
    kpiCliquesTop1,
    kpiCliquesTop2,
    kpiCliquesTop3,
    kpiMediaCliquesTop1,
    kpiMediaCliquesTop2,
    kpiMediaCliquesTop3,
    kpiTop1,
    kpiTop2,
    kpiTop3,
    gerarGrafico2,

}