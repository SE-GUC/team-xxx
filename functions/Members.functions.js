const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
    getmasterclasses: async () => {
    const masterclasses = await axios
      .get("http://localhost:5000/api/Members/")
      .catch(err => "error");
    return masterclasses;
  }
};

module.exports = functions;
