import axios from "axios";

export default {
  viewClasses: function () {
    return axios.get("/api/class/view");
  },
  addClass: function (e) {
    return axios.post("api/class/create", e);
  },
  deleteClass: function (id) {
    return axios.delete("api/class/delete/" + id)
  }
};