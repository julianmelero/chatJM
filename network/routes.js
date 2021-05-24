/*
Este archivo contiene todas las rutas de los todos los componentes
*/

// const express = require('express');
const message = require('../Components/message/network')

// Función que añade todas las rutas

const routes = function (server) {
    server.use('/message', message);    
}

module.exports = routes;