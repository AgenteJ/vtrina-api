const express = require('express')
const routes = express.Router();
const cep = require("./controller/cep.js")

routes.get("/find/:cep", cep.find);

module.exports = routes;