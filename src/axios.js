import axios from "axios";
const instance = axios.create({
  baseURL: "http://18.140.159.50:3333/",
  headers: {
    "Content-Type": "application/json",
  },
});


export default instance