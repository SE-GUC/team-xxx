const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MeetingSchema = new Schema({
  Memberemail_1: {
    type: String,
    required: true,

  },
  Memberemail_2: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
 
  Status: {
    type: String,
    default :"Free"

  }
 
});

module.exports = Meeting = mongoose.model("Meeting", MeetingSchema);