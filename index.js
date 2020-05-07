//carregar a biblioteca do express
var express = require('express');
//incializando o express
var app = express();

//endpoints ou endereços da web
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//a porta que será exposta
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//criar o novo endpoint
app.get('/nomecliente', function(req, res){
    let nome = {
        "Nathalia"  : "Ramos"
    }
    res.json(nome);
});

app.get('/produto', function(req, res){
    let produto = [{
        "nome"  : "Chiclete",
        "preco" : "5,50",
        "peso" : "26,6"
    },
    {
        "nome"  : "Bala",
        "preco" : "0,10",
        "peso" : "1" 
    },
    {
        "nome"  : "Pirulito",
        "preco" : "0,30",
        "peso" : "4" 
    },
    {
        "nome"  : "Cocada",
        "preco" : "1,00",
        "peso" : "25" 
    },
    {
        "nome"  : "Doce De Leite em Sachê",
        "preco" : "1,00",
        "peso" : "15" 
    },
    {
        "nome"  : "Geladinho",
        "preco" : "0,50",
        "peso" : "9" 
    }

]
    res.json(produto);
});



