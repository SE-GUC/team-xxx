const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PartnerSchema = new Schema({
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
  field: {
    type: String,
    required: true
  },
  projects: {
    type: String,
    required: true
  },
  feedback: {
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
  Reviews: {
    type: String
  },
  ReviewOwner: {
    type: String
  }
});
module.exports = Partner = mongoose.model("Partner", PartnerSchema);
