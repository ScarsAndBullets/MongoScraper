const mongoose = require("mongoose");

// Save reference to the schema constructor
let Schema = mongoose.Schema;

// Use the Schema constructor to create HeadlineSchema object
let HeadlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    uniuque: true
  },

  summary: {
    type: String,
    required: true
  },

  date: String,
  saved: {
    type: Boolean,
    default: false
  }

});

// Creates Headline model from the HeadlineSchema object, using the model method from mongoose.
let Headline = mongoose.model("Headline", HeadlineSchema);

// Export the Headline Model
module.exports = Headline;

