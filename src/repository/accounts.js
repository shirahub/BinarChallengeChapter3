const fs = require("fs");

const getAccount = (username) => {
  return new Promise(function (resolve, reject) {
    fs.readFile("src/repository/accounts.json", (err, data) => {
      if (err) {
        reject(err);
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
