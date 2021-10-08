const express = require("express");

const app = express();
app.use("/static", express.static("./public"));
app.use(express.json());

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
