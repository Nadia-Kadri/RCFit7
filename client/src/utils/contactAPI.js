import axios from "axios";

export default {
  send: function() {
    return axios.get("/api/googleapikey");
  }
};
