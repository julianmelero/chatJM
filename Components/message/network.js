// Encargada de recibir HTTP y procesar para enviarlo al router

const express = require("express");
const multer = require("multer");
const controller = require("./controller");

// Creamos un módulo para las respuestas
const response = require("../../network/response");

const router = express.Router();

const upload = multer({
  dest: "public/files/",
});

// Aplicamos Rutas con sus métodos
router.get("/", function (req, res) {
  // Leer cabeceras
  // console.log(req.headers);
  // // Insertamos un valor en el header
  // res.header({
  //     "custom-header" : "Nuestro valor personalizado"
  // });
  // res.send('Lista de mensajes');

  // Respuestas personalizadas del móódulo response
  // response.success(req,res, 'Lista de mensajes');

  const filterUsers = req.query.user || null;

  controller
    .getMessages(filterUsers)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", upload.single('file'), function (req, res) {
  // console.log(req.body);
  // console.log(req.query);
  //res.send('Mensaje ' + req.body.mensaje /* mensaje = nombre del valor en url-encoded */ + ' añadido');

  // Podemos devolver los estados mediantes estatus, así hacer que todo sea más estructurado
  //res.status(201).send({error: '', 'body': 'Creado correctamente'});

  controller
    .addMessage(req.body.user, req.body.message, req.body.message2, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, "201");
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Información inválida",
        "400",
        "[networkMessage] usuario o mensaje no enviados"
      );
    });

  // if(req.query.error == "ok") {
  //     response.error(req,res, 'Error inesperado', '500', 'Es sólo una simulación de los errores');
  // }
  // else {
  // // Respuestas personalizadas del módulo response
  //     response.success(req,res, 'Creado correctamente', '201');
  // }
});

router.patch("/:id", function (req, res) {
  // console.log(req.params.id);
  // console.log(req.body.message);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, "200");
    })
    .catch((e) => {
      response.error(req, res, "Error updating", "500", e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado `, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});
router.get("/:user", function (req, res) {
  controller
    .getUserMessage(req.params.user)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

module.exports = router;
