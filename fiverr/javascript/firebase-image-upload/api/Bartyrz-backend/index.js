require("dotenv").config();

const express = require("express");
// const Multer = require('multer')
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require('multer');

const Submission = require("./firebase");
const PORT = process.env.PORT || 3000;
const app = express();

const firebase = require('./firebase')
 require('@firebase/storage')

 const fileupload = require('express-fileupload')

const submissionRoutes = require("./routes/submission");

 
app.use(fileupload());

app.use(cors());
app.use(
  bodyParser.json({
    limit: "300mb",
  })
);

app.use(
  express.json({
    limit: "100mb ",
    extended: false
  })
);

app.use(
  express.urlencoded({
    limit: "100mb",
    extended: false,
    parameterLimit: 100000,
  })
);
app.use(morgan("short"));

app.use("/bartyrz", submissionRoutes.routes);

app.get('/', (request, response) => {
    response.send('Home route working');
  })

app.listen(PORT, () => {
  console.log("Bartyrz Backend API - running on PORT: " + PORT);
});
