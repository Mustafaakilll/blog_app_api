// IMPORT DEPENDENCIES
const express = require("express");
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// IMPORT CUSTOM FILES
const db = require("./config/db");

const app = express();

// CONFIGURE DATABASE AND MONGOOSE
mongoose.set("useCreateIndex", true);
mongoose
  .connect(db.full_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((reason) => {
    console.log(`HATA : ${reason}`);
  });

// CORS
// app.use(cors);

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MORGAN
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Hello World");
});

const Blog = require("./api/router/BlogRouter");
app.use("/blog", Blog);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
