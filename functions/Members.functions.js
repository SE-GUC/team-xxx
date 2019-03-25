const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getmasterclasses: async () => {
    const masterclasses = await axios
      .get("http://localhost:5000/api/Members/")
      .catch(err => "error");
    return masterclasses;
  },
  getevents: async () => {
    const events = await axios
      .get("http://localhost:5000/api/Members/events/5c90f6d752429b1d4ce3dc11")
      .catch(err => "error");
    return events;
  }
};

module.exports = functions;
