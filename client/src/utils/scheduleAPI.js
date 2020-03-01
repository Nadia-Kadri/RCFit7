import axios from "axios";

export default {
  userSchedule: function () {
    return axios.get("/api/schedule/userView");
  },
  userSignUp: function (classId) {
    return axios.put("api/schedule/user/signup/" + classId)
  }
};