import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15df83ddb7a44177a20032a85e45d920",
  },
});
