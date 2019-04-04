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
    type: [String]
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
  Consultant: {
    type: Boolean
  },
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
    type: [String]
  },
  category: {
    type: String
  },
  state: {
    type: String
  },
  applicants: {
    type: [String]
  },
  assigned: {
    type: String
  },
  extraInfo: {
    type: String
  },
  memberWork: {
    type: String
  },
  OrientaionForTheTask: {
    type: String
  },
  detaileddescription: {
    type: String
  },
  detailedplan: {
    type: String
  }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
