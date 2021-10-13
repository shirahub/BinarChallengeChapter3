const accountRepo = require("../repository/accounts");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../lib/error/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(username, password) {
  let account = await accountRepo.getAccount(username);

  return new Promise(async (resolve, reject) => {
    if (account && (await bcrypt.compare(password, account.password))) {
      let token = jwt.sign(
        { id: account.id, username: account.username },
        "secret!?",
        {
          expiresIn: "72h",
        }
      );
      resolve({ id: account.id, username: account.username, token: token });
    }
    reject(new CustomError(StatusCodes.UNAUTHORIZED));
  });
}

const accountHandler = {
  login: (req) => {
    return login(req.body.username, req.body.password);
  },
};

module.exports = accountHandler;
