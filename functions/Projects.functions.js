const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getDescriptionForAdmin: async () => {
    const Description = await axios
      .get(
        "http://localhost:5000/api/Projects/5c7aa93aa8f0f42afbe8fa3b/description"
      )
      .catch(err => "error");
    return Description;
  },
  getprojects: async () => {
    const Projects = await axios
      .get("http://localhost:5000/api/Projects/")
      .catch(err => "error");
    return Projects;
  },
  searchprojects: async () => {
    const Projects = await axios
      .get("http://localhost:5000/api/Projects/5c7aa93aa8f0f42afbe8fa3b")
      .catch(err => "error");
    return Projects;
  },
  getprojectsforuser: async () => {
    const projects = await axios
      .get("http://localhost:5000/api/projects/projects//")
      .catch(err => "error");
    return projects;
  },
  assignmember: async () => {
    const updateSchema = {
      assigned: "don5"
    };
    const member = axios.put(
      "http://localhost:5000/api/projects/assign/5c7aa93aa8f0f42afbe8fa3b",
      updateSchema
    );
    return member;
  }
};

module.exports = functions;
