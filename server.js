//Módulos
const express = require('express');

// const router = require('./Components/message/network');
const router = require('./network/routes') ;
// Body Parser: permite trabajar con el body
// YA VIENE CON EXPRESS INCLUIDO :D
//const bodyParser = require('body-parser');





var app = express();

// Usamos los módulos
app.use(express.json());
//app.use(bodyParser.urlencoded( { extended: false}));
app.use(express.urlencoded( { extended: true }));
//Ponemos el Router el último, ya que si no, no funciona el BodyParser
// app.use(router);

router(app);

// app.use('/app', express.static('public'));



app.listen(3000);
console.log('Escuchando en puerto 3000');