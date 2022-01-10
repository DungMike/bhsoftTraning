const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require("dotenv").config();
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const auth = require("./middleware/auth");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
require("./models/database").connect();
app.use(require("./routers/web"))

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use('/public/images', express.static('./public/images'));


module.exports  = app;