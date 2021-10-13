// import apiAccounts from "./src/controller/accounts.js";
const apiAccounts = require("./src/controller/accounts");
const apiStatus = require("./src/lib/api_status");

const express = require("express");
const app = express();
const PORT = 8001;

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/accounts", apiAccounts);

app.use("/api/*", function (req, res) {
  apiStatus(res, { message: "API NOT FOUND" }, 404);
});

app.use("*", function (req, res) {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
