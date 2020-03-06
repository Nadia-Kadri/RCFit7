import axios from "axios";

export default {
  send: function(user) {
    return axios.post("/api/send", user);
  }
};
