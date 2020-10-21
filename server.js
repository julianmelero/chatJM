//Módulos
const express = require('express');
const router = express.Router();

var app = express();

// Usamos las rutas
app.use(router);

// Aplicamos Rutas
router.get('/', function (req,res) {
    res.send('Lista de mensajes');
});

router.post('/message', function (req,res) {
    res.send('Mensaje añadido');

});


app.listen(3000);
console.log('Escuchando en puerto 3000');