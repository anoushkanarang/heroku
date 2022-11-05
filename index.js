const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const url = "mongodb://localhost/Students";

const index = express();
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected...");
});

// index.use(cors());
index.use(express.json());
index.use(bodyParser.urlencoded({ extended: true }));

const studentRouter = require("./routers/students");

index.use("/students", studentRouter);
index.listen(process.env.PORT || 9000, function () {
  console.log("server started");
});
