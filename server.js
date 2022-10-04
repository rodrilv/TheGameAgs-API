require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.disable('X-Powered-By');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, token"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  next();
});
app.use('/api/v1', require('./routes/index'));
app.listen(process.env.EXPRESS_PORT, () => {
  console.log("Server started on port:", process.env.EXPRESS_PORT);
});
