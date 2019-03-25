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
  }
};

module.exports = functions;
