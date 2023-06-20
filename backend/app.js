import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://Admin:2RODSQWYGxeVhuCq@mentalhealthdb.yb80h4t.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5500))
  .then(() =>
    console.log("Connected Successfully to Database and listening on port 5500")
  )
  .catch((err) => console.log(err));


  