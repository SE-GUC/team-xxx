
const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {

    
 getConsnotificatons: async () => {
    const noti = await axios
      .get("http://localhost:5000/api/Consultancys/Notifications/5c7a9cb7c7cac00498980355")
      .catch(err => "error");
    return noti;
  }
};
module.exports = functions;
