//Módulos
const express = require('express');
const router = express.Router();
// Body Parser: permite trabajar con el body
// YA VIENE CON EXPRESS INCLUIDO :D
//const bodyParser = require('body-parser');

// Creamos un módulo para las respuestas
const response = require('./network/response');



var app = express();

// Usamos los módulos
app.use(express.json());
//app.use(bodyParser.urlencoded( { extended: false}));
app.use(express.urlencoded( { extended: true }));
//Ponemos el Router el último, ya que si no, no funciona el BodyParser
app.use(router);


// Aplicamos Rutas con sus métodos
router.get('/message', function (req,res) {    
    // Leer cabeceras
    console.log(req.headers);
    // Insertamos un valor en el header
    res.header({
        "custom-header" : "Nuestro valor personalizado"
    });
    // res.send('Lista de mensajes');





    // Respuestas personalizadas del móódulo response
    response.success(req,res, 'Lista de mensajes');
});

router.post('/message', function (req,res) {
    console.log(req.body);
    console.log(req.query);
    //res.send('Mensaje ' + req.body.mensaje /* mensaje = nombre del valor en url-encoded */ + ' añadido');

    // Podemos devolver los estados mediantes estatus, así hacer que todo sea más estructurado
    //res.status(201).send({error: '', 'body': 'Creado correctamente'});



    if(req.query.error == "ok") {
        response.error(req,res, 'Error simulado', '400');    
    }
    else {
    // Respuestas personalizadas del móódulo response
        response.success(req,res, 'Creado correctamente', '201');
    }

});


app.listen(3000);
console.log('Escuchando en puerto 3000');