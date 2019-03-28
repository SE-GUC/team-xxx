const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {

    
 getpartnernotificatons: async () => {
    const noti = await axios
      .get("http://localhost:5000/api/Partners/Notifications/5c9b6f32143955268030fec1")
      .catch(err => "error");
    return noti;
  }
};
module.exports = functions;