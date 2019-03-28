const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getprofile: async () => {
    const profile = await axios
      .get("http://localhost:5000/api/Consultancys/5c90e01b0bfb1a24f4cbd44c")
      .catch(err => "error");
    return profile;
  },
  getcontract: async () => {
    const contract = await axios
      .get("http://localhost:5000/api/Consultancys/Contracts/5c90e01b0bfb1a24f4cbd44c")
      .catch(err => "error");
    return contract;
  },
  getmembership: async () => {
    const membership = await axios
      .get("http://localhost:5000/api/Consultancys/membership/5c90e01b0bfb1a24f4cbd44c")
      .catch(err => "error");
    return membership;
  },
  getevents: async () => {
    const events = await axios
      .get("http://localhost:5000/api/Consultancys/events/5c90ddcd59730823fc8512a8")
      .catch(err => "error");
    return events;
  }
  };

module.exports = functions;