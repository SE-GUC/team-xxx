const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  Title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  candidates: {
    type: String
  },
  effort: {
    type: String
  },
  duration: {
    type: String
  },
  commitment: {
    type: String
  },
  experience: {
    type: String
  },
  compensation: {
    type: String
  },
  partner: {
    type: String
  },
  // ////////////////////////////////////////Test ////////////////////////////////////////////////////////
  // moved this attribute from partner to specify if a partner want a consultant or not in this specific project
  Consultant: {
    type: Boolean
  },
  // to specify a consultant name
  consultancy: {
    type: String
  },
  consultantRandom: {
    type: Boolean
  },
  consultancyAcceptance: {
    type: Boolean,
    default: false
  },
  skills: {
    type: String
  },
  category: {
    type: String
  },
  state: {
    type: String
  },
  applicants: {
    type: String
  },
  assigned: {
    type: String
  },
  extraInfo: {
    type: String
  },
  memberWork: {
    type: String
  }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
