import axios from "axios";

export default {
  viewClasses: function () {
    return axios.get("/api/class/view");
  },
  addClass: function () {
    return axios.post("api/class/create");
  }
};