const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    `mongodb://admin:gtJWIdJBqfaf8ZVd@ac-qu5f1ub-shard-00-00.b3kxy1b.mongodb.net:27017,ac-qu5f1ub-shard-00-01.b3kxy1b.mongodb.net:27017,ac-qu5f1ub-shard-00-02.b3kxy1b.mongodb.net:27017/?ssl=true&replicaSet=atlas-3exgn9-shard-0&authSource=admin&retryWrites=true&w=majority`
    // `mongodb+srv://admin:${process.env.MONGODB_PASSWORORD}@cluster0.hes3x.mongodb.net/auth?retryWrites=true&w=majority`
    //`mongodb+srv://admin:gtJWIdJBqfaf8ZVd@cluster0.b3kxy1b.mongodb.net/?retryWrites=true&w=majority`
    
  )
  .then(() => {
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
  })
  .catch((err) => console.log(err));

  //gtJWIdJBqfaf8ZVd