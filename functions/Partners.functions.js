const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getprofile: async () => {
    const profile = await axios
      .get("http://localhost:5000/api/Partners/5c7438ea6fcfc31a036229df")
      .catch(err => "error");
    return profile;
  },

getcontract: async () => {
  const contract = await axios
    .get("http://localhost:5000/api/Partners/Contracts/5c9a1d887b4be2377870eda4")
    .catch(err => "error");
  return contract;
},
getmembership: async () => {
  const membership = await axios
    .get("http://localhost:5000/api/Partners/membership/5c9a1d887b4be2377870eda4")
    .catch(err => "error");
  return membership;
},
getevents: async () => {
  const events = await axios
    .get("http://localhost:5000/api/Partners/events/5c785e95ea96d42690ec91bc")
    .catch(err => "error");
  return events;
},
getprojects: async () => {
  const projects = await axios
    .get("http://localhost:5000/api/Partners/projects/5c9a1d887b4be2377870eda4")
    .catch(err => "error");
  return projects;
},
getfeedback: async () => {
  const feedback = await axios
    .get("http://localhost:5000/api/Partners/feedback/5c9a1d887b4be2377870eda4")
    .catch(err => "error");
  return feedback;
},    
getpartnernotificatons: async () => {
   const noti = await axios
     .get("http://localhost:5000/api/Partners/Notifications/5c9b6f32143955268030fec1")
     .catch(err => "error");
   return noti;
 }
};

module.exports = functions;
