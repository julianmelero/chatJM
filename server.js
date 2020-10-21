//Módulos
const express = require('express');
const router = express.Router();
// Body Parser: permite trabajar con el body
// YA VIENE CON EXPRESS INCLUIDO :D
//const bodyParser = require('body-parser');




var app = express();

// Usamos los módulos
app.use(express.json());
//app.use(bodyParser.urlencoded( { extended: false}));
app.use(express.urlencoded( { extended: true }));
//Ponemos el Router el último, ya que si no, no funciona el BodyParser
app.use(router);


// Aplicamos Rutas con sus métodos
router.get('/', function (req,res) {    
    res.send('Lista de mensajes');
});

router.post('/message', function (req,res) {
    console.log(req.body);
    console.log(req.query);
    res.send('Mensaje ' + req.body.mensaje /* mensaje = nombre del valor en url-encoded */ + ' añadido');

});


app.listen(3000);
console.log('Escuchando en puerto 3000');