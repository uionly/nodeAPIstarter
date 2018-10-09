const express = require('express');
const app = express();
const itemsRoute = require('./api/routes/itemsroute');
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const userRoutes=require("./api/routes/userroutes");
// Creating DB connection
mongoose.connect("mongodb://deepakjha:TncJaRApEiw2kMXf@nodecurd-shard-00-00-wxxny.mongodb.net:27017,nodecurd-shard-00-01-wxxny.mongodb.net:27017,nodecurd-shard-00-02-wxxny.mongodb.net:27017/test?ssl=true&replicaSet=nodecurd-shard-0&authSource=admin&retryWrites=true",
  { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("connected to mongo db");
});
// Using morgan to log 
app.use(morgan('dev'));
// Handling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
// Use body parser to reead requests easily
app.use(bodyParser.json());
// Handling different Routes  
app.use(itemsRoute);
app.use(userRoutes);
module.exports = app;