const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
    text: true
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
    type: String,
    enum: ["Pending", "Posted", "Under Review", "WIP", "Finished"],
    default: "Pending"
  },
  statevalue: {
    type: Number,
    enum: [20, 40, 60, 80, 100],
    default: 20
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
ProjectSchema.index({ "$**": "text" });
module.exports = Project = mongoose.model("Project", ProjectSchema);
