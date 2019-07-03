// Require dependencies
let express = require("express");
let mongoose = require("mongoose");
let expressHandlebars = require("express-handlebars");

// Setup port for local use or with host (Heroku)
let PORT = process.env.PORT || 3000;

// Instantiate this instance of express
let app = express();

// Setup an Express router
let router = express.Router();

// Require routes file pass the router object
require("./config/routes")(router);

// Designate public directory as static
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to the Express app
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// All requests go through middleware
app.use(router);

let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useCreateIndex: true },
  error => {
    if (error) {
      console.log(error);
    } else {
      console.log("Mongoose DB connection is successful");
    }
  }
);

// Listen on designated port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
