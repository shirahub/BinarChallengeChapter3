const accountRepo = require("../repository/accounts");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../lib/error/error");

async function login(username, password) {
  let account = await accountRepo.getAccount(username);

  return new Promise((resolve, reject) => {
    if (!account) {
      reject(new CustomError(StatusCodes.UNAUTHORIZED));
    }

    if (account.password != password) {
      reject(new CustomError(StatusCodes.UNAUTHORIZED));
    }

    resolve({ id: account.id, username: account.username });
  });
}

const accountHandler = {
  login: (req) => {
    return login(req.body.username, req.body.password);
  },
};

module.exports = accountHandler;
