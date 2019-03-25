const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getAdmins: async () => {
    const Admins = await axios
      .get("http://localhost:5000/api/Admins/5c7a985bc7cac00498980354")
      .catch(err => "error");
    return Admins;
  }, getDescriptionForAdmin: async () => {
    const Description = await axios
      .get("http://localhost:5000/api/Projects/5c7aa93aa8f0f42afbe8fa3b/description")
      .catch(err => "error");
    return Description;
  }
};

module.exports = functions;
