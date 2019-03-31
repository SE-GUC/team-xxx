const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  createmeeting: async () => {
    const updateSchema = {
      MemberemailOne: "newtest2@hotmail.com",
        MemberemailTwo: "new2@gmail.com",
        Location: "new2",
        time: "2000-02-01T22:00:00.000Z",
        StatusMemberOne: "true",
        StatusMemberTwo: "false"
    };
    const assigned = axios.post(
      "http://localhost:5000/api/meetings/",
      updateSchema
    );
    return assigned;
  },
  suggestloc: async () => {
    const updateSchema = {
      Location: "testsssss"
    };
    const booked = axios.put(
      "http://localhost:5000/api/meetings/5c9b8209f3e4a41c7cb8e3e7",
      updateSchema
    );
    return booked;
  },
  member_status: async () => {
    const updateSchema = {
      StatusMemberOne: true
    };
    const status_memberone = axios.put(
      "http://localhost:5000/api/meetings/5c90385ca742e7167437acde",
      updateSchema
    );
    return status_memberone;
  }
};

module.exports = functions;
