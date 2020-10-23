// Encargada de recibir HTTP y procesar para enviarlo al router

const express = require('express');
const controller = require('./controller');

// Creamos un módulo para las respuestas
const response = require('../../network/response');

const router = express.Router();



// Aplicamos Rutas con sus métodos
router.get('/', function (req,res) {    
    // Leer cabeceras
    // console.log(req.headers);
    // // Insertamos un valor en el header
    // res.header({
    //     "custom-header" : "Nuestro valor personalizado"
    // });
    // res.send('Lista de mensajes');


    // Respuestas personalizadas del móódulo response
    // response.success(req,res, 'Lista de mensajes');



    // Con un Mock

    controller.getMessages()
    .then( ( messageList) => {
        response.success(req,res,messageList,200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500, e);
    });
});

router.post('/', function (req,res) {
    // console.log(req.body);
    // console.log(req.query);
    //res.send('Mensaje ' + req.body.mensaje /* mensaje = nombre del valor en url-encoded */ + ' añadido');

    // Podemos devolver los estados mediantes estatus, así hacer que todo sea más estructurado
    //res.status(201).send({error: '', 'body': 'Creado correctamente'});

    controller.addMessage(req.body.user, req.body.message)
    .then( (fullMessage) => {
        response.success(req,res, fullMessage, '201');
    })
    .catch( e => {
        response.error(req,res, 'Información inválida', '400', '[networkMessage] usuario o mensaje no enviados');    
    });

    // if(req.query.error == "ok") {
    //     response.error(req,res, 'Error inesperado', '500', 'Es sólo una simulación de los errores');    
    // }
    // else {
    // // Respuestas personalizadas del módulo response
    //     response.success(req,res, 'Creado correctamente', '201');
    // }

});


module.exports = router;