var express = require('express');
var path = require('path');
var app = express();

app.get('/pagina1',function(req, res){
res.send("<h1>Ciao che bello il mondo!</h1>");
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
    });

app.listen(3000, function(){
console.log("Server attivo sulla porta 3000");
});