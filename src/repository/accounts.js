const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../lib/error/error");

const getAccount = (username) => {
  return new Promise(function (resolve, reject) {
    fs.readFile("src/repository/accounts.json", (err, data) => {
      if (err) {
        reject(new CustomError(StatusCodes.INTERNAL_SERVER_ERROR));
      } else {
        let accounts = JSON.parse(data);
        temp = accounts.find((a) => a.username == username);
        resolve(temp);
      }
    });
  });
};

const accountRepo = {
  getAccount: (username) => {
    return getAccount(username);
  },
};

module.exports = accountRepo;
