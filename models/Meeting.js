const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MeetingSchema = new Schema({
  MemberemailOne: {
    type: String,
    required: true
  },
  MemberemailTwo: {
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
  StatusMemberOne: {
    type: Boolean
  },
  StatusMemberTwo: {
    type: Boolean
  }
});
module.exports = Meeting = mongoose.model("Meeting", MeetingSchema);
