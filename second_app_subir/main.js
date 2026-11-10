var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) {
    r ={
      'message':'Aplicación de replicacion para el segundo programa (second_app) con explicacaion en documento de word'
    };
    response.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación de replicacion para el segundo programa (second_app) con explicacaion en documento de word');
});
