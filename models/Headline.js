let mongoose = require("mongoose");

// Saved reference to the Schema constructor
let Schema = mongoose.Schema;

// headlineSchema object created from Schema constructor
let headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }

});

// This creates the model from the above schema, using mongoose's model method
let Headline = mongoose.model("Headline", headlineSchema);

// Export the Headline model
module.exports = Headline;
