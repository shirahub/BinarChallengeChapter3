const express = require("express");
const accountHandler = require("../usecase/login");
const apiStatus = require("../lib/api_status");
var api = express.Router();

api.post("/login", function (req, res, next) {
  accountHandler
    .login(req)
    .then((result) => {
      apiStatus(res, result, 200);
    })
    .catch((err) => {
      apiStatus(res, err);
    });
});

module.exports = api;
