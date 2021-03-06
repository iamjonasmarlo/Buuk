/* Jonas Lörken */

/* Load dependencies */

const open = require("open");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const models = require("./models/models.js");
const router = require("./routes/router.js");

/* Generate values (models) */

models.generate_values();

/* App config*/

app.set("view engine", "ejs");
app.set("views", "views");

/* Middleware */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

/* Start server */

app.listen(8040, function() {
    console.log("Server is running on port 8040!");
    open("http://localhost:8040");
});