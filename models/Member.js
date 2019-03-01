const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MemberSchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  interests: {
    type: String,
    required: true
  },
  events: {
    type: String,
    required: true
  },
  tasks: {
    type: String,
    required: true
  },
  reviews: {
    type: String,
    required: true
  },
  masterclasses: {
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

  oldProjects: {
    type: String
  },
  projects: {
    type: string
  },

  ReviewOwner: {
    tupe: string
  }
});

module.exports = Member = mongoose.model("Member", MemberSchema);
