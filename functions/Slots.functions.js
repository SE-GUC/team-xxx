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
  },
  postschedule: async () => {
    const updateSchema = {
      lifecoachEmail: "donnew@email.com",
      number: "2 / 2 / 2000",
      Date: " 2 / 2 / 2000",
      startTime: "2 / 2 / 2000",
      endTime: "2 / 2 / 2000",
      status: "donnew",
      applicant: "donnew",
      Location: "donnew"
    };
    const posted = axios.post("http://localhost:5000/api/Slots/", updateSchema);
    return posted;
  },
  getdate: async () => {
    const Date = await axios
      .get("http://localhost:5000/api/Slots/Date/5c90e2c08c0a13264778bedc")
      .catch(err => "error");
    return Date;
  },
  getlocation: async () => {
    const Location = await axios
      .get("http://localhost:5000/api/Slots/Location/5c90e2c08c0a13264778bedc")
      .catch(err => "error");
    return Location;
  }
};

module.exports = functions;
