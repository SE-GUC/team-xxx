const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getSchedule: async () => {
    const Schedule = await axios
      .get("http://localhost:5000/api/Slots/5c9036ad4983e415d453d311")
      .catch(err => "error");
    return Schedule;
  }
};

module.exports = functions;
