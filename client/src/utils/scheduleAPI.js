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
  },
  createSchedule: function (schedule) {
    return axios.post("api/schedule/create", schedule)
  },
  deleteSchedule: function (scheduleId) {
    return axios.delete("api/schedule/delete/" + scheduleId)
  },
  viewUsers: function (scheduleId) {
    return axios.get("/api/schedule/admin/view/" + scheduleId)
  }
};