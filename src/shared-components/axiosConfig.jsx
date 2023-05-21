// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const axiosConfig = axios.create({
  // .. where we make our configurations
  withCredentials: false,
});

axios.defaults.withCredentials = false;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axiosConfig;
