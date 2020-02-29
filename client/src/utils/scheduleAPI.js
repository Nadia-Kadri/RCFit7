import axios from "axios";

export default {
  userSchedule: function () {
    return axios.get("/api/schedule/userView");
  }
};