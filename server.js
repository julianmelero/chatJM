//Módulos
const express = require("express");
var app = express();
const server = require("http").Server(app);
require('dotenv').config();
const config = require("./config");

const cors = require("cors");

const socket = require("./socket");

// Llamamos a conexión DB
const db = require("./db");

// const router = require('./Components/message/network');
const router = require("./network/routes");
// Body Parser: permite trabajar con el body
// YA VIENE CON EXPRESS INCLUIDO :D
//const bodyParser = require('body-parser');


db(config.dbUrl);

app.use(cors());
// Usamos los módulos
app.use(express.json());
//app.use(bodyParser.urlencoded( { extended: false}));
app.use(express.urlencoded({ extended: true }));
//Ponemos el Router el último, ya que si no, no funciona el BodyParser
// app.use(router);
/*
Envío app ya que lo que haré es usar su función "use"
*/
router(app);

socket.connect(server);
// app.use('/app', express.static('public'));

server.listen(config.port, function () {
  console.log("Escuchando en puerto " + config.host + ':' + config.port);
});
