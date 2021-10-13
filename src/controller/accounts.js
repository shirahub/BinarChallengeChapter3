const express = require("express");
const accountHandler = require("../usecase/login");
const apiStatus = require("../lib/api_status");
const { body, validationResult } = require("express-validator");
const CustomError = require("../lib/error/error");
const { StatusCodes } = require("http-status-codes");

var api = express.Router();

api.post(
  "/login",
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return apiStatus(res, new CustomError(StatusCodes.BAD_REQUEST));
    }
    accountHandler
      .login(req)
      .then((result) => {
        apiStatus(res, result, 200);
      })
      .catch((err) => {
        apiStatus(res, err);
      });
  }
);

module.exports = api;
