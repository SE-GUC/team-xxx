const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SlotSchema = new Schema(
  {
    lifecoachEmail: {
      type: String,
      required: true
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
      enum: ["Free", "Booked", "Confirmed"],
      default: "Free"
    },
    applicant: {
      type: String
    },
    Location: {
      type: String
    },
    BookingCon: {
      type: String,
      enum: ["Pending", "Confirmed"],
      default: "Pending"
    },
    LocationCon: {
      type: String,
      enum: ["Pending", "Confirmed"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);
module.exports = Slot = mongoose.model("Slot", SlotSchema);
