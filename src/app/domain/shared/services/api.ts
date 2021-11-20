import axios from "axios";

const api = axios.create({
  baseURL: "https://61987dff164fa60017c230ae.mockapi.io/service-test",
});

export default api;
