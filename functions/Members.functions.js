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
  },
  getprofile: async () => {
    const profile = await axios
      .get("http://localhost:5000/api/Members/5c7695b4a00a7805764b3193")
      .catch(err => "error");
    return profile;
  },
  getcontract: async () => {
    const contract = await axios
      .get("http://localhost:5000/api/Members/Contracts/5c9a19ae48798e3068ae4108")
      .catch(err => "error");
    return contract;
  },
  getmembership: async () => {
    const membership = await axios
      .get("http://localhost:5000/api/Members/membership/5c9a19ae48798e3068ae4108")
      .catch(err => "error");
    return membership;
  },
  getevents: async () => {
    const events = await axios
      .get("http://localhost:5000/api/Members/events/5c90f6d752429b1d4ce3dc11")
      .catch(err => "error");
    return events;
  }
  };



module.exports = functions;
