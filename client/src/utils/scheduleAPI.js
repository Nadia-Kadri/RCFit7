import axios from "axios";

export default {
  userSchedule: function () {
    return axios.get("/api/schedule/userView");
  },
  userSignUp: function (scheduleId) {
    return axios.put("api/schedule/user/signup/" + scheduleId)
  },
  userCancel: function (scheduleId) {
    return axios.put("api/schedule/user/cancel/" + scheduleId)
  }
};