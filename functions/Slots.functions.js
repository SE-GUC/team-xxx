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
  getdate: async () => {
    const Date = await axios
      .get("http://localhost:5000/api/Slots/Date/5c90e2c08c0a13264778bedc")
      .catch(err => "error");
    return Date;
  },
  getlocation: async () => {
    const Date = await axios
      .get("http://localhost:5000/api/Slots/Location/5c90e2c08c0a13264778bedc")
      .catch(err => "error");
    return Location;
  }
  };

module.exports = functions;
