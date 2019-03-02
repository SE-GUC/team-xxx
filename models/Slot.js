const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SlotSchema = new Schema({
  lifecoachEmail: {
    type: String,
    required: true,
  },
  number: {
    type: Date,
    required: true,
  },
  Date: {
    type: Date,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: "Free" /*free-pending-accepted-confirmed-rejected*/
  },
  applicant: {
    type: String
  },
  Location: {
    type: String
  }
});

module.exports = Slot = mongoose.model("Slot", SlotSchema);
