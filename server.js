// Require dependencies

// Express = Server NPM
const express = require("express");
// Handlebars templating
const expressHandlebars = require("express-handlebars");
// Mongo DB object modeling for DB collections
const mongoose = require("mongoose");
// Promise based HTTP library for API calls
const axios = require("axios");
// Cheerio - web scraping NPM
const cheerio = require("cheerio");

// Require DB models
const db = require("./models")

// Setup port for heroku or localHost:3000
let PORT = process.env.PORT || 3000;

// Instantiate Express
const app = express();

// Set up Express Router
const router = express.Router();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("./public"));
// Connect Handlebars to Express
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Have requests go through router middleware
app.use(router);

// Connect to App Database (Heroku deployed or local)
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mongoose connection to mongoScraper is successful")
  }
})

// Set up server listener
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});