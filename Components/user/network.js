const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");
const router = express.Router();

router.post("/", function (req, res) {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.get("/", function (req, res) {
    const filterUser = req.query.user || null;
  
        controller.getUser(filterUser)
        .then( ( userList) => {
            response.success(req,res,userList,200);
        })
        .catch(e => {
            response.error(req,res, 'Unexpected Error', 500, e);
        });  
});

module.exports = router;
