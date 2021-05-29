const express = require("express");
const io = require("socket.io")(app);

var app = express();
app.listen(8080);
console.log("Escuchando en 8080");


io.on("connection", function (socket) {
  console.log("Nuevo cliente conectado!");
  socket.emit("mensaje", "Bienvenido!");
});


