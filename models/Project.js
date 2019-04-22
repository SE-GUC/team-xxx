const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: String,
    enum: ["Yes", "No", "NA"],
    default: "NA"
  },
  consultancy: {
    type: String
  },
  consultantRandom: {
    type: Boolean
  },
  consultancyAcceptance: {
    type: String,
    enum: ["Accept", "Decline", "NA"],
    default: "NA"
  },
  skills: {
    type: [String]
  },
  category: {
    type: String,
    enum: [
      "NA",
      "Admin Support",
      "Customer Service",
      "Sales & Marketing",
      "Accounting & Consulting",
      "Legal",
      "Translation",
      "Writing",
      "Design & Creative",
      "Engineering & Architecture",
      "Data Science & Analytics",
      "IT & Networking",
      "Web, Mobile & Software Dev"
    ],
    default: "NA"
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
    type: [Object]
  },
  OrientaionForTheTask: {
    type: String
  },
  detaileddescription: {
    type: String
  },
  detailedplan: {
    type: String
  },
  feedback: {
    type: String
  }
});
ProjectSchema.index({ "$**": "text" });
module.exports = Project = mongoose.model("Project", ProjectSchema);
