import axios from "axios";

export default {
  send: function() {
    return axios.post("/api/send");
  }
};
