const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getSchedule: async () => {
    const Schedule = await axios
      .get("http://localhost:5000/api/Slots/5c90e2c08c0a13264778bedc")
      .catch(err => "error");
    return Schedule;
  },
  getfreeslots: async () => {
    const free = await axios
      .get("http://localhost:5000/api/Slots/status//")
      .catch(err => "error");
    return free;
  },
  bookslot: async () => {
    const updateSchema = {
      Location: "don5",
      applicant: "don5"
    };
    const booked = axios.put(
      "http://localhost:5000/api/Slots/book/5c90e2c08c0a13264778bedc",
      updateSchema
    );
    return booked;
  }
};

module.exports = functions;