// Require Express server dependency
let express = require("express");

// Setup port for local use or with host (Heroku)
let PORT = process.env.PORT || 3000;

// Instantiate this instance of express
let app = express();

// Setup an Express router
let router = express.Router();

// Designate public directory as static
app.use(express.static(__dirname + "/public"));

// All requests go through middleware
app.use(router);

// listen on designated port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});