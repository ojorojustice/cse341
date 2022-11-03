const express = require("express");
const routes = require(".");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`running on port ${port}`);
});