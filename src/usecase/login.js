const accountRepo = require("../repository/accounts");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../lib/error/error");
const jwt = require("jsonwebtoken");

async function login(username, password) {
  let account = await accountRepo.getAccount(username);

  return new Promise((resolve, reject) => {
    if (!account || account.password != password) {
      reject(new CustomError(StatusCodes.UNAUTHORIZED));
    }

    let token = jwt.sign(
      { id: account.id, username: account.username },
      "secret!?",
      {
        expiresIn: "72h",
      }
    );

    resolve({ id: account.id, username: account.username, token: token });
  });
}

const accountHandler = {
  login: (req) => {
    return login(req.body.username, req.body.password);
  },
};

module.exports = accountHandler;
