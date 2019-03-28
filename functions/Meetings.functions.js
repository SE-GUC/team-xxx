const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  createmeeting: async () => {
    const updateSchema = {
      MemberemailOne: "new",
      MemberemailTwo: "new",
      Location: "new",
      time: "2000-02-01T22:00:00.000Z",
      StatusMemberOne: false,
      StatusMemberTwo: true
    };
    const assigned = axios.post(
      "http://localhost:5000/api/meetings/",
      updateSchema
    );
    return assigned;
  },
  suggestloc: async () => {
    const updateSchema = {
      Location: "testvalid"
    };
    const booked = axios.put(
      "http://localhost:5000/api/meetings/5c9b8209f3e4a41c7cb8e3e7",
      updateSchema
    );
    return booked;
  }
};

module.exports = functions;
