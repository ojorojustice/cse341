const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./wares/contactsMiddleWare")
const connectDB = require("./db/Connection")
const port = process.env.PORT || 8000;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`server is now running on port: ${port}`);
});
