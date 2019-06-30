let mongoose = require("mongoose");

// Saved reference to the Schema constructor
let Schema = mongoose.Schema;

// Saved noteSchema using the Schema constructor
let noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: String,
  noteText: String

});

// This creates the model from the above schema, using mongoose's model method
let Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
