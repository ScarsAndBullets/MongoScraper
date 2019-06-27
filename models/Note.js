const mongoose = require("mongoose");

// Save reference to the schema constructor
let Schema = mongoose.Schema;

// Use the Schema constructor to create HeadlineSchema object
let NoteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },

  date: String,
  noteText: String

});

// Creates Note model from the NoteSchema object, using the model method from mongoose.
let Note = mongoose.model("Note", NoteSchema);

// Export the Headline Model
module.exports = Note;

