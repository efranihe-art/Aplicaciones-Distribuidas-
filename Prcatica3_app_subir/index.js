var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) {
    r ={
      'message':'Server is alive...'
    };
    response.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

// Call this service sending payload in body: raw - json
/*
{
    "valor": 21
}
*/
app.post('/duplicar', (req, res) => {
  const valor = req.body.valor;

  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    return res.status(400).json({
      "ok": false,
      "mensaje": 'El campo "valor" es obligatorio y debe ser numérico'
    });
  }

  const resultado = valor * 2;

  if (!Number.isFinite(resultado)) {
    return res.status(400).json({
      "ok": false,
      "mensaje": 'El resultado excede el rango numérico permitido'
    });
  }

  res.status(200).json({ 
  	"ok": true, 
  	"valor":resultado 
  });
});


app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
