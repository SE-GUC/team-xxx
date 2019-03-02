const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ConsultancySchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  business: {
    type: String,
    required: true
  },
  partners: {
    type: String,
    required: true
  },
  boardmembers: {
    type: String,
    required: true
  },
  events: {
    type: String,
    required: true
  },
  reports: {
    type: String,
    required: true
  },
  Lifecoach: {
    type: Boolean
  },
  membership: {
    type: Date
  },
  Contracts: {
    type: String
  },
  Notifications: {
    type: String
  },
  ConsultancyAcceptance: {
    type: Boolean
  },
  projects: {
    type: String
  },
  Reviews: {
    type: String
  },
  ReviewOwner: {
    type: String
  },
  Submission: {
    type: String
  }
});
module.exports = Consultancy = mongoose.model("Consultancy", ConsultancySchema);
