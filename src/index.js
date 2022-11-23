const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

const router = require("./routes");
const db = require("./config/db");

//connect to db

db.connect();

//static file
app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
