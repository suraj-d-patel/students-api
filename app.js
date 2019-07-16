const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const secrets = require('./secrets');

const studentRoutes = require("./routes/student");
const app = express();

mongoose.connect("mongodb+srv://suraj:" + secrets.MONGO_Password + "@cluster0-ropza.gcp.mongodb.net/test",{ useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/api/student", studentRoutes);

module.exports = app;
